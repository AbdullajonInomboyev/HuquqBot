"""
search_api.py — HuquqBot v2.6
Security fixes: static allowlist, thread-safe stats, CORS, XSS
"""
import os, re, json, uuid, logging, sqlite3, threading
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from groq import Groq
from dotenv import load_dotenv
import gdown
import fitz
from docx import Document

load_dotenv()
app = Flask(__name__, static_folder=".", static_url_path="")

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)

# ── Config ────────────────────────────────────────────────────────────────────
DB_PATH        = os.getenv("DB_PATH", "/app/data/ldb.db")
GROQ_KEY       = os.getenv("GROQ_API_KEY")
DATA_DIR       = os.getenv("DATA_DIR", "/app/data")
GDRIVE_FILE_ID = os.getenv("GDRIVE_FILE_ID", "1RpAWH8GxImR2L8DVX9sL_Z_dM5qbLYPX")  # M-5
WEBAPP_URL     = os.getenv("WEBAPP_URL", "")
LANG_ID        = int(os.getenv("LANG_ID", 4))
MAX_RESULTS    = int(os.getenv("MAX_RESULTS", 5))
MAX_TEXT_LEN   = int(os.getenv("MAX_TEXT_LEN", 3000))
MAX_Q_LEN      = 5000
MAX_FILE_MB    = 50
UPLOAD_FOLDER  = os.getenv("UPLOAD_FOLDER", "/tmp/uploads")
BOT_USERNAME   = os.getenv("BOT_USERNAME", "@yuridikAIbot")

SCORE_TITLE_FULL    = 200
SCORE_TITLE_KEYWORD = 40
SCORE_BODY_KEYWORD  = 8

# C-1: faqat ruxsat etilgan fayllar
ALLOWED_STATIC = {'index.html', 'img/logo.png', 'favicon.ico'}

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)
FEEDBACK_FILE = os.path.join(DATA_DIR, "feedback.json")
STATS_FILE    = os.path.join(DATA_DIR, "stats.json")
_stats_lock   = threading.Lock()  # C-2: thread-safe stats

# GROQ_KEY validatsiyasi
if not GROQ_KEY:
    logger.warning("GROQ_API_KEY not set — AI features unavailable until configured")

# M-2: fayl hajmi cheki
app.config['MAX_CONTENT_LENGTH'] = MAX_FILE_MB * 1024 * 1024

# M-7: CORS — faqat ruxsat etilgan originlar
allowed_origins = [o for o in [WEBAPP_URL, "https://web.telegram.org"] if o]
CORS(app, origins=allowed_origins if allowed_origins else "*")

# ── DB download ───────────────────────────────────────────────────────────────
def download_db():
    try:
        if not os.path.exists(DB_PATH) or os.path.getsize(DB_PATH) < 1_000_000:
            os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
            logger.info("ldb.db yuklanmoqda...")
            gdown.download(f"https://drive.google.com/uc?id={GDRIVE_FILE_ID}", DB_PATH, quiet=False)
            logger.info(f"ldb.db yuklandi: {os.path.getsize(DB_PATH)//1024//1024}MB")
        else:
            logger.info(f"ldb.db mavjud: {os.path.getsize(DB_PATH)//1024//1024}MB")
    except Exception as e:
        logger.error(f"DB yuklanmadi: {e}")

download_db()
client = Groq(api_key=GROQ_KEY) if GROQ_KEY else None

# ── Thread-safe DB (H-6) ──────────────────────────────────────────────────────
_local = threading.local()

def get_db():
    if not hasattr(_local, 'db') or _local.db is None:
        _local.db = sqlite3.connect(DB_PATH, check_same_thread=True)
        _local.db.row_factory = sqlite3.Row
        _local.db.execute("PRAGMA journal_mode=WAL")
        _local.db.execute("PRAGMA cache_size=10000")
        _local.db.execute("PRAGMA temp_store=MEMORY")
    return _local.db

# ── JSON helpers ──────────────────────────────────────────────────────────────
def load_json(p, d):
    try:
        if os.path.exists(p):
            with open(p, 'r', encoding='utf-8') as f:
                return json.load(f)
    except (json.JSONDecodeError, IOError, OSError) as e:  # H-1: bare except yo'q
        logger.warning(f"load_json failed for {p}: {e}")
    return d

def save_json(p, data):
    try:
        # Atomic write — truncated file xavfini yo'q qiladi
        tmp = p + ".tmp"
        with open(tmp, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        os.replace(tmp, p)
    except (IOError, OSError) as e:
        logger.error(f"save_json failed for {p}: {e}")

def record_question(q, lang='uz'):
    lang = lang if lang in ('uz', 'ru') else 'uz'
    with _stats_lock:  # C-2: thread-safe
        stats = load_json(STATS_FILE, {"counts_uz": {}, "counts_ru": {}, "questions": []})
        key = f"counts_{lang}"
        if key not in stats:
            stats[key] = {}
        stats[key][q] = stats[key].get(q, 0) + 1
        stats["questions"] = (stats["questions"] + [{"q": q, "lang": lang, "ts": datetime.now().isoformat()}])[-500:]
        save_json(STATS_FILE, stats)

def get_top_questions(n=12, lang='uz'):
    lang = lang if lang in ('uz', 'ru') else 'uz'
    stats = load_json(STATS_FILE, {"counts_uz": {}, "counts_ru": {}})
    counts = stats.get(f"counts_{lang}", {})
    top = sorted(counts.items(), key=lambda x: x[1], reverse=True)[:n]
    return [q for q, _ in top]

# ── HTML cleaner ──────────────────────────────────────────────────────────────
def clean_html(text):
    if not text: return ""
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
    text = re.sub(r'<[^>]+>', ' ', text)
    for e, r in [('&nbsp;', ' '), ('&amp;', '&'), ('&lt;', '<'), ('&gt;', '>')]:
        text = text.replace(e, r)
    return re.sub(r'\s{2,}', ' ', text).strip()

# H-3: SQL wildcard escape
def escape_like(s):
    return s.replace('\\', '\\\\').replace('%', '\\%').replace('_', '\\_')

# ── RU→UZ tarjima ─────────────────────────────────────────────────────────────
RU_TO_UZ = {
    'труд': 'mehnat', 'трудов': 'mehnat', 'работа': 'ish', 'работник': 'xodim',
    'зарплат': 'ish haqi', 'отпуск': 'ta\'til', 'увольнен': 'bo\'shatish',
    'налог': 'soliq', 'ндс': 'qqs', 'доход': 'daromad', 'прибыл': 'foyda',
    'имуществ': 'mulk', 'недвижим': 'ko\'chmas mulk', 'земл': 'yer', 'квартир': 'uy-joy',
    'ипотек': 'ipoteka', 'аренд': 'ijara', 'купл': 'sotib olish', 'продаж': 'sotish',
    'брак': 'nikoh', 'развод': 'ajrashish', 'алимент': 'nafaqa', 'наследств': 'meros',
    'семь': 'oila', 'ребен': 'bola', 'опек': 'vasiylik',
    'пенси': 'pensiya', 'инвалид': 'nogironlik', 'страхован': 'sug\'urta',
    'транспорт': 'transport', 'автомобил': 'avtomobil', 'водител': 'haydovchi',
    'лицензи': 'litsenziya', 'регистрац': 'ro\'yxatdan', 'предприним': 'tadbirkorlik',
    'договор': 'shartnoma', 'соглашен': 'kelishuv', 'контракт': 'shartnoma',
    'суд': 'sud', 'штраф': 'jarima', 'кредит': 'kredit', 'банк': 'bank',
    'граждан': 'fuqaro', 'паспорт': 'pasport',
    'жилищ': 'uy-joy', 'медицин': 'tibbiy', 'образован': 'ta\'lim',
    'таможн': 'bojxona', 'патент': 'patent', 'уголовн': 'jinoyat',
    'арест': 'hibsga olish', 'прокурор': 'prokuror', 'нотариус': 'notarius',
    'строительств': 'qurilish', 'разрешен': 'ruxsat',
    'акционер': 'aksiyador', 'банкрот': 'bankrot',
}

# ── Search ────────────────────────────────────────────────────────────────────
def search_laws(query, limit=MAX_RESULTS):
    stop_uz = {'uchun','nima','qanday','necha','kerak','olsam','qilsa','men','sen',
               'biz','siz','bu','shu','va','yoki','ham','da','ga','dan','ni','ning',
               'mumkinmi','boladi','mumkin','bo\'ladi','agar','lekin','chunki'}
    stop_ru = {'для','что','как','сколько','если','нужно','можно','нельзя','надо',
               'я','ты','он','мы','вы','они','это','или','и','но','в','на',
               'с','по','за','при','от','до','из','к','ли','мне','вам','нам'}

    raw = re.split(r'\s+', query.strip().lower())
    is_ru = detect_lang(query) == 'ru'  # M-4: detect_lang ishlatiladi
    stop = stop_ru if is_ru else stop_uz
    kw = [w for w in raw if len(w) > 3 and w not in stop] or [w for w in raw if len(w) > 2]
    if not kw:
        return []

    if is_ru:
        uz_kw = []
        for w in kw:
            found = False
            for ru, uz in RU_TO_UZ.items():
                if ru in w:
                    uz_kw.append(uz)
                    found = True
                    break
            if not found:
                uz_kw.append(w)
        search_kw = uz_kw
        logger.info(f"RU->UZ: {list(zip(kw, search_kw))}")
    else:
        search_kw = kw

    logger.info(f"Search KW: {search_kw}")

    try:
        conn = get_db()
    except Exception as e:
        logger.warning(f"DB ulanmadi: {e}")
        return []

    results = {}

    def add(row, score):
        lid = row["lact_id"]
        if lid not in results:
            results[lid] = {
                "lact_id": lid, "title": row["title"] or "",
                "date": row["acceptance_date"] or "", "number": row["lact_number"] or "",
                "text": clean_html(row["text"] or "")[:MAX_TEXT_LEN],
                "url": f"https://lex.uz/uz/docs/{lid}", "score": score
            }
        else:
            results[lid]["score"] += score

    # M-3: connection resource leak fixed
    # 1. To'liq ibora
    try:
        full = escape_like(' '.join(search_kw[:3]))
        rows = conn.execute("""
            SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
            FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
            WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ? ESCAPE '\\'
            ORDER BY a.id DESC LIMIT ?
        """, (LANG_ID, f"%{full}%", limit * 2)).fetchall()
        for r in rows:
            add(r, SCORE_TITLE_FULL)
    except Exception as e:
        logger.error(f"Search 1: {e}")

    # 2. Alohida kalit so'zlar
    for w in search_kw:
        try:
            ew = escape_like(w)
            rows = conn.execute("""
                SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
                FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
                WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ? ESCAPE '\\'
                ORDER BY a.id DESC LIMIT ?
            """, (LANG_ID, f"%{ew}%", limit * 3)).fetchall()
            for r in rows:
                add(r, SCORE_TITLE_KEYWORD * len(w))
        except Exception as e:
            logger.error(f"Search 2 ({w}): {e}")

    # 3. Matnda qidiruv
    if len(results) < limit:
        for w in search_kw[:2]:
            try:
                ew = escape_like(w)
                rows = conn.execute("""
                    SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
                    FROM acts a INNER JOIN act_contents c ON a.lact_id=c.lact_id
                    WHERE a.lang_id=? AND a.status='Y' AND LOWER(c.text) LIKE ? ESCAPE '\\'
                    ORDER BY a.id DESC LIMIT ?
                """, (LANG_ID, f"%{ew}%", limit * 2)).fetchall()
                for r in rows:
                    add(r, SCORE_BODY_KEYWORD * len(w))
            except Exception as e:
                logger.error(f"Search 3 ({w}): {e}")

    top = sorted(results.values(), key=lambda x: x["score"], reverse=True)[:limit]
    logger.info(f"Top: {[r['title'][:30] for r in top[:3]]}")
    return top

# ── Source filter ─────────────────────────────────────────────────────────────
def filter_sources(sources, answer, query):
    if not sources or not answer:
        return sources
    a_text = f"{answer.get('category','')} {answer.get('legalBasis','')} {answer.get('simpleAnswer','')}".lower()
    q_text = query.lower()
    a_words = {w for w in re.split(r'\s+', f"{a_text} {q_text}") if len(w) > 3}
    filtered = []
    for s in sources:
        title_words = set(re.split(r'\s+', s.get('title', '').lower()))
        if len(a_words & title_words) >= 1:
            filtered.append(s)
    return filtered if filtered else sources[:1]

# ── AI ────────────────────────────────────────────────────────────────────────
SYS_UZ = """Sen O'zbekiston Respublikasi qonunchiligini chuqur biladigan yuridik yordamchisan.
Suhbat davomida mavzudan chiqma. Aniq, sodda, amaliy javob ber.
FAQAT JSON:
{"category":"Kategoriya","icon":"emoji","simpleAnswer":"2-4 gap","steps":["qadam"],"legalBasis":"qonun va modda","warning":"yoki null","confidence":"high|medium|low"}"""

SYS_RU = """Ты опытный юридический помощник по законодательству Узбекистана.
Не выходи за рамки темы. Отвечай чётко, просто, практично.
Только JSON:
{"category":"Категория","icon":"emoji","simpleAnswer":"2-4 предложения","steps":["шаг"],"legalBasis":"закон и статья","warning":"или null","confidence":"high|medium|low"}"""

DOC_SYSTEMS = {
    'uz': {
        'shartnoma': """Sen yuridik ekspertsan. Shartnomani tahlil qil:
1. Tomonlar va majburiyatlari 2. Asosiy shartlar va muddatlar 3. Xavfli bandlar 4. Qonunchilikka muvofiqligi 5. Tavsiyalar
FAQAT JSON: {"category":"Shartnoma tahlili","icon":"📄","simpleAnswer":"xulosa","steps":["qadam"],"legalBasis":"qonun","warning":"xavfli bandlar yoki null","confidence":"high|medium|low"}""",
        'ariza': """Sen yuridik ekspertsan. Arizani tahlil qil:
1. Maqsad va asoslar 2. To'g'ri rasmiylashtirilganmi 3. Kamchiliklar 4. Keyingi qadamlar
FAQAT JSON: {"category":"Ariza tahlili","icon":"📝","simpleAnswer":"xulosa","steps":["qadam"],"legalBasis":"qonun","warning":"kamchiliklar yoki null","confidence":"high|medium|low"}""",
        'qaror': """Sen yuridik ekspertsan. Qarorni tahlil qil:
1. Organ va vakolati 2. Huquqiy asoslar 3. Amalga oshirish tartibi
FAQAT JSON: {"category":"Qaror tahlili","icon":"📋","simpleAnswer":"xulosa","steps":["qadam"],"legalBasis":"qonun","warning":"muammolar yoki null","confidence":"high|medium|low"}""",
        'hujjat': """Sen yuridik ekspertsan. Hujjatni tahlil qil:
1. Turi va maqsadi 2. Asosiy mazmuni 3. Yuridik ahamiyati 4. E'tibor kerak joylar
FAQAT JSON: {"category":"Hujjat tahlili","icon":"📄","simpleAnswer":"xulosa","steps":["qadam"],"legalBasis":"qonun","warning":"muammolar yoki null","confidence":"high|medium|low"}""",
    },
    'ru': {
        'contract': """Ты юридический эксперт. Проанализируй договор:
1. Стороны и обязательства 2. Основные условия и сроки 3. Рискованные пункты 4. Соответствие закону 5. Рекомендации
Только JSON: {"category":"Анализ договора","icon":"📄","simpleAnswer":"вывод","steps":["шаг"],"legalBasis":"закон","warning":"риски или null","confidence":"high|medium|low"}""",
        'application': """Ты юридический эксперт. Проанализируй заявление:
1. Цель и основания 2. Правильность оформления 3. Недостатки 4. Дальнейшие шаги
Только JSON: {"category":"Анализ заявления","icon":"📝","simpleAnswer":"вывод","steps":["шаг"],"legalBasis":"закон","warning":"недостатки или null","confidence":"high|medium|low"}""",
        'decision': """Ты юридический эксперт. Проанализируй решение:
1. Орган и полномочия 2. Правовые основания 3. Порядок исполнения
Только JSON: {"category":"Анализ решения","icon":"📋","simpleAnswer":"вывод","steps":["шаг"],"legalBasis":"закон","warning":"проблемы или null","confidence":"high|medium|low"}""",
        'document': """Ты юридический эксперт. Проанализируй документ:
1. Тип и назначение 2. Основное содержание 3. Юридическое значение 4. На что обратить внимание
Только JSON: {"category":"Анализ документа","icon":"📄","simpleAnswer":"вывод","steps":["шаг"],"legalBasis":"закон","warning":"проблемы или null","confidence":"high|medium|low"}""",
    }
}

def detect_lang(text):
    return 'ru' if len(re.findall(r'[а-яё]', text.lower())) > len(re.findall(r'[a-z]', text.lower())) else 'uz'

def detect_doc_type(text, lang):
    tl = text.lower()
    if lang == 'uz':
        if any(w in tl for w in ['shartnoma', 'kelishuv', 'tomonlar', 'majburiyat']): return 'shartnoma'
        if any(w in tl for w in ['ariza', 'iltimos', 'murojaat']): return 'ariza'
        if any(w in tl for w in ['qaror', 'buyruq', 'farmoyish']): return 'qaror'
        return 'hujjat'
    else:
        if any(w in tl for w in ['договор', 'соглашение', 'стороны', 'обязательств']): return 'contract'
        if any(w in tl for w in ['заявление', 'прошу', 'обращение']): return 'application'
        if any(w in tl for w in ['решение', 'приказ', 'постановление']): return 'decision'
        return 'document'

def parse_ai(raw):
    clean = re.sub(r'```json\s*', '', raw)
    clean = re.sub(r'```\s*', '', clean).strip()
    # H-7: non-greedy regex
    m = re.search(r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)?\}', clean, re.DOTALL)
    if m:
        try:
            return json.loads(m.group())
        except (json.JSONDecodeError, ValueError):
            pass
    try:
        return json.loads(clean)
    except (json.JSONDecodeError, ValueError):
        return {
            "category": "Yuridik masala", "icon": "⚖️",
            "simpleAnswer": raw[:500], "steps": [],
            "legalBasis": "", "warning": None, "confidence": "low"
        }

def ask_ai(question, laws, lang='uz', history=None, system_override=None):
    if not client:
        raise ValueError("GROQ_API_KEY sozlanmagan")

    actual = detect_lang(question)
    if actual != lang:
        lang = actual

    system = system_override or (SYS_RU if lang == 'ru' else SYS_UZ)

    laws_text = ""
    if laws:
        laws_text = "\n\nRASMIY BAZADAN:\n" if lang == 'uz' else "\n\nИЗ БАЗЫ:\n"
        for i, law in enumerate(laws[:3], 1):
            laws_text += f"\n--- {i}. {law['title']} ---\n"
            if law.get("number"):
                laws_text += f"No: {law['number']}\n"
            if law.get("text"):
                laws_text += f"{law['text'][:2000]}\n"

    msgs = [{"role": "system", "content": system}]

    # H-4: history validatsiyasi
    if history and isinstance(history, list):
        for h in history[-8:]:
            if not isinstance(h, dict):
                continue
            r = h.get('role', '')
            c = str(h.get('content', ''))[:400]
            if r == 'user' and c:
                msgs.append({"role": "user", "content": c})
            elif r == 'assistant' and c:
                msgs.append({"role": "assistant", "content": c[:200]})

    prompt = f"SAVOL: {question}{laws_text}\nFAQAT JSON." if lang == 'uz' else f"VOPROS: {question}{laws_text}\nTolko JSON."
    msgs.append({"role": "user", "content": prompt})

    # M-1: timeout qo'shildi
    comp = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=msgs,
        max_tokens=1200,
        temperature=0.3,
        timeout=30
    )
    return parse_ai(comp.choices[0].message.content.strip())

# ── Off-topic filter ──────────────────────────────────────────────────────────
def is_legal_question(question, lang):
    if not client:
        return True
    try:
        if lang == 'ru':
            prompt = f'Этот вопрос о праве, законах, налогах, работе, недвижимости, семье, суде Узбекистана? Вопрос: "{question[:200]}"\nОтветь ТОЛЬКО: YES или NO'
        else:
            prompt = f'Bu savol O\'zbekiston huquqi, qonunlari, soliqlari, mehnat, mulk, oila, sud masalalariga tegishlimi? Savol: "{question[:200]}"\nFAQAT: YES yoki NO'

        comp = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=5,
            temperature=0,
            timeout=10  # M-1: qisqa timeout
        )
        ans = comp.choices[0].message.content.strip().upper()
        logger.info(f"Legal check: {ans}")
        return "YES" in ans
    except Exception as e:
        logger.warning(f"Legal check xato: {e}")
        return True

# ── File extraction ───────────────────────────────────────────────────────────
def extract_text(filepath, filename):
    ext = filename.rsplit('.', 1)[-1].lower()
    text = ""
    try:
        if ext == 'pdf':
            import fitz
            doc = fitz.open(filepath)
            for page in doc:
                text += page.get_text()
            doc.close()
        elif ext in ('docx', 'doc'):
            from docx import Document
            doc = Document(filepath)
            text = '\n'.join(p.text for p in doc.paragraphs if p.text.strip())
    except Exception as e:
        logger.error(f"extract_text failed: {e}")
    return text.strip()

# C-3: chunk_text — butun hujjatni oladi, kesmayli
def chunk_text(text, size=2500):
    words = text.split()
    return [' '.join(words[i:i+size]) for i in range(0, len(words), size)]

# ── Routes ────────────────────────────────────────────────────────────────────

# C-1: Path traversal himoyasi
@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/<path:filename>")
def static_files(filename):
    # C-1: faqat ruxsat etilgan fayllar — source code yuklab olinmasin
    if filename not in ALLOWED_STATIC:
        return jsonify({"error": "Not Found"}), 404
    return send_from_directory(".", filename)

@app.route("/api/ask", methods=["POST"])
def ask():
    data = request.get_json()
    if not data or not data.get("question"):
        return jsonify({"error": "Savol yo'q"}), 400

    q = data["question"].strip()
    lang = data.get("lang", "uz")
    lang = lang if lang in ('uz', 'ru') else 'uz'  # M-6: validatsiya

    # H-4: history validatsiyasi
    history = data.get("history", [])
    if not isinstance(history, list):
        history = []

    is_doc = bool(data.get("is_doc", False))

    # H-5: savol uzunligi cheki
    if len(q) < 2 or len(q) > MAX_Q_LEN:
        return jsonify({"error": "Savol juda qisqa yoki uzun"}), 400

    logger.info(f"Savol [{lang}]: {q[:80]}")

    # Off-topic tekshiruv
    if not is_doc and not is_legal_question(q, lang):
        logger.info("Off-topic savol")
        if lang == 'ru':
            resp = {
                "category": "Не юридический вопрос", "icon": "⚖️",
                "simpleAnswer": "Я специализируюсь на юридических вопросах по законодательству Узбекистана.\n\nПримеры вопросов:\n• Сколько дней длится трудовой отпуск?\n• Что нужно для открытия ИП?\n• Как расторгнуть договор аренды?",
                "steps": ["Задайте юридический вопрос", "ИИ найдёт нужный закон", "Ответит со ссылками на lex.uz"],
                "legalBasis": "", "warning": None, "confidence": "high"
            }
        else:
            resp = {
                "category": "Yuridik bo'lmagan savol", "icon": "⚖️",
                "simpleAnswer": "Men faqat O'zbekiston qonunchiligi bo'yicha yuridik savollarga javob bera olaman.\n\nMisol savollar:\n• Mehnat ta'tili necha kun?\n• YaTT ochish uchun nima kerak?\n• Shartnomani qanday bekor qilaman?",
                "steps": ["Yuridik savolingizni yozing", "AI lex.uz dan qonun topadi", "Rasmiy manbalar bilan javob beradi"],
                "legalBasis": "", "warning": None, "confidence": "high"
            }
        return jsonify({"found": False, "answer": resp, "sources": []})

    if not is_doc:
        record_question(q, lang)

    laws = [] if is_doc else search_laws(q)
    logger.info(f"Topildi: {len(laws)} ta qonun")

    try:
        answer = ask_ai(q, laws, lang, history)
    except Exception as e:
        logger.error(f"AI xato: {e}")
        # M-5: ichki xato tashqariga chiqmasin
        return jsonify({"error": "AI xizmati vaqtincha ishlamayapti"}), 503

    raw_sources = [{"title": l["title"][:70], "url": l["url"], "date": l.get("date", "")} for l in laws[:3]]
    sources = filter_sources(raw_sources, answer, q)
    return jsonify({"found": True, "answer": answer, "sources": sources})

@app.route("/api/search", methods=["GET"])
def search_route():
    q = request.args.get("q", "").strip()
    # H-5: qidiruv uzunligi cheki
    if len(q) < 2 or len(q) > 500:
        return jsonify({"results": []})
    laws = search_laws(q, limit=8)
    return jsonify({"results": [
        {"title": l["title"], "number": l.get("number"), "date": l.get("date"), "url": l["url"]}
        for l in laws
    ]})

@app.route("/api/upload", methods=["POST"])
def upload():
    if 'file' not in request.files:
        return jsonify({"error": "Fayl topilmadi"}), 400
    file = request.files['file']
    lang = request.form.get('lang', 'uz')
    lang = lang if lang in ('uz', 'ru') else 'uz'

    if not file.filename:
        return jsonify({"error": "Fayl nomi yo'q"}), 400

    ext = file.filename.rsplit('.', 1)[-1].lower()
    if ext not in ('pdf', 'docx', 'doc'):
        return jsonify({"error": "Faqat PDF, DOCX, DOC"}), 400

    filepath = os.path.join(UPLOAD_FOLDER, f"{uuid.uuid4()}.{ext}")
    file.save(filepath)

    # C-4: finally bloki bilan fayl har doim o'chiriladi
    try:
        text = extract_text(filepath, file.filename)
        if not text.strip():
            return jsonify({"error": "Fayldan matn o'qib bo'lmadi"}), 400

        logger.info(f"Doc: {len(text)} chars")
        doc_type = detect_doc_type(text, lang)
        logger.info(f"Doc type: {doc_type}")

        lang_key = lang if lang in DOC_SYSTEMS else 'uz'
        default_type = 'hujjat' if lang == 'uz' else 'document'
        type_key = doc_type if doc_type in DOC_SYSTEMS[lang_key] else default_type
        system = DOC_SYSTEMS[lang_key][type_key]

        # C-3: butun hujjat tahlil qilinadi
        chunks = chunk_text(text, 2500)
        first = f"Hujjat matni:\n\n{chunks[0]}" if lang == 'uz' else f"Tekst dokumenta:\n\n{chunks[0]}"
        answer = ask_ai(first, [], lang, system_override=system)

        follow_ups = []
        for i, chunk in enumerate(chunks[1:], 2):
            fq = f"Hujjatning {i}-qismi:\n\n{chunk}" if lang == 'uz' else f"Chast {i}:\n\n{chunk}"
            follow_ups.append(fq)

        # M-7: follow_up_system clientga yuborilmaydi
        return jsonify({
            "found": True, "answer": answer, "sources": [],
            "question": f"[{doc_type.upper()}] {file.filename}",
            "doc_parts": len(chunks), "doc_type": doc_type,
            "follow_up_questions": follow_ups
            # follow_up_system olib tashlandi
        })
    except Exception as e:
        logger.error(f"Upload xato: {e}")
        return jsonify({"error": "Hujjat tahlilida xatolik yuz berdi"}), 500  # M-5
    finally:
        # C-4: har doim faylni o'chirish
        if os.path.exists(filepath):
            os.remove(filepath)

@app.route("/api/feedback", methods=["POST"])
def feedback():
    data = request.get_json()
    if not data:
        return jsonify({"ok": False}), 400
    fb = load_json(FEEDBACK_FILE, [])
    entry = {
        "msgId": str(data.get("msgId", ""))[:50],
        "val": data.get("val") if data.get("val") in ('up', 'down') else None,
        "lang": data.get("lang") if data.get("lang") in ('uz', 'ru') else 'uz',
        "ts": datetime.now().isoformat()
    }
    fb = (fb + [entry])[-1000:]
    save_json(FEEDBACK_FILE, fb)
    return jsonify({"ok": True})

@app.route("/api/stats", methods=["GET"])
def stats():
    lang = request.args.get("lang", "uz")
    lang = lang if lang in ('uz', 'ru') else 'uz'
    total = 0
    try:
        conn = get_db()
        total = conn.execute(
            "SELECT COUNT(*) FROM acts WHERE lang_id=? AND status='Y'", (LANG_ID,)
        ).fetchone()[0]
    except Exception as e:
        logger.error(f"Stats DB xato: {e}")
    return jsonify({
        "total_laws": total,
        "lang": "O'zbek (lotin)",
        "source": "lex.uz",
        "top_questions": get_top_questions(12, lang)
    })

# S-1: health check — DB va AI holatini ko'rsatadi
@app.route("/api/health", methods=["GET"])
def health():
    db_status = "unavailable"
    try:
        conn = get_db()
        conn.execute("SELECT 1")
        db_status = "ok"
    except Exception as e:
        logger.error(f"Health check DB failed: {e}")

    ai_status = "ok" if client else "unavailable"
    overall = "ok" if db_status == "ok" and ai_status == "ok" else "degraded"
    code = 200 if db_status == "ok" else 503
    return jsonify({
        "status": overall,
        "db": db_status,
        "ai": ai_status,
        "model": "Groq Llama 3.3 70B"
    }), code

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    logger.info(f"HuquqBot starting on port {port}")
    app.run(host="0.0.0.0", port=port, debug=False)