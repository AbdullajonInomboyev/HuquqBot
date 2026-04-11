# """
# search_api.py — HuquqBot Full Stack
# Groq AI + ldb.db + PDF/Word upload + multilingual
# """

# import os
# import re
# import json
# import uuid
# import logging
# import sqlite3
# import gdown
# from flask import Flask, request, jsonify, send_from_directory
# from flask_cors import CORS
# from groq import Groq
# from dotenv import load_dotenv

# load_dotenv()

# app = Flask(__name__, static_folder=".", static_url_path="")
# CORS(app)

# logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
# logger = logging.getLogger(__name__)

# # ── Config ────────────────────────────────────────────────────────────────────
# DB_PATH        = os.getenv("DB_PATH", "/app/data/ldb.db")
# GROQ_KEY       = os.getenv("GROQ_API_KEY", "")
# LANG_ID        = 4
# MAX_RESULTS    = 5
# MAX_TEXT_LEN   = 3000
# GDRIVE_FILE_ID = "1RpAWH8GxImR2L8DVX9sL_Z_dM5qbLYPX"
# UPLOAD_FOLDER  = "/tmp/uploads"

# os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# # ── DB yuklab olish ───────────────────────────────────────────────────────────
# def download_db():
#     try:
#         if not os.path.exists(DB_PATH) or os.path.getsize(DB_PATH) < 1_000_000:
#             os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
#             logger.info("⬇️  ldb.db yuklanmoqda...")
#             gdown.download(f"https://drive.google.com/uc?id={GDRIVE_FILE_ID}", DB_PATH, quiet=False)
#             logger.info(f"✅ ldb.db yuklandi: {os.path.getsize(DB_PATH)//1024//1024}MB")
#         else:
#             logger.info(f"✅ ldb.db mavjud: {os.path.getsize(DB_PATH)//1024//1024}MB")
#     except Exception as e:
#         logger.error(f"❌ DB yuklanmadi: {e}")

# download_db()

# # ── Groq ──────────────────────────────────────────────────────────────────────
# client = Groq(api_key=GROQ_KEY)

# # ── DB ────────────────────────────────────────────────────────────────────────
# def get_db():
#     conn = sqlite3.connect(DB_PATH, check_same_thread=False)
#     conn.row_factory = sqlite3.Row
#     conn.execute("PRAGMA journal_mode=WAL")
#     conn.execute("PRAGMA cache_size=10000")
#     conn.execute("PRAGMA temp_store=MEMORY")
#     return conn

# def clean_html(text):
#     if not text: return ""
#     text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
#     text = re.sub(r'<[^>]+>', ' ', text)
#     for e, r in [('&nbsp;',' '),('&amp;','&'),('&lt;','<'),('&gt;','>')]:
#         text = text.replace(e, r)
#     text = re.sub(r'\s{2,}', ' ', text)
#     return text.strip()

# def search_laws(query, limit=MAX_RESULTS):
#     """
#     Yaxshilangan qidiruv:
#     - Savol tilini aniqlaydi (uz/ru)
#     - Kalit so'zlarni chiqaradi (stop words olib tashlanadi)
#     - To'liq ibora > alohida so'zlar > matn
#     - Score: title > text
#     """
#     # Stop words (yuridik savol uchun muhim bo'lmagan so'zlar)
#     stop_uz = {'uchun','nima','qanday','necha','bo\'ladi','kerak','olsam','qilsa',
#                'men','sen','u','biz','siz','ular','bu','shu','va','yoki','ham',
#                'da','ga','dan','ni','ning','de','deb','qil','kabi','bor','yo\'q'}
#     stop_ru = {'для','что','как','сколько','если','нужно','можно','нельзя',
#                'я','ты','он','мы','вы','они','это','такой','или','и','но',
#                'в','на','с','по','за','при','от','до','из','к'}

#     raw_words = re.split(r'\s+', query.strip().lower())
#     is_ru = len(re.findall(r'[а-яё]', query)) > len(re.findall(r'[a-z]', query))
#     stop = stop_ru if is_ru else stop_uz

#     # Kalit so'zlar: uzun va stop bo'lmagan so'zlar
#     keywords = [w for w in raw_words if len(w) > 3 and w not in stop]
#     # Agar kalit so'z yo'q bo'lsa, uzunroq so'zlarni ol
#     if not keywords:
#         keywords = [w for w in raw_words if len(w) > 2]
#     if not keywords:
#         return []

#     logger.info(f"Kalit so'zlar: {keywords}")

#     try:
#         conn = get_db()
#     except Exception as e:
#         logger.warning(f"DB ulanmadi: {e}")
#         return []

#     results = {}

#     def add_result(row, score):
#         lid = row["lact_id"]
#         if lid not in results:
#             results[lid] = {
#                 "lact_id": lid, "title": row["title"] or "",
#                 "date": row["acceptance_date"] or "", "number": row["lact_number"] or "",
#                 "text": clean_html(row["text"] or "")[:MAX_TEXT_LEN],
#                 "url": f"https://lex.uz/uz/docs/{lid}", "score": score
#             }
#         else:
#             results[lid]["score"] += score

#     # 1. To'liq ibora sarlavhada (eng yuqori ball)
#     try:
#         full_q = ' '.join(keywords[:3])
#         rows = conn.execute("""
#             SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
#             FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
#             WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ?
#             ORDER BY a.id DESC LIMIT ?
#         """, (LANG_ID, f"%{full_q}%", limit*2)).fetchall()
#         for row in rows: add_result(row, 200)
#     except Exception as e:
#         logger.error(f"1-bosqich: {e}")

#     # 2. Har bir kalit so'z sarlavhada
#     for word in keywords:
#         try:
#             rows = conn.execute("""
#                 SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
#                 FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
#                 WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ?
#                 ORDER BY a.id DESC LIMIT ?
#             """, (LANG_ID, f"%{word}%", limit*3)).fetchall()
#             for row in rows: add_result(row, 50 * len(word))
#         except Exception as e:
#             logger.error(f"2-bosqich: {e}")

#     # 3. Matnda qidiruv (faqat yetarli natija bo'lmasa)
#     if len(results) < limit:
#         for word in keywords[:2]:
#             try:
#                 rows = conn.execute("""
#                     SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
#                     FROM acts a INNER JOIN act_contents c ON a.lact_id=c.lact_id
#                     WHERE a.lang_id=? AND a.status='Y' AND LOWER(c.text) LIKE ?
#                     ORDER BY a.id DESC LIMIT ?
#                 """, (LANG_ID, f"%{word}%", limit*2)).fetchall()
#                 for row in rows: add_result(row, 10 * len(word))
#             except Exception as e:
#                 logger.error(f"3-bosqich: {e}")

#     conn.close()
#     sorted_results = sorted(results.values(), key=lambda x: x["score"], reverse=True)
#     logger.info(f"Top natijalar: {[r['title'][:40] for r in sorted_results[:3]]}")
#     return sorted_results[:limit]

# # ── AI ────────────────────────────────────────────────────────────────────────
# SYSTEM_UZ = """Sen O'zbekiston Respublikasi qonunchiligini chuqur biladigan yuridik yordamchisan.
# Foydalanuvchi savoliga O'zbekiston qonunlari asosida aniq, sodda va amaliy javob ber.

# QOIDALAR:
# 1. O'zbekiston qonunchiligi bilimingdan foydalanib javob ber
# 2. Berilgan qonun matnlarini ham hisobga ol
# 3. Oddiy O'zbek tilida yoz
# 4. Aniq modda va qonun nomlarini ko'rsat
# 5. FAQAT JSON formatida javob ber

# JSON:
# {
#   "category": "Kategoriya",
#   "icon": "emoji",
#   "simpleAnswer": "2-4 gap, aniq",
#   "steps": ["Qadam 1", "Qadam 2"],
#   "legalBasis": "Qonun nomi va modda",
#   "warning": "Ogohlantirish yoki null",
#   "confidence": "high|medium|low"
# }"""

# SYSTEM_RU = """Ты юридический помощник, хорошо знающий законодательство Республики Узбекистан.
# Отвечай на вопросы пользователя точно, просто и практично на основе законов Узбекистана.

# ПРАВИЛА:
# 1. Используй свои знания законодательства Узбекистана
# 2. Учитывай предоставленные тексты законов
# 3. Пиши на русском языке
# 4. Указывай конкретные статьи и названия законов
# 5. Отвечай ТОЛЬКО в формате JSON

# JSON:
# {
#   "category": "Категория",
#   "icon": "emoji",
#   "simpleAnswer": "2-4 предложения, точно",
#   "steps": ["Шаг 1", "Шаг 2"],
#   "legalBasis": "Название закона и статья",
#   "warning": "Предупреждение или null",
#   "confidence": "high|medium|low"
# }"""

# def detect_lang(text):
#     """Detect language from text"""
#     cyrillic = len(re.findall(r'[а-яёА-ЯЁ]', text))
#     latin = len(re.findall(r'[a-zA-Z]', text))
#     return 'ru' if cyrillic > latin else 'uz'

# def ask_ai(question, laws, lang='uz', history=None):
#     system = SYSTEM_RU if lang == 'ru' else SYSTEM_UZ
#     detected = detect_lang(question)
#     if detected != lang:
#         lang = detected

#     laws_text = ""
#     if laws:
#         laws_text = "\n\nRASMIY BAZADAN QONUNLAR:\n" if lang == 'uz' else "\n\nЗАКОНЫ ИЗ БАЗЫ ДАННЫХ:\n"
#         for i, law in enumerate(laws[:3], 1):
#             laws_text += f"\n--- {i}. {law['title']} ---\n"
#             if law.get("number"):
#                 laws_text += f"Raqami/Номер: {law['number']}\n"
#             if law.get("text"):
#                 laws_text += f"{law['text'][:2000]}\n"

#     messages = [{"role": "system", "content": system}]

#     if history:
#         for h in history[-4:]:
#             if h.get('role') == 'user':
#                 messages.append({"role": "user", "content": h['content']})
#             elif h.get('role') == 'assistant' and h.get('content'):
#                 ans = h['content']
#                 short = ans.get('simpleAnswer', '') if isinstance(ans, dict) else str(ans)[:200]
#                 messages.append({"role": "assistant", "content": short})

#     prompt = f"SAVOL/ВОПРОС: {question}{laws_text}\n\nFAQAT JSON qaytargin / Верни ТОЛЬКО JSON."
#     messages.append({"role": "user", "content": prompt})

#     completion = client.chat.completions.create(
#         model="llama-3.3-70b-versatile",
#         messages=messages,
#         max_tokens=1200,
#         temperature=0.3
#     )

#     raw = completion.choices[0].message.content.strip()
#     clean = re.sub(r'```json\s*', '', raw)
#     clean = re.sub(r'```\s*', '', clean).strip()

#     try:
#         return json.loads(clean)
#     except:
#         return {
#             "category": "Yuridik masala" if lang=='uz' else "Юридический вопрос",
#             "icon": "⚖️",
#             "simpleAnswer": raw[:600],
#             "steps": [],
#             "legalBasis": "",
#             "warning": None,
#             "confidence": "low"
#         }

# # ── File extraction ───────────────────────────────────────────────────────────
# def extract_text_from_file(filepath, filename):
#     ext = filename.rsplit('.', 1)[-1].lower()
#     text = ""
#     try:
#         if ext == 'pdf':
#             import fitz
#             doc = fitz.open(filepath)
#             for page in doc:
#                 text += page.get_text()
#             doc.close()
#         elif ext in ('docx', 'doc'):
#             from docx import Document
#             doc = Document(filepath)
#             text = '\n'.join([p.text for p in doc.paragraphs])
#     except Exception as e:
#         logger.error(f"Fayl o'qishda xato: {e}")
#     return text[:8000]

# # ── Routes ────────────────────────────────────────────────────────────────────
# @app.route("/")
# def index():
#     return send_from_directory(".", "index.html")

# @app.route("/<path:filename>")
# def static_files(filename):
#     return send_from_directory(".", filename)

# @app.route("/api/ask", methods=["POST"])
# def ask():
#     data = request.get_json()
#     if not data or not data.get("question"):
#         return jsonify({"error": "Savol kiritilmadi"}), 400

#     question = data["question"].strip()
#     lang = data.get("lang", "uz")
#     history = data.get("history", [])

#     if len(question) < 2:
#         return jsonify({"error": "Savol juda qisqa"}), 400

#     logger.info(f"Savol [{lang}]: {question[:80]}")
#     laws = search_laws(question)
#     logger.info(f"Topildi: {len(laws)} ta qonun")

#     try:
#         answer = ask_ai(question, laws, lang, history)
#     except Exception as e:
#         logger.error(f"AI xato: {e}")
#         return jsonify({"error": str(e)}), 503

#     sources = [
#         {"title": l["title"][:70], "url": l["url"], "date": l.get("date", "")}
#         for l in laws[:3]
#     ]
#     return jsonify({"found": True, "answer": answer, "sources": sources})

# @app.route("/api/search", methods=["GET"])
# def search():
#     q = request.args.get("q", "").strip()
#     if len(q) < 2:
#         return jsonify({"results": []})

#     laws = search_laws(q, limit=8)
#     results = [
#         {"title": l["title"], "number": l.get("number"), "date": l.get("date"), "url": l["url"]}
#         for l in laws
#     ]
#     return jsonify({"results": results})

# @app.route("/api/upload", methods=["POST"])
# def upload():
#     if 'file' not in request.files:
#         return jsonify({"error": "Fayl topilmadi"}), 400

#     file = request.files['file']
#     lang = request.form.get('lang', 'uz')

#     if not file.filename:
#         return jsonify({"error": "Fayl nomi yo'q"}), 400

#     ext = file.filename.rsplit('.', 1)[-1].lower()
#     if ext not in ('pdf', 'docx', 'doc'):
#         return jsonify({"error": "Faqat PDF, DOCX, DOC"}), 400

#     filepath = os.path.join(UPLOAD_FOLDER, f"{uuid.uuid4()}.{ext}")
#     file.save(filepath)

#     try:
#         text = extract_text_from_file(filepath, file.filename)
#         os.remove(filepath)

#         if not text.strip():
#             return jsonify({"error": "Fayldan matn o'qib bo'lmadi"}), 400

#         q = f"Quyidagi hujjatni tahlil qil va asosiy yuridik nuqtalarini tushuntir:\n\n{text[:4000]}" \
#             if lang == 'uz' else \
#             f"Проанализируй следующий документ и объясни основные юридические моменты:\n\n{text[:4000]}"

#         answer = ask_ai(q, [], lang)
#         return jsonify({"found": True, "answer": answer, "summary": q[:100] + "..."})

#     except Exception as e:
#         logger.error(f"Upload xato: {e}")
#         if os.path.exists(filepath):
#             os.remove(filepath)
#         return jsonify({"error": str(e)}), 500

# @app.route("/api/stats", methods=["GET"])
# def stats():
#     try:
#         conn = get_db()
#         total = conn.execute(
#             "SELECT COUNT(*) FROM acts WHERE lang_id=? AND status='Y'", (LANG_ID,)
#         ).fetchone()[0]
#         conn.close()
#         return jsonify({"total_laws": total, "lang": "O'zbek (lotin)", "source": "lex.uz"})
#     except Exception as e:
#         return jsonify({"total_laws": 0, "error": str(e)}), 200

# @app.route("/api/health", methods=["GET"])
# def health():
#     return jsonify({"status": "ok", "ai": "Groq Llama 3.3 70B"})

# if __name__ == "__main__":
#     port = int(os.getenv("PORT", 5000))
#     logger.info(f"🚀 HuquqBot → http://localhost:{port}")
#     app.run(host="0.0.0.0", port=port, debug=False)

"""
search_api.py — HuquqBot v2.2
Groq AI + ldb.db + PDF/Word + Feedback + Stats
"""

import os, re, json, uuid, logging, sqlite3
from collections import Counter
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from groq import Groq
from dotenv import load_dotenv
import gdown

load_dotenv()

app = Flask(__name__, static_folder=".", static_url_path="")
CORS(app)
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)

# ── Config ────────────────────────────────────────────────────────────────────
DB_PATH        = os.getenv("DB_PATH", "/app/data/ldb.db")
GROQ_KEY       = os.getenv("GROQ_API_KEY", "")
DATA_DIR       = os.getenv("DATA_DIR", "/app/data")
GDRIVE_FILE_ID = "1RpAWH8GxImR2L8DVX9sL_Z_dM5qbLYPX"
LANG_ID        = 4
MAX_RESULTS    = 5
MAX_TEXT_LEN   = 3000
UPLOAD_FOLDER  = "/tmp/uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)

FEEDBACK_FILE = os.path.join(DATA_DIR, "feedback.json")
STATS_FILE    = os.path.join(DATA_DIR, "stats.json")

# ── DB download ───────────────────────────────────────────────────────────────
def download_db():
    try:
        if not os.path.exists(DB_PATH) or os.path.getsize(DB_PATH) < 1_000_000:
            os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
            logger.info("⬇️ ldb.db yuklanmoqda...")
            gdown.download(f"https://drive.google.com/uc?id={GDRIVE_FILE_ID}", DB_PATH, quiet=False)
            logger.info(f"✅ ldb.db: {os.path.getsize(DB_PATH)//1024//1024}MB")
        else:
            logger.info(f"✅ ldb.db mavjud: {os.path.getsize(DB_PATH)//1024//1024}MB")
    except Exception as e:
        logger.error(f"❌ DB yuklanmadi: {e}")

download_db()
client = Groq(api_key=GROQ_KEY)

# ── Stats & Feedback helpers ──────────────────────────────────────────────────
def load_json(path, default):
    try:
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                return json.load(f)
    except: pass
    return default

def save_json(path, data):
    try:
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
    except Exception as e:
        logger.error(f"save_json xato: {e}")

def record_question(question):
    """Savolni statistikaga yoz"""
    stats = load_json(STATS_FILE, {"questions": [], "counts": {}})
    q = question.strip()
    stats["counts"][q] = stats["counts"].get(q, 0) + 1
    stats["questions"].append({"q": q, "ts": datetime.now().isoformat()})
    stats["questions"] = stats["questions"][-500:]  # oxirgi 500 ta
    save_json(STATS_FILE, stats)

def get_top_questions(n=12):
    """Eng ko'p so'ralgan savollar"""
    stats = load_json(STATS_FILE, {"questions": [], "counts": {}})
    counts = stats.get("counts", {})
    top = sorted(counts.items(), key=lambda x: x[1], reverse=True)[:n]
    return [q for q, _ in top]

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
    return re.sub(r'\s{2,}', ' ', text).strip()

def search_laws(query, limit=MAX_RESULTS):
    # Stop words
    stop_uz = {'uchun','nima','qanday','necha','boʻladi','kerak','olsam','qilsa',
               'men','sen','biz','siz','bu','shu','va','yoki','ham','da','ga',
               'dan','ni','ning','mumkinmi','boladi','bo\'ladi','mumkin'}
    stop_ru = {'для','что','как','сколько','если','нужно','можно','нельзя',
               'я','ты','он','мы','вы','они','это','или','и','но','в','на',
               'с','по','за','при','от','до','из','к','ли'}

    raw = re.split(r'\s+', query.strip().lower())
    is_ru = len(re.findall(r'[а-яё]', query)) > len(re.findall(r'[a-z]', query))
    stop = stop_ru if is_ru else stop_uz
    keywords = [w for w in raw if len(w) > 3 and w not in stop]
    if not keywords:
        keywords = [w for w in raw if len(w) > 2]
    if not keywords:
        return []

    logger.info(f"Keywords: {keywords}")
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

    # 1. To'liq ibora sarlavhada
    try:
        full = ' '.join(keywords[:3])
        rows = conn.execute("""
            SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
            FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
            WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ?
            ORDER BY a.id DESC LIMIT ?
        """, (LANG_ID, f"%{full}%", limit*2)).fetchall()
        for r in rows: add(r, 200)
    except Exception as e:
        logger.error(f"1: {e}")

    # 2. Har bir kalit so'z sarlavhada
    for w in keywords:
        try:
            rows = conn.execute("""
                SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
                FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
                WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ?
                ORDER BY a.id DESC LIMIT ?
            """, (LANG_ID, f"%{w}%", limit*3)).fetchall()
            for r in rows: add(r, 40 * len(w))
        except Exception as e:
            logger.error(f"2: {e}")

    # 3. Matnda (faqat kam natija bo'lsa)
    if len(results) < limit:
        for w in keywords[:2]:
            try:
                rows = conn.execute("""
                    SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
                    FROM acts a INNER JOIN act_contents c ON a.lact_id=c.lact_id
                    WHERE a.lang_id=? AND a.status='Y' AND LOWER(c.text) LIKE ?
                    ORDER BY a.id DESC LIMIT ?
                """, (LANG_ID, f"%{w}%", limit*2)).fetchall()
                for r in rows: add(r, 8 * len(w))
            except Exception as e:
                logger.error(f"3: {e}")

    conn.close()
    top = sorted(results.values(), key=lambda x: x["score"], reverse=True)[:limit]
    logger.info(f"Top: {[r['title'][:35] for r in top[:3]]}")
    return top

# ── AI Prompts ────────────────────────────────────────────────────────────────
SYS_UZ = """Sen O'zbekiston Respublikasi qonunchiligini chuqur biladigan yuridik yordamchisan.
Foydalanuvchi savollariga O'zbekiston qonunlari asosida aniq, sodda, amaliy javob ber.
Suhbat tarixini hisobga ol — mavzudan chiqib ketma.

QOIDALAR:
1. O'zbekiston qonunchiligi bilimingdan foydalanib javob ber
2. Berilgan qonun matnlarini hisobga ol
3. Oddiy O'zbek tilida yoz
4. Aniq modda va qonun nomlarini ko'rsat
5. FAQAT JSON formatida javob ber

JSON:
{"category":"Kategoriya","icon":"emoji","simpleAnswer":"2-4 gap aniq javob","steps":["Qadam"],"legalBasis":"Qonun nomi modda","warning":"yoki null","confidence":"high|medium|low"}"""

SYS_RU = """Ты опытный юридический помощник, специализирующийся на законодательстве Узбекистана.
Отвечай на вопросы точно, просто и практично. Учитывай историю беседы.

ПРАВИЛА:
1. Используй знания законодательства Узбекистана
2. Учитывай предоставленные тексты законов
3. Пиши на русском языке
4. Указывай статьи и названия законов
5. Отвечай ТОЛЬКО в формате JSON

JSON:
{"category":"Категория","icon":"emoji","simpleAnswer":"2-4 предложения","steps":["Шаг"],"legalBasis":"Закон и статья","warning":"или null","confidence":"high|medium|low"}"""

# ── Doc type detection & prompts ──────────────────────────────────────────────
DOC_PROMPTS_UZ = {
    'shartnoma': "Bu shartnomani tahlil qil: tomonlar, majburiyatlar, muddatlar, xavfli bandlar va huquqiy muammolarni tushuntir.",
    'ariza': "Bu arizani tahlil qil: maqsad, qonuniy asoslar, to'g'rilik, tavsiyalar.",
    'qaror': "Bu qarorni tahlil qil: qabul qiluvchi organ, huquqiy asos, amalga oshirish tartibi.",
    'hujjat': "Bu hujjatni tahlil qil: turi, asosiy mazmuni, yuridik ahamiyati, e'tibor berilishi kerak joylar.",
}
DOC_PROMPTS_RU = {
    'contract': "Проанализируй этот договор: стороны, обязательства, сроки, рискованные пункты, юридические проблемы.",
    'application': "Проанализируй это заявление: цель, правовые основания, правильность, рекомендации.",
    'decision': "Проанализируй это решение: орган, правовое основание, порядок исполнения.",
    'document': "Проанализируй этот документ: тип, основное содержание, юридическое значение, на что обратить внимание.",
}

def detect_doc_type(text, lang):
    text_lower = text.lower()
    if lang == 'uz':
        if any(w in text_lower for w in ['shartnoma', 'kelishuv', 'tomonlar', 'majburiyat']):
            return 'shartnoma'
        if any(w in text_lower for w in ['ariza', 'iltimos', 'murojaat']):
            return 'ariza'
        if any(w in text_lower for w in ['qaror', 'buyruq', 'farmoyish']):
            return 'qaror'
        return 'hujjat'
    else:
        if any(w in text_lower for w in ['договор', 'соглашение', 'стороны', 'обязательств']):
            return 'contract'
        if any(w in text_lower for w in ['заявление', 'прошу', 'обращение']):
            return 'application'
        if any(w in text_lower for w in ['решение', 'приказ', 'постановление']):
            return 'decision'
        return 'document'

def build_doc_questions(text, lang):
    """Hujjatdan N ta savol yasash — har birini alohida AI ga berish uchun"""
    doc_type = detect_doc_type(text, lang)
    prompts = DOC_PROMPTS_UZ if lang == 'uz' else DOC_PROMPTS_RU
    base_prompt = prompts.get(doc_type, prompts.get('hujjat' if lang=='uz' else 'document',''))

    # Hujjat hajmiga qarab segmentlash
    chunks = []
    words = text.split()
    chunk_size = 800
    for i in range(0, min(len(words), 3200), chunk_size):
        chunk = ' '.join(words[i:i+chunk_size])
        chunks.append(chunk)

    if not chunks:
        return [f"{base_prompt}\n\nHujjat matni:\n{text[:2000]}"]

    questions = []
    if lang == 'uz':
        questions.append(f"{base_prompt}\n\nHujjat matni (1-qism):\n{chunks[0]}")
        if len(chunks) > 1:
            questions.append(f"Hujjatning davomi (2-qism) asosida qo'shimcha tahlil qil va xavfli joylarni ko'rsat:\n{chunks[1]}")
        if len(chunks) > 2:
            questions.append(f"Hujjatning yakuniy qismi (3-qism) asosida umumiy xulosa va tavsiya ber:\n{chunks[2]}")
    else:
        questions.append(f"{base_prompt}\n\nТекст документа (часть 1):\n{chunks[0]}")
        if len(chunks) > 1:
            questions.append(f"Продолжение документа (часть 2) — дополнительный анализ и проблемные места:\n{chunks[1]}")
        if len(chunks) > 2:
            questions.append(f"Финальная часть (часть 3) — итоговый вывод и рекомендации:\n{chunks[2]}")

    return questions

# ── AI call ───────────────────────────────────────────────────────────────────
def detect_lang(text):
    return 'ru' if len(re.findall(r'[а-яё]', text.lower())) > len(re.findall(r'[a-z]', text.lower())) else 'uz'

def ask_ai(question, laws, lang='uz', history=None):
    actual_lang = detect_lang(question)
    if actual_lang != lang:
        lang = actual_lang

    system = SYS_RU if lang == 'ru' else SYS_UZ
    laws_text = ""
    if laws:
        laws_text = "\n\nRASMIY BAZADAN:\n" if lang=='uz' else "\n\nИЗ БАЗЫ ДАННЫХ:\n"
        for i, law in enumerate(laws[:3], 1):
            laws_text += f"\n--- {i}. {law['title']} ---\n"
            if law.get("number"): laws_text += f"№: {law['number']}\n"
            if law.get("text"): laws_text += f"{law['text'][:2000]}\n"

    messages = [{"role": "system", "content": system}]
    if history:
        for h in (history or [])[-6:]:
            if h.get('role') == 'user' and h.get('content'):
                messages.append({"role": "user", "content": str(h['content'])[:300]})
            elif h.get('role') == 'assistant' and h.get('content'):
                messages.append({"role": "assistant", "content": str(h['content'])[:200]})

    prompt = f"SAVOL: {question}{laws_text}\n\nFAQAT JSON qaytargin." if lang=='uz' else f"ВОПРОС: {question}{laws_text}\n\nВерни ТОЛЬКО JSON."
    messages.append({"role": "user", "content": prompt})

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=messages, max_tokens=1200, temperature=0.3
    )
    raw = completion.choices[0].message.content.strip()
    clean = re.sub(r'```json\s*','',raw)
    clean = re.sub(r'```\s*','',clean).strip()
    try:
        return json.loads(clean)
    except:
        return {"category":"Yuridik masala" if lang=='uz' else "Юридический вопрос",
                "icon":"⚖️","simpleAnswer":raw[:600],"steps":[],"legalBasis":"","warning":None,"confidence":"low"}

# ── File extraction ───────────────────────────────────────────────────────────
def extract_text(filepath, filename):
    ext = filename.rsplit('.',1)[-1].lower()
    text = ""
    try:
        if ext == 'pdf':
            import fitz
            doc = fitz.open(filepath)
            for page in doc: text += page.get_text()
            doc.close()
        elif ext in ('docx','doc'):
            from docx import Document
            doc = Document(filepath)
            text = '\n'.join(p.text for p in doc.paragraphs)
    except Exception as e:
        logger.error(f"Fayl o'qish xato: {e}")
    return text.strip()

# ── Routes ────────────────────────────────────────────────────────────────────
@app.route("/")
def index(): return send_from_directory(".", "index.html")

@app.route("/<path:filename>")
def static_files(filename): return send_from_directory(".", filename)

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
    record_question(question)

    laws = search_laws(question)
    logger.info(f"Topildi: {len(laws)} ta")
    try:
        answer = ask_ai(question, laws, lang, history)
    except Exception as e:
        logger.error(f"AI xato: {e}")
        return jsonify({"error": str(e)}), 503

    sources = [{"title": l["title"][:70], "url": l["url"], "date": l.get("date","")} for l in laws[:3]]
    return jsonify({"found": True, "answer": answer, "sources": sources})

@app.route("/api/search", methods=["GET"])
def search():
    q = request.args.get("q","").strip()
    if len(q) < 2: return jsonify({"results": []})
    laws = search_laws(q, limit=8)
    return jsonify({"results": [{"title":l["title"],"number":l.get("number"),"date":l.get("date"),"url":l["url"]} for l in laws]})

@app.route("/api/upload", methods=["POST"])
def upload():
    if 'file' not in request.files:
        return jsonify({"error": "Fayl topilmadi"}), 400
    file = request.files['file']
    lang = request.form.get('lang', 'uz')
    if not file.filename: return jsonify({"error": "Fayl nomi yo'q"}), 400
    ext = file.filename.rsplit('.',1)[-1].lower()
    if ext not in ('pdf','docx','doc'): return jsonify({"error": "Faqat PDF, DOCX, DOC"}), 400

    filepath = os.path.join(UPLOAD_FOLDER, f"{uuid.uuid4()}.{ext}")
    file.save(filepath)
    try:
        text = extract_text(filepath, file.filename)
        os.remove(filepath)
        if not text.strip(): return jsonify({"error": "Fayldan matn o'qib bo'lmadi"}), 400

        # Hujjat turini aniqla va birinchi savolni tuzib ber
        questions = build_doc_questions(text, lang)
        first_question = questions[0]

        # Birinchi qismni AI ga ber
        answer = ask_ai(first_question, [], lang)

        # Agar bir nechta qism bo'lsa, frontendga bildirish uchun qo'shimcha savollar ham ber
        return jsonify({
            "found": True,
            "answer": answer,
            "sources": [],
            "question": first_question[:100] + "...",
            "doc_parts": len(questions),
            "follow_up_questions": questions[1:] if len(questions) > 1 else []
        })
    except Exception as e:
        logger.error(f"Upload xato: {e}")
        if os.path.exists(filepath): os.remove(filepath)
        return jsonify({"error": str(e)}), 500

@app.route("/api/feedback", methods=["POST"])
def feedback():
    data = request.get_json()
    if not data: return jsonify({"ok": False}), 400
    fb = load_json(FEEDBACK_FILE, [])
    fb.append({
        "msgId": data.get("msgId"),
        "val": data.get("val"),
        "lang": data.get("lang"),
        "ts": datetime.now().isoformat()
    })
    fb = fb[-1000:]  # oxirgi 1000 ta
    save_json(FEEDBACK_FILE, fb)
    return jsonify({"ok": True})

@app.route("/api/stats", methods=["GET"])
def stats():
    try:
        conn = get_db()
        total = conn.execute(
            "SELECT COUNT(*) FROM acts WHERE lang_id=? AND status='Y'", (LANG_ID,)
        ).fetchone()[0]
        conn.close()
    except Exception as e:
        total = 0
    top_q = get_top_questions(12)
    return jsonify({"total_laws": total, "lang": "O'zbek (lotin)", "source": "lex.uz", "top_questions": top_q})

@app.route("/api/health", methods=["GET"])
def health(): return jsonify({"status": "ok", "ai": "Groq Llama 3.3 70B"})

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    logger.info(f"🚀 HuquqBot → http://localhost:{port}")
    app.run(host="0.0.0.0", port=port, debug=False)