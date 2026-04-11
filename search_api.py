"""
search_api.py — HuquqBot Full Stack
Groq AI + ldb.db + PDF/Word upload + multilingual
"""

import os
import re
import json
import uuid
import logging
import sqlite3
import gdown
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder=".", static_url_path="")
CORS(app)

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)

# ── Config ────────────────────────────────────────────────────────────────────
DB_PATH        = os.getenv("DB_PATH", "/app/data/ldb.db")
GROQ_KEY       = os.getenv("GROQ_API_KEY", "")
LANG_ID        = 4
MAX_RESULTS    = 5
MAX_TEXT_LEN   = 3000
GDRIVE_FILE_ID = "1RpAWH8GxImR2L8DVX9sL_Z_dM5qbLYPX"
UPLOAD_FOLDER  = "/tmp/uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# ── DB yuklab olish ───────────────────────────────────────────────────────────
def download_db():
    try:
        if not os.path.exists(DB_PATH) or os.path.getsize(DB_PATH) < 1_000_000:
            os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
            logger.info("⬇️  ldb.db yuklanmoqda...")
            gdown.download(f"https://drive.google.com/uc?id={GDRIVE_FILE_ID}", DB_PATH, quiet=False)
            logger.info(f"✅ ldb.db yuklandi: {os.path.getsize(DB_PATH)//1024//1024}MB")
        else:
            logger.info(f"✅ ldb.db mavjud: {os.path.getsize(DB_PATH)//1024//1024}MB")
    except Exception as e:
        logger.error(f"❌ DB yuklanmadi: {e}")

download_db()

# ── Groq ──────────────────────────────────────────────────────────────────────
client = Groq(api_key=GROQ_KEY)

# ── DB ────────────────────────────────────────────────────────────────────────
def get_db():
    conn = sqlite3.connect(DB_PATH, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA cache_size=10000")
    conn.execute("PRAGMA temp_store=MEMORY")
    return conn

def clean_html(text):
    if not text: return ""
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
    text = re.sub(r'<[^>]+>', ' ', text)
    for e, r in [('&nbsp;',' '),('&amp;','&'),('&lt;','<'),('&gt;','>')]:
        text = text.replace(e, r)
    text = re.sub(r'\s{2,}', ' ', text)
    return text.strip()

def search_laws(query, limit=MAX_RESULTS):
    words = [w for w in re.split(r'\s+', query.strip().lower()) if len(w) > 2]
    if not words: return []
    try:
        conn = get_db()
    except Exception as e:
        logger.warning(f"DB ulanmadi: {e}")
        return []

    results = {}

    # 1. To'liq ibora
    try:
        rows = conn.execute("""
            SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
            FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
            WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ?
            ORDER BY a.id DESC LIMIT ?
        """, (LANG_ID, f"%{query.lower()}%", limit*2)).fetchall()
        for row in rows:
            lid = row["lact_id"]
            results[lid] = {
                "lact_id": lid, "title": row["title"] or "",
                "date": row["acceptance_date"] or "", "number": row["lact_number"] or "",
                "text": clean_html(row["text"] or "")[:MAX_TEXT_LEN],
                "url": f"https://lex.uz/uz/docs/{lid}", "score": 100
            }
    except Exception as e:
        logger.error(f"1-bosqich: {e}")

    # 2. Alohida so'zlar
    for word in words:
        try:
            rows = conn.execute("""
                SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
                FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
                WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ?
                ORDER BY a.id DESC LIMIT ?
            """, (LANG_ID, f"%{word}%", limit*3)).fetchall()
            for row in rows:
                lid = row["lact_id"]
                if lid not in results:
                    results[lid] = {
                        "lact_id": lid, "title": row["title"] or "",
                        "date": row["acceptance_date"] or "", "number": row["lact_number"] or "",
                        "text": clean_html(row["text"] or "")[:MAX_TEXT_LEN],
                        "url": f"https://lex.uz/uz/docs/{lid}", "score": 0
                    }
                results[lid]["score"] += 10 * len(word)
        except Exception as e:
            logger.error(f"2-bosqich: {e}")

    # 3. Matnda
    if len(results) < limit:
        for word in words[:3]:
            try:
                rows = conn.execute("""
                    SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
                    FROM acts a INNER JOIN act_contents c ON a.lact_id=c.lact_id
                    WHERE a.lang_id=? AND a.status='Y' AND LOWER(c.text) LIKE ?
                    ORDER BY a.id DESC LIMIT ?
                """, (LANG_ID, f"%{word}%", limit*2)).fetchall()
                for row in rows:
                    lid = row["lact_id"]
                    if lid not in results:
                        results[lid] = {
                            "lact_id": lid, "title": row["title"] or "",
                            "date": row["acceptance_date"] or "", "number": row["lact_number"] or "",
                            "text": clean_html(row["text"] or "")[:MAX_TEXT_LEN],
                            "url": f"https://lex.uz/uz/docs/{lid}", "score": 0
                        }
                    results[lid]["score"] += 3 * len(word)
            except Exception as e:
                logger.error(f"3-bosqich: {e}")

    conn.close()
    return sorted(results.values(), key=lambda x: x["score"], reverse=True)[:limit]

# ── AI ────────────────────────────────────────────────────────────────────────
SYSTEM_UZ = """Sen O'zbekiston Respublikasi qonunchiligini chuqur biladigan yuridik yordamchisan.
Foydalanuvchi savoliga O'zbekiston qonunlari asosida aniq, sodda va amaliy javob ber.

QOIDALAR:
1. O'zbekiston qonunchiligi bilimingdan foydalanib javob ber
2. Berilgan qonun matnlarini ham hisobga ol
3. Oddiy O'zbek tilida yoz
4. Aniq modda va qonun nomlarini ko'rsat
5. FAQAT JSON formatida javob ber

JSON:
{
  "category": "Kategoriya",
  "icon": "emoji",
  "simpleAnswer": "2-4 gap, aniq",
  "steps": ["Qadam 1", "Qadam 2"],
  "legalBasis": "Qonun nomi va modda",
  "warning": "Ogohlantirish yoki null",
  "confidence": "high|medium|low"
}"""

SYSTEM_RU = """Ты юридический помощник, хорошо знающий законодательство Республики Узбекистан.
Отвечай на вопросы пользователя точно, просто и практично на основе законов Узбекистана.

ПРАВИЛА:
1. Используй свои знания законодательства Узбекистана
2. Учитывай предоставленные тексты законов
3. Пиши на русском языке
4. Указывай конкретные статьи и названия законов
5. Отвечай ТОЛЬКО в формате JSON

JSON:
{
  "category": "Категория",
  "icon": "emoji",
  "simpleAnswer": "2-4 предложения, точно",
  "steps": ["Шаг 1", "Шаг 2"],
  "legalBasis": "Название закона и статья",
  "warning": "Предупреждение или null",
  "confidence": "high|medium|low"
}"""

def detect_lang(text):
    """Detect language from text"""
    cyrillic = len(re.findall(r'[а-яёА-ЯЁ]', text))
    latin = len(re.findall(r'[a-zA-Z]', text))
    return 'ru' if cyrillic > latin else 'uz'

def ask_ai(question, laws, lang='uz', history=None):
    system = SYSTEM_RU if lang == 'ru' else SYSTEM_UZ
    detected = detect_lang(question)
    if detected != lang:
        lang = detected

    laws_text = ""
    if laws:
        laws_text = "\n\nRASMIY BAZADAN QONUNLAR:\n" if lang == 'uz' else "\n\nЗАКОНЫ ИЗ БАЗЫ ДАННЫХ:\n"
        for i, law in enumerate(laws[:3], 1):
            laws_text += f"\n--- {i}. {law['title']} ---\n"
            if law.get("number"):
                laws_text += f"Raqami/Номер: {law['number']}\n"
            if law.get("text"):
                laws_text += f"{law['text'][:2000]}\n"

    messages = [{"role": "system", "content": system}]

    if history:
        for h in history[-4:]:
            if h.get('role') == 'user':
                messages.append({"role": "user", "content": h['content']})
            elif h.get('role') == 'assistant' and h.get('content'):
                ans = h['content']
                short = ans.get('simpleAnswer', '') if isinstance(ans, dict) else str(ans)[:200]
                messages.append({"role": "assistant", "content": short})

    prompt = f"SAVOL/ВОПРОС: {question}{laws_text}\n\nFAQAT JSON qaytargin / Верни ТОЛЬКО JSON."
    messages.append({"role": "user", "content": prompt})

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=messages,
        max_tokens=1200,
        temperature=0.3
    )

    raw = completion.choices[0].message.content.strip()
    clean = re.sub(r'```json\s*', '', raw)
    clean = re.sub(r'```\s*', '', clean).strip()

    try:
        return json.loads(clean)
    except:
        return {
            "category": "Yuridik masala" if lang=='uz' else "Юридический вопрос",
            "icon": "⚖️",
            "simpleAnswer": raw[:600],
            "steps": [],
            "legalBasis": "",
            "warning": None,
            "confidence": "low"
        }

# ── File extraction ───────────────────────────────────────────────────────────
def extract_text_from_file(filepath, filename):
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
            text = '\n'.join([p.text for p in doc.paragraphs])
    except Exception as e:
        logger.error(f"Fayl o'qishda xato: {e}")
    return text[:8000]

# ── Routes ────────────────────────────────────────────────────────────────────
@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory(".", filename)

@app.route("/api/ask", methods=["POST"])
def ask():
    data = request.get_json()
    if not data or not data.get("question"):
        return jsonify({"error": "Savol kiritilmadi"}), 400

    question = data["question"].strip()
    lang = data.get("lang", "uz")
    history = data.get("history", [])

    if len(question) < 2:
        return jsonify({"error": "Savol juda qisqa"}), 400

    logger.info(f"Savol [{lang}]: {question[:80]}")
    laws = search_laws(question)
    logger.info(f"Topildi: {len(laws)} ta qonun")

    try:
        answer = ask_ai(question, laws, lang, history)
    except Exception as e:
        logger.error(f"AI xato: {e}")
        return jsonify({"error": str(e)}), 503

    sources = [
        {"title": l["title"][:70], "url": l["url"], "date": l.get("date", "")}
        for l in laws[:3]
    ]
    return jsonify({"found": True, "answer": answer, "sources": sources})

@app.route("/api/search", methods=["GET"])
def search():
    q = request.args.get("q", "").strip()
    if len(q) < 2:
        return jsonify({"results": []})

    laws = search_laws(q, limit=8)
    results = [
        {"title": l["title"], "number": l.get("number"), "date": l.get("date"), "url": l["url"]}
        for l in laws
    ]
    return jsonify({"results": results})

@app.route("/api/upload", methods=["POST"])
def upload():
    if 'file' not in request.files:
        return jsonify({"error": "Fayl topilmadi"}), 400

    file = request.files['file']
    lang = request.form.get('lang', 'uz')

    if not file.filename:
        return jsonify({"error": "Fayl nomi yo'q"}), 400

    ext = file.filename.rsplit('.', 1)[-1].lower()
    if ext not in ('pdf', 'docx', 'doc'):
        return jsonify({"error": "Faqat PDF, DOCX, DOC"}), 400

    filepath = os.path.join(UPLOAD_FOLDER, f"{uuid.uuid4()}.{ext}")
    file.save(filepath)

    try:
        text = extract_text_from_file(filepath, file.filename)
        os.remove(filepath)

        if not text.strip():
            return jsonify({"error": "Fayldan matn o'qib bo'lmadi"}), 400

        q = f"Quyidagi hujjatni tahlil qil va asosiy yuridik nuqtalarini tushuntir:\n\n{text[:4000]}" \
            if lang == 'uz' else \
            f"Проанализируй следующий документ и объясни основные юридические моменты:\n\n{text[:4000]}"

        answer = ask_ai(q, [], lang)
        return jsonify({"found": True, "answer": answer, "summary": q[:100] + "..."})

    except Exception as e:
        logger.error(f"Upload xato: {e}")
        if os.path.exists(filepath):
            os.remove(filepath)
        return jsonify({"error": str(e)}), 500

@app.route("/api/stats", methods=["GET"])
def stats():
    try:
        conn = get_db()
        total = conn.execute(
            "SELECT COUNT(*) FROM acts WHERE lang_id=? AND status='Y'", (LANG_ID,)
        ).fetchone()[0]
        conn.close()
        return jsonify({"total_laws": total, "lang": "O'zbek (lotin)", "source": "lex.uz"})
    except Exception as e:
        return jsonify({"total_laws": 0, "error": str(e)}), 200

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "ai": "Groq Llama 3.3 70B"})

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    logger.info(f"🚀 HuquqBot → http://localhost:{port}")
    app.run(host="0.0.0.0", port=port, debug=False)
