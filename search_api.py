"""
search_api.py — HuquqBot v2.7
DeepSeek AI + Yaxshilangan qidiruv relevantligi
"""
import os, re, json, uuid, logging, sqlite3, threading
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from openai import OpenAI
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
DEEPSEEK_KEY   = os.getenv("DEEPSEEK_API_KEY")
DATA_DIR       = os.getenv("DATA_DIR", "/app/data")
GDRIVE_FILE_ID = os.getenv("GDRIVE_FILE_ID", "1RpAWH8GxImR2L8DVX9sL_Z_dM5qbLYPX")
WEBAPP_URL     = os.getenv("WEBAPP_URL", "")
LANG_ID        = int(os.getenv("LANG_ID", 4))
MAX_RESULTS    = int(os.getenv("MAX_RESULTS", 6))
MAX_TEXT_LEN   = int(os.getenv("MAX_TEXT_LEN", 3000))
MAX_Q_LEN      = 5000
MAX_FILE_MB    = 50
UPLOAD_FOLDER  = os.getenv("UPLOAD_FOLDER", "/tmp/uploads")

# Scoring weights
SCORE_TITLE_EXACT   = 500  # Title da to'liq so'z mos kelsa
SCORE_TITLE_FULL    = 200  # Title da ibora mos kelsa
SCORE_TITLE_KEYWORD = 40   # Title da kalit so'z mos kelsa
SCORE_BODY_KEYWORD  = 8    # Matinda kalit so'z mos kelsa

# C-1: Static file allowlist
ALLOWED_STATIC = {'index.html', 'img/logo.png', 'favicon.ico'}

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)
FEEDBACK_FILE = os.path.join(DATA_DIR, "feedback.json")
STATS_FILE    = os.path.join(DATA_DIR, "stats.json")
_stats_lock   = threading.Lock()

if not DEEPSEEK_KEY:
    logger.warning("DEEPSEEK_API_KEY not set — AI features unavailable")

app.config['MAX_CONTENT_LENGTH'] = MAX_FILE_MB * 1024 * 1024

allowed_origins = [o for o in [WEBAPP_URL, "https://web.telegram.org"] if o]
CORS(app, origins=allowed_origins if allowed_origins else "*")

# ── DB download ───────────────────────────────────────────────────────────────
def download_db():
    try:
        if not os.path.exists(DB_PATH) or os.path.getsize(DB_PATH) < 1_000_000:
            os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
            logger.info("ldb.db downloading...")
            gdown.download(f"https://drive.google.com/uc?id={GDRIVE_FILE_ID}", DB_PATH, quiet=False)
            logger.info(f"ldb.db ready: {os.path.getsize(DB_PATH)//1024//1024}MB")
        else:
            logger.info(f"ldb.db exists: {os.path.getsize(DB_PATH)//1024//1024}MB")
    except Exception as e:
        logger.error(f"DB download failed: {e}")

download_db()
client = OpenAI(api_key=DEEPSEEK_KEY, base_url="https://api.deepseek.com") if DEEPSEEK_KEY else None

# ── Thread-safe DB ────────────────────────────────────────────────────────────
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
    except (json.JSONDecodeError, IOError, OSError) as e:
        logger.warning(f"load_json {p}: {e}")
    return d

def save_json(p, data):
    try:
        tmp = p + ".tmp"
        with open(tmp, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        os.replace(tmp, p)
    except (IOError, OSError) as e:
        logger.error(f"save_json {p}: {e}")

def record_question(q, lang='uz'):
    lang = lang if lang in ('uz', 'ru') else 'uz'
    with _stats_lock:
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

def escape_like(s):
    return s.replace('\\', '\\\\').replace('%', '\\%').replace('_', '\\_')

def detect_lang(text):
    return 'ru' if len(re.findall(r'[а-яё]', text.lower())) > len(re.findall(r'[a-z]', text.lower())) else 'uz'

# ── RU→UZ translation ────────────────────────────────────────────────────────
RU_TO_UZ = {
    'труд': 'mehnat', 'трудов': 'mehnat', 'работа': 'ish', 'работник': 'xodim',
    'зарплат': 'ish haqi', 'отпуск': 'tatil', 'увольнен': 'boshatish',
    'налог': 'soliq', 'ндс': 'qqs', 'доход': 'daromad', 'прибыл': 'foyda',
    'имуществ': 'mulk', 'недвижим': 'ko\'chmas mulk', 'земл': 'yer', 'квартир': 'uy-joy',
    'ипотек': 'ipoteka', 'аренд': 'ijara', 'купл': 'sotib olish', 'продаж': 'sotish',
    'брак': 'nikoh', 'развод': 'ajrashish', 'алимент': 'nafaqa', 'наследств': 'meros',
    'семь': 'oila', 'ребен': 'bola', 'опек': 'vasiylik',
    'пенси': 'pensiya', 'инвалид': 'nogironlik', 'страхован': 'sugurta',
    'транспорт': 'transport', 'автомобил': 'avtomobil', 'водител': 'haydovchi',
    'лицензи': 'litsenziya', 'регистрац': 'royxatdan', 'предприним': 'tadbirkorlik',
    'договор': 'shartnoma', 'соглашен': 'kelishuv', 'контракт': 'shartnoma',
    'суд': 'sud', 'штраф': 'jarima', 'кредит': 'kredit', 'банк': 'bank',
    'граждан': 'fuqaro', 'паспорт': 'pasport',
    'жилищ': 'uy-joy', 'медицин': 'tibbiy', 'образован': 'talim',
    'таможн': 'bojxona', 'патент': 'patent', 'уголовн': 'jinoyat',
    'арест': 'hibsga olish', 'прокурор': 'prokuror', 'нотариус': 'notarius',
    'строительств': 'qurilish', 'разрешен': 'ruxsat',
    'акционер': 'aksiyador', 'банкрот': 'bankrot',
}

# ── Improved Search ───────────────────────────────────────────────────────────
def search_laws(query, limit=MAX_RESULTS):
    stop_uz = {'uchun','nima','qanday','necha','kerak','olsam','qilsa','men','sen',
               'biz','siz','bu','shu','va','yoki','ham','da','ga','dan','ni','ning',
               'mumkin','boladi','agar','lekin','chunki','qilaman','beradi'}
    stop_ru = {'для','что','как','сколько','если','нужно','можно','нельзя','надо',
               'я','ты','он','мы','вы','они','это','или','и','но','в','на',
               'с','по','за','при','от','до','из','к','ли','мне','вам','нам'}

    raw = re.split(r'\s+', query.strip().lower())
    is_ru = detect_lang(query) == 'ru'
    stop = stop_ru if is_ru else stop_uz

    # Stop words filtri — qisqa so'zlar ham o'tkazilsin (2+ harf)
    kw = [w for w in raw if len(w) >= 2 and w not in stop]
    if not kw:
        kw = [w for w in raw if len(w) >= 2]
    if not kw:
        return []

    # Rus so'zlarni o'zbek ekvivalentlariga tarjima
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
        logger.info(f"RU->UZ: {list(zip(kw[:5], search_kw[:5]))}")
    else:
        search_kw = kw

    logger.info(f"Search KW: {search_kw}")

    try:
        conn = get_db()
    except Exception as e:
        logger.warning(f"DB connection failed: {e}")
        return []

    results = {}

    def add(row, score, doc_type='qonun'):
        lid = row["lact_id"]
        if lid not in results:
            results[lid] = {
                "lact_id": lid,
                "title": row["title"] or "",
                "date": row["acceptance_date"] or "",
                "number": row["lact_number"] or "",
                "text": clean_html(row["text"] or "")[:MAX_TEXT_LEN],
                "url": f"https://lex.uz/uz/docs/{lid}",
                "type": doc_type,
                "score": score
            }
        else:
            results[lid]["score"] += score

    def doc_type_from_title(title):
        t = (title or '').lower()
        if any(w in t for w in ['qonun', 'закон']): return 'Qonun'
        if any(w in t for w in ['kodeks', 'кодекс']): return 'Kodeks'
        if any(w in t for w in ['farmon', 'указ']): return "Farmon"
        if any(w in t for w in ['qaror', 'постановление']): return 'Qaror'
        if any(w in t for w in ['buyruq', 'приказ']): return 'Buyruq'
        return 'Hujjat'

    # 1. Title da to'liq so'z exact match (eng yuqori ball)
    for w in search_kw[:3]:
        try:
            ew = escape_like(w)
            # Word boundary emulyatsiyasi: bo'sh joy yoki boshida/oxirida
            rows = conn.execute("""
                SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
                FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
                WHERE a.lang_id=? AND a.status='Y'
                AND (LOWER(a.title) LIKE ? OR LOWER(a.title) LIKE ? OR LOWER(a.title) LIKE ?)
                ESCAPE '\\'
                ORDER BY a.acceptance_date DESC LIMIT ?
            """, (LANG_ID,
                  f"{ew} %", f"% {ew} %", f"% {ew}",
                  limit * 2)).fetchall()
            for r in rows:
                add(r, SCORE_TITLE_EXACT * len(w), doc_type_from_title(r["title"]))
        except Exception as e:
            logger.error(f"Search exact ({w}): {e}")

    # 2. Title da ibora (LIKE %...%)
    try:
        full = escape_like(' '.join(search_kw[:3]))
        rows = conn.execute("""
            SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
            FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
            WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ? ESCAPE '\\'
            ORDER BY a.acceptance_date DESC LIMIT ?
        """, (LANG_ID, f"%{full}%", limit * 2)).fetchall()
        for r in rows:
            add(r, SCORE_TITLE_FULL, doc_type_from_title(r["title"]))
    except Exception as e:
        logger.error(f"Search phrase: {e}")

    # 3. Title da alohida kalit so'zlar
    for w in search_kw:
        try:
            ew = escape_like(w)
            rows = conn.execute("""
                SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
                FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
                WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ? ESCAPE '\\'
                ORDER BY a.acceptance_date DESC LIMIT ?
            """, (LANG_ID, f"%{ew}%", limit * 3)).fetchall()
            for r in rows:
                add(r, SCORE_TITLE_KEYWORD * max(len(w), 1), doc_type_from_title(r["title"]))
        except Exception as e:
            logger.error(f"Search title kw ({w}): {e}")

    # 4. Matnda qidiruv (faqat yetarli natija bo'lmasa)
    if len(results) < limit:
        for w in search_kw[:2]:
            try:
                ew = escape_like(w)
                rows = conn.execute("""
                    SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
                    FROM acts a INNER JOIN act_contents c ON a.lact_id=c.lact_id
                    WHERE a.lang_id=? AND a.status='Y' AND LOWER(c.text) LIKE ? ESCAPE '\\'
                    ORDER BY a.acceptance_date DESC LIMIT ?
                """, (LANG_ID, f"%{ew}%", limit * 2)).fetchall()
                for r in rows:
                    add(r, SCORE_BODY_KEYWORD * max(len(w), 1), doc_type_from_title(r["title"]))
            except Exception as e:
                logger.error(f"Search body ({w}): {e}")

    # Relevantlik bo'yicha tartiblash
    top = sorted(results.values(), key=lambda x: x["score"], reverse=True)[:limit]
    logger.info(f"Results: {[(r['title'][:25], r['score']) for r in top[:3]]}")
    return top

# ── Source relevance filter ───────────────────────────────────────────────────
def filter_sources(sources, answer, query):
    if not sources or not answer:
        return sources
    a_text = f"{answer.get('category','')} {answer.get('legalBasis','')} {answer.get('simpleAnswer','')}".lower()
    q_words = {w for w in re.split(r'\s+', query.lower()) if len(w) > 2}
    a_words = {w for w in re.split(r'\s+', a_text) if len(w) > 3}
    all_words = q_words | a_words
    filtered = []
    for s in sources:
        title_words = set(re.split(r'\s+', s.get('title', '').lower()))
        if len(all_words & title_words) >= 1:
            filtered.append(s)
    return filtered if filtered else sources[:1]

# ── AI prompts ────────────────────────────────────────────────────────────────
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
        'shartnoma': 'Sen yuridik ekspertsan. Shartnomani tahlil qil: tomonlar, shartlar, xavfli bandlar, qonunchilikka muvofiqligi, tavsiyalar. FAQAT JSON: {"category":"Shartnoma tahlili","icon":"📄","simpleAnswer":"xulosa","steps":["qadam"],"legalBasis":"qonun","warning":"xavfli bandlar yoki null","confidence":"high|medium|low"}',
        'ariza': 'Sen yuridik ekspertsan. Arizani tahlil qil: maqsad, to\'g\'rilik, kamchiliklar, keyingi qadamlar. FAQAT JSON: {"category":"Ariza tahlili","icon":"📝","simpleAnswer":"xulosa","steps":["qadam"],"legalBasis":"qonun","warning":"kamchiliklar yoki null","confidence":"high|medium|low"}',
        'qaror': 'Sen yuridik ekspertsan. Qarorni tahlil qil: organ, huquqiy asoslar, amalga oshirish. FAQAT JSON: {"category":"Qaror tahlili","icon":"📋","simpleAnswer":"xulosa","steps":["qadam"],"legalBasis":"qonun","warning":"muammolar yoki null","confidence":"high|medium|low"}',
        'hujjat': 'Sen yuridik ekspertsan. Hujjatni tahlil qil: turi, mazmuni, ahamiyati, e\'tibor kerak joylar. FAQAT JSON: {"category":"Hujjat tahlili","icon":"📄","simpleAnswer":"xulosa","steps":["qadam"],"legalBasis":"qonun","warning":"muammolar yoki null","confidence":"high|medium|low"}',
    },
    'ru': {
        'contract': 'Ты юридический эксперт. Проанализируй договор: стороны, условия, риски, законность, рекомендации. Только JSON: {"category":"Анализ договора","icon":"📄","simpleAnswer":"вывод","steps":["шаг"],"legalBasis":"закон","warning":"риски или null","confidence":"high|medium|low"}',
        'application': 'Ты юридический эксперт. Проанализируй заявление: цель, правильность, недостатки, шаги. Только JSON: {"category":"Анализ заявления","icon":"📝","simpleAnswer":"вывод","steps":["шаг"],"legalBasis":"закон","warning":"недостатки или null","confidence":"high|medium|low"}',
        'decision': 'Ты юридический эксперт. Проанализируй решение: орган, основания, исполнение. Только JSON: {"category":"Анализ решения","icon":"📋","simpleAnswer":"вывод","steps":["шаг"],"legalBasis":"закон","warning":"проблемы или null","confidence":"high|medium|low"}',
        'document': 'Ты юридический эксперт. Проанализируй документ: тип, содержание, значение, внимание. Только JSON: {"category":"Анализ документа","icon":"📄","simpleAnswer":"вывод","steps":["шаг"],"legalBasis":"закон","warning":"проблемы или null","confidence":"high|medium|low"}',
    }
}

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
    m = re.search(r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)?\}', clean, re.DOTALL)
    if m:
        try:
            return json.loads(m.group())
        except (json.JSONDecodeError, ValueError):
            pass
    try:
        return json.loads(clean)
    except (json.JSONDecodeError, ValueError):
        return {"category":"Yuridik masala","icon":"⚖️","simpleAnswer":raw[:500],"steps":[],"legalBasis":"","warning":None,"confidence":"low"}

def ask_ai(question, laws, lang='uz', history=None, system_override=None):
    if not client:
        raise ValueError("DEEPSEEK_API_KEY sozlanmagan")
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
    comp = client.chat.completions.create(
        model="deepseek-chat",
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
            prompt = f'Вопрос о праве, законах, налогах, работе, недвижимости, семье, суде, бизнесе Узбекистана? "{question[:200]}"\nTolko: YES yoki NO'
        else:
            prompt = f'Bu savol O\'zbekiston huquqi, qonunlari, soliqlari, mehnat, mulk, oila, sud, biznes masalalariga tegishlimi? "{question[:200]}"\nFAQAT: YES yoki NO'
        comp = client.chat.completions.create(
            model="deepseek-chat",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=5, temperature=0, timeout=10
        )
        ans = comp.choices[0].message.content.strip().upper()
        logger.info(f"Legal check [{lang}]: {ans}")
        return "YES" in ans
    except Exception as e:
        logger.warning(f"Legal check error: {e}")
        return True

# ── File extraction ───────────────────────────────────────────────────────────
def extract_text(filepath, filename):
    ext = filename.rsplit('.', 1)[-1].lower()
    text = ""
    try:
        if ext == 'pdf':
            doc = fitz.open(filepath)
            for page in doc:
                text += page.get_text()
            doc.close()
        elif ext in ('docx', 'doc'):
            doc = Document(filepath)
            text = '\n'.join(p.text for p in doc.paragraphs if p.text.strip())
    except Exception as e:
        logger.error(f"extract_text: {e}")
    return text.strip()

def chunk_text(text, size=2500):
    words = text.split()
    return [' '.join(words[i:i+size]) for i in range(0, len(words), size)]

# ── Routes ────────────────────────────────────────────────────────────────────
@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/<path:filename>")
def static_files(filename):
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
    lang = lang if lang in ('uz', 'ru') else 'uz'
    history = data.get("history", [])
    if not isinstance(history, list):
        history = []
    is_doc = bool(data.get("is_doc", False))
    if len(q) < 2 or len(q) > MAX_Q_LEN:
        return jsonify({"error": "Savol juda qisqa yoki uzun"}), 400
    logger.info(f"Ask [{lang}]: {q[:80]}")

    if not is_doc and not is_legal_question(q, lang):
        logger.info("Off-topic")
        if lang == 'ru':
            resp = {"category":"Не юридический вопрос","icon":"⚖️",
                "simpleAnswer":"Я специализируюсь на юридических вопросах по законодательству Узбекистана.\n\nПримеры:\n• Сколько дней длится трудовой отпуск?\n• Что нужно для открытия ИП?\n• Как расторгнуть договор аренды?",
                "steps":["Задайте юридический вопрос","ИИ найдёт нужный закон","Ответит со ссылками на lex.uz"],
                "legalBasis":"","warning":None,"confidence":"high"}
        else:
            resp = {"category":"Yuridik bo'lmagan savol","icon":"⚖️",
                "simpleAnswer":"Men faqat O'zbekiston qonunchiligi bo'yicha yuridik savollarga javob bera olaman.\n\nMisol savollar:\n• Mehnat ta'tili necha kun?\n• YaTT ochish uchun nima kerak?\n• Shartnomani qanday bekor qilaman?",
                "steps":["Yuridik savolingizni yozing","AI lex.uz dan qonun topadi","Rasmiy manbalar bilan javob beradi"],
                "legalBasis":"","warning":None,"confidence":"high"}
        return jsonify({"found": False, "answer": resp, "sources": []})

    if not is_doc:
        record_question(q, lang)
    laws = [] if is_doc else search_laws(q)
    logger.info(f"Laws found: {len(laws)}")

    try:
        answer = ask_ai(q, laws, lang, history)
    except Exception as e:
        logger.error(f"AI error: {e}")
        return jsonify({"error": "AI xizmati vaqtincha ishlamayapti"}), 503

    raw_sources = [{"title": l["title"][:70], "url": l["url"], "date": l.get("date", ""), "type": l.get("type", "")} for l in laws[:3]]
    sources = filter_sources(raw_sources, answer, q)
    return jsonify({"found": True, "answer": answer, "sources": sources})

@app.route("/api/search", methods=["GET"])
def search_route():
    q = request.args.get("q", "").strip()
    if len(q) < 2 or len(q) > 500:
        return jsonify({"results": []})
    laws = search_laws(q, limit=8)
    return jsonify({"results": [
        {"title": l["title"], "number": l.get("number"), "date": l.get("date"), "url": l["url"], "type": l.get("type", "")}
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
    try:
        text = extract_text(filepath, file.filename)
        if not text.strip():
            return jsonify({"error": "Fayldan matn o'qib bo'lmadi"}), 400
        logger.info(f"Doc: {len(text)} chars")
        doc_type = detect_doc_type(text, lang)
        lang_key = lang if lang in DOC_SYSTEMS else 'uz'
        default_type = 'hujjat' if lang == 'uz' else 'document'
        type_key = doc_type if doc_type in DOC_SYSTEMS[lang_key] else default_type
        system = DOC_SYSTEMS[lang_key][type_key]
        chunks = chunk_text(text, 2500)
        first = f"Hujjat matni:\n\n{chunks[0]}" if lang == 'uz' else f"Tekst:\n\n{chunks[0]}"
        answer = ask_ai(first, [], lang, system_override=system)
        follow_ups = []
        for i, chunk in enumerate(chunks[1:], 2):
            fq = f"Hujjatning {i}-qismi:\n\n{chunk}" if lang == 'uz' else f"Chast {i}:\n\n{chunk}"
            follow_ups.append(fq)
        return jsonify({"found": True, "answer": answer, "sources": [],
            "question": f"[{doc_type.upper()}] {file.filename}",
            "doc_parts": len(chunks), "doc_type": doc_type,
            "follow_up_questions": follow_ups})
    except Exception as e:
        logger.error(f"Upload error: {e}")
        return jsonify({"error": "Hujjat tahlilida xatolik yuz berdi"}), 500
    finally:
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
        total = conn.execute("SELECT COUNT(*) FROM acts WHERE lang_id=? AND status='Y'", (LANG_ID,)).fetchone()[0]
    except Exception as e:
        logger.error(f"Stats error: {e}")
    return jsonify({"total_laws": total, "lang": "O'zbek (lotin)", "source": "lex.uz", "top_questions": get_top_questions(12, lang)})

@app.route("/api/health", methods=["GET"])
def health():
    db_status = "unavailable"
    try:
        conn = get_db()
        conn.execute("SELECT 1")
        db_status = "ok"
    except Exception as e:
        logger.error(f"Health DB: {e}")
    ai_status = "ok" if client else "unavailable"
    overall = "ok" if db_status == "ok" and ai_status == "ok" else "degraded"
    return jsonify({"status": overall, "db": db_status, "ai": ai_status, "model": "DeepSeek Chat"}), 200 if db_status == "ok" else 503

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    logger.info(f"HuquqBot v2.7 starting on port {port}")
    app.run(host="0.0.0.0", port=port, debug=False)