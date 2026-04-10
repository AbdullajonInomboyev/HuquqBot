"""
search_api.py — HuquqBot Full Stack (ldb.db + Groq AI)
"""

import os
import sqlite3
import re
import json
import logging
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
DB_PATH      = os.getenv("DB_PATH", "/app/data/ldb.db")
GROQ_KEY     = os.getenv("GROQ_API_KEY", "")
LANG_ID      = 4
MAX_RESULTS  = 5
MAX_TEXT_LEN = 3000

# ── DB ni Google Drive dan yuklab olish ──────────────────────────────────────
GDRIVE_FILE_ID = "1RpAWH8GxImR2L8DVX9sL_Z_dM5qbLYPX"

def download_db():
    try:
        if not os.path.exists(DB_PATH) or os.path.getsize(DB_PATH) < 1_000_000:
            os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
            logger.info("⬇️  ldb.db yuklanmoqda Google Drive dan...")
            gdown.download(
                f"https://drive.google.com/uc?id={GDRIVE_FILE_ID}",
                DB_PATH, quiet=False
            )
            logger.info(f"✅ ldb.db yuklandi! Hajmi: {os.path.getsize(DB_PATH)//1024//1024}MB")
        else:
            logger.info(f"✅ ldb.db mavjud: {os.path.getsize(DB_PATH)//1024//1024}MB")
    except Exception as e:
        logger.error(f"❌ DB yuklanmadi: {e}")

download_db()

# ── Groq AI ───────────────────────────────────────────────────────────────────
client = Groq(api_key=GROQ_KEY)

# ── DB ────────────────────────────────────────────────────────────────────────
def get_db():
    conn = sqlite3.connect(DB_PATH, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA cache_size=10000")
    conn.execute("PRAGMA temp_store=MEMORY")
    return conn


def clean_html(text: str) -> str:
    if not text:
        return ""
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'&nbsp;', ' ', text)
    text = re.sub(r'&amp;', '&', text)
    text = re.sub(r'&lt;', '<', text)
    text = re.sub(r'&gt;', '>', text)
    text = re.sub(r'\s{2,}', ' ', text)
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()


def search_laws(query: str, limit: int = MAX_RESULTS) -> list:
    words = [w for w in re.split(r'\s+', query.strip().lower()) if len(w) > 2]
    if not words:
        return []

    try:
        conn = get_db()
    except Exception as e:
        logger.error(f"DB ulanishda xato: {e}")
        return []

    results = {}

    # 1-bosqich: to'liq ibora sarlavhada
    try:
        rows = conn.execute("""
            SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
            FROM acts a
            LEFT JOIN act_contents c ON a.lact_id = c.lact_id
            WHERE a.lang_id = ? AND a.status = 'Y'
              AND LOWER(a.title) LIKE ?
            ORDER BY a.id DESC LIMIT ?
        """, (LANG_ID, f"%{query.lower()}%", limit * 2)).fetchall()
        for row in rows:
            lid = row["lact_id"]
            results[lid] = {
                "lact_id": lid, "title": row["title"] or "",
                "date": row["acceptance_date"] or "", "number": row["lact_number"] or "",
                "text": clean_html(row["text"] or "")[:MAX_TEXT_LEN],
                "url": f"https://lex.uz/uz/docs/{lid}", "score": 100
            }
    except Exception as e:
        logger.error(f"1-bosqich xato: {e}")

    # 2-bosqich: alohida so'zlar sarlavhada
    for word in words:
        try:
            rows = conn.execute("""
                SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
                FROM acts a
                LEFT JOIN act_contents c ON a.lact_id = c.lact_id
                WHERE a.lang_id = ? AND a.status = 'Y'
                  AND LOWER(a.title) LIKE ?
                ORDER BY a.id DESC LIMIT ?
            """, (LANG_ID, f"%{word}%", limit * 3)).fetchall()
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
            logger.error(f"2-bosqich xato ({word}): {e}")

    # 3-bosqich: matnda qidiruv
    if len(results) < limit:
        for word in words[:3]:
            try:
                rows = conn.execute("""
                    SELECT a.lact_id, a.title, a.acceptance_date, a.lact_number, c.text
                    FROM acts a
                    INNER JOIN act_contents c ON a.lact_id = c.lact_id
                    WHERE a.lang_id = ? AND a.status = 'Y'
                      AND LOWER(c.text) LIKE ?
                    ORDER BY a.id DESC LIMIT ?
                """, (LANG_ID, f"%{word}%", limit * 2)).fetchall()
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
                logger.error(f"3-bosqich xato ({word}): {e}")

    conn.close()
    return sorted(results.values(), key=lambda x: x["score"], reverse=True)[:limit]


# ── Groq AI ───────────────────────────────────────────────────────────────────
SYSTEM_PROMPT = """Sen O'zbekiston Respublikasi qonunchiligini yaxshi biladigan yuridik yordamchisan.
Vazifang: foydalanuvchi savolini tahlil qilib, berilgan RASMIY qonun matnlari asosida aniq va sodda javob berish.

MUHIM QOIDALAR:
1. FAQAT berilgan qonun matnlari asosida javob ber
2. Oddiy O'zbek tilida yoz — fuqaro tushunishi kerak
3. Agar matnlar savolga javob bera olmasa, ochiq ayt
4. FAQAT JSON formatida javob ber, boshqa hech narsa yozma

JSON formati:
{
  "category": "Kategoriya nomi (masalan: Mehnat huquqi)",
  "icon": "tegishli emoji",
  "simpleAnswer": "Asosiy javob 2-4 gap, oddiy tilda",
  "steps": ["Amaliy qadam 1", "Qadam 2"],
  "legalBasis": "Qaysi qonun/modda asosida (qonun nomi va raqami)",
  "warning": "Muhim ogohlantirish yoki null",
  "confidence": "high yoki medium yoki low"
}"""


def ask_ai(question: str, laws: list) -> dict:
    laws_text = ""
    for i, law in enumerate(laws, 1):
        laws_text += f"\n=== QONUN {i} ===\n"
        laws_text += f"Sarlavha: {law['title']}\n"
        if law.get("number"):
            laws_text += f"Raqami: {law['number']}\n"
        if law.get("date"):
            laws_text += f"Sana: {law['date']}\n"
        if law.get("text"):
            laws_text += f"Matn:\n{law['text']}\n"

    prompt = f"""FOYDALANUVCHI SAVOLI: {question}

RASMIY QONUN MATNLARI:
{laws_text}

Yuqoridagi qonun matnlari asosida savolga javob ber. FAQAT JSON qaytargin."""

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": prompt}
        ],
        max_tokens=1000,
        temperature=0.3
    )

    raw = completion.choices[0].message.content.strip()
    clean = re.sub(r'```json\s*', '', raw)
    clean = re.sub(r'```\s*', '', clean).strip()

    try:
        return json.loads(clean)
    except json.JSONDecodeError:
        logger.error(f"JSON parse xato: {raw[:300]}")
        return {
            "category": "Yuridik masala",
            "icon": "⚖️",
            "simpleAnswer": raw[:600],
            "steps": [],
            "legalBasis": "",
            "warning": None,
            "confidence": "low"
        }


# ── Frontend ──────────────────────────────────────────────────────────────────
@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory(".", filename)


# ── API ───────────────────────────────────────────────────────────────────────
@app.route("/api/ask", methods=["POST"])
def ask():
    data = request.get_json()
    if not data or not data.get("question"):
        return jsonify({"error": "Savol kiritilmadi"}), 400

    question = data["question"].strip()
    if len(question) < 3:
        return jsonify({"error": "Savol juda qisqa"}), 400

    logger.info(f"Savol: {question[:80]}")
    laws = search_laws(question)
    logger.info(f"Topildi: {len(laws)} ta qonun")

    if not laws:
        return jsonify({
            "found": False,
            "answer": {
                "category": "Topilmadi",
                "icon": "🔍",
                "simpleAnswer": "Bu mavzu bo'yicha ma'lumotlar bazasida aniq qonun topilmadi. Lex.uz saytida qidiring yoki yuristga murojaat qiling.",
                "steps": [],
                "legalBasis": "",
                "warning": "Rasmiy manbalardan tekshiring.",
                "confidence": "low"
            },
            "sources": []
        })

    try:
        ai_answer = ask_ai(question, laws)
    except Exception as e:
        logger.error(f"AI xato: {e}")
        return jsonify({"error": f"AI xizmati vaqtincha ishlamayapti: {str(e)}"}), 503

    sources = [
        {"title": law["title"][:70], "url": law["url"], "date": law.get("date", "")}
        for law in laws[:3]
    ]
    return jsonify({"found": True, "answer": ai_answer, "sources": sources})


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
        return jsonify({"error": str(e)}), 500


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "ai": "Groq Llama 3.3 70B"})


# ── Ishga tushirish ───────────────────────────────────────────────────────────
if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    logger.info(f"🚀 HuquqBot ishga tushmoqda → http://localhost:{port}")
    app.run(host="0.0.0.0", port=port, debug=False)
