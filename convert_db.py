"""
convert_db.py — ldb.db dan data.js ga konvertatsiya
D:\hakaton papkasiga qo'ying va ishga tushiring:
python convert_db.py
"""

import sqlite3
import json
import re
import os

DB_PATH = "ldb.db"
OUTPUT_JS = "js/data.js"  # huquqiy-bot papkasiga nisbatan
OUTPUT_JSON = "legal_data.json"  # test uchun

# ── Kalit so'zlar kategoriyalari ──
CATEGORIES = [
    {
        "id": "mehnat",
        "name": "Mehnat huquqi",
        "icon": "📋",
        "keywords": ["mehnat", "ish haqi", "ta'til", "xodim", "ishchi", "ish vaqti",
                     "ishga olish", "bo'shatish", "kasaba", "intizom", "ish joyi"],
        "search_terms": ["mehnat", "xodim", "ish haqi", "ta'til", "ishga olish"]
    },
    {
        "id": "soliq",
        "name": "Soliq huquqi",
        "icon": "💰",
        "keywords": ["soliq", "QQS", "daromad solig'i", "aksiz", "bojxona",
                     "soliqqa tortish", "soliq to'lovchi", "patent"],
        "search_terms": ["soliq", "QQS", "daromad", "patent", "bojxona"]
    },
    {
        "id": "tadbirkorlik",
        "name": "Tadbirkorlik",
        "icon": "🏢",
        "keywords": ["tadbirkorlik", "korxona", "ro'yxatdan o'tish", "litsenziya",
                     "yakka tartibda", "mas'uliyati cheklangan", "aksiyadorlik"],
        "search_terms": ["tadbirkorlik", "korxona", "litsenziya", "ro'yxatdan"]
    },
    {
        "id": "mulk",
        "name": "Mulk va ko'chmas mulk",
        "icon": "🏠",
        "keywords": ["ko'chmas mulk", "uy-joy", "er", "yer", "mulk", "ijaraga",
                     "sotib olish", "kadastr", "ipoteka"],
        "search_terms": ["ko'chmas mulk", "uy-joy", "yer", "mulk", "ipoteka"]
    },
    {
        "id": "oila",
        "name": "Oila huquqi",
        "icon": "👨‍👩‍👧",
        "keywords": ["nikoh", "ajrashish", "nafaqa", "vasiylik", "farzand",
                     "meros", "oila", "turmush o'rtoq"],
        "search_terms": ["nikoh", "ajrashish", "nafaqa", "meros", "vasiylik"]
    },
    {
        "id": "transport",
        "name": "Transport",
        "icon": "🚗",
        "keywords": ["transport", "avtomobil", "haydovchi", "yo'l harakati",
                     "guvohnoma", "texnik ko'rik", "sug'urta"],
        "search_terms": ["transport", "avtomobil", "haydovchi", "yo'l harakati"]
    },
    {
        "id": "ijtimoiy",
        "name": "Ijtimoiy ta'minot",
        "icon": "🤝",
        "keywords": ["pensiya", "nafaqa", "nogironlik", "ijtimoiy", "sug'urta",
                     "tibbiy", "bolalar nafaqasi", "ishsizlik"],
        "search_terms": ["pensiya", "nafaqa", "nogironlik", "ijtimoiy sug'urta"]
    },
    {
        "id": "jinoyat",
        "name": "Jinoyat va ma'muriy",
        "icon": "⚖️",
        "keywords": ["jinoyat", "jazo", "jarima", "hibsga olish", "sud",
                     "ma'muriy", "huquqbuzarlik", "prokuratura"],
        "search_terms": ["jinoyat", "jazo", "jarima", "sud", "ma'muriy"]
    }
]

def clean_html(text):
    """HTML teglarini olib tashlash"""
    if not text:
        return ""
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'&nbsp;', ' ', text)
    text = re.sub(r'&amp;', '&', text)
    text = re.sub(r'&lt;', '<', text)
    text = re.sub(r'&gt;', '>', text)
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r'\n\s+', '\n', text)
    return text.strip()

def categorize(title, text):
    """Qonunni kategoriyaga ajratish"""
    combined = (title + " " + text[:500]).lower()
    best = None
    best_score = 0
    for cat in CATEGORIES:
        score = sum(1 for kw in cat["keywords"] if kw.lower() in combined)
        if score > best_score:
            best_score = score
            best = cat
    return best if best_score > 0 else None

def make_summary(text, max_chars=600):
    """Matndan qisqa xulosa olish"""
    text = clean_html(text)
    sentences = re.split(r'(?<=[.!?])\s+', text)
    summary = ""
    for s in sentences:
        if len(summary) + len(s) < max_chars:
            summary += s + " "
        else:
            break
    return summary.strip() or text[:max_chars]

def extract_keywords(title):
    """Sarlavhadan kalit so'zlar olish"""
    stop_words = {"to'g'risida", "haqida", "bo'yicha", "tartibida", "tartibi",
                  "o'zgartirish", "qo'shimcha", "tasdiqlash", "kiritish",
                  "ba'zi", "ayrim", "muayyan", "o'zbekiston", "respublikasi"}
    words = re.findall(r"[a-zA-Zа-яА-ЯёЁa-zA-Z'ʻo'g']+", title.lower())
    return [w for w in words if len(w) > 3 and w not in stop_words][:8]

def main():
    print(f"📂 {DB_PATH} ochilmoqda...")
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    # O'zbek tilida (lang_id=4) qonunlarni matnlari bilan olish
    print("📊 Ma'lumotlar o'qilmoqda (lang_id=4, status=Y)...")
    
    query = """
        SELECT 
            a.id,
            a.lact_id,
            a.title,
            a.acceptance_date,
            a.lact_number,
            c.text
        FROM acts a
        LEFT JOIN act_contents c ON a.lact_id = c.lact_id
        WHERE a.lang_id = 4 
          AND a.status = 'Y'
          AND a.title IS NOT NULL
        ORDER BY a.id DESC
        LIMIT 5000
    """
    
    rows = conn.execute(query).fetchall()
    print(f"✅ {len(rows)} ta yozuv topildi")

    # Kategoriyalarga ajratish
    categorized = {cat["id"]: [] for cat in CATEGORIES}
    uncategorized = []

    for i, row in enumerate(rows):
        if i % 500 == 0:
            print(f"  ⚙️  {i}/{len(rows)} qayta ishlanmoqda...")
        
        title = row["title"] or ""
        text = row["text"] or ""
        cat = categorize(title, text)
        
        item = {
            "id": row["lact_id"],
            "title": title,
            "date": row["acceptance_date"],
            "number": row["lact_number"],
            "keywords": extract_keywords(title),
            "summary": make_summary(text),
            "url": f"https://lex.uz/uz/docs/{row['lact_id']}"
        }
        
        if cat:
            categorized[cat["id"]].append(item)
        else:
            uncategorized.append(item)

    # Statistika
    print("\n📈 Kategoriyalar:")
    for cat in CATEGORIES:
        count = len(categorized[cat["id"]])
        print(f"  {cat['icon']} {cat['name']}: {count} ta qonun")
    print(f"  ❓ Kategoriyasiz: {len(uncategorized)} ta")

    # JSON saqlash (test uchun)
    all_data = {
        "categories": CATEGORIES,
        "laws": categorized,
        "total": len(rows)
    }
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)
    print(f"\n✅ {OUTPUT_JSON} saqlandi ({os.path.getsize(OUTPUT_JSON)//1024} KB)")

    # data.js generatsiya
    os.makedirs("js", exist_ok=True)
    
    js_content = generate_js(categorized, uncategorized)
    with open(OUTPUT_JS, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"✅ {OUTPUT_JS} saqlandi ({os.path.getsize(OUTPUT_JS)//1024} KB)")

    conn.close()
    print("\n🎉 Tayyor! Endi HuquqBot real lex.uz ma'lumotlari bilan ishlaydi!")

def generate_js(categorized, uncategorized):
    """data.js fayl generatsiya qilish"""
    
    # Har kategoriyadan maksimal 200 ta qonun (hajm uchun)
    limited = {}
    for cat_id, laws in categorized.items():
        limited[cat_id] = laws[:200]

    return f"""// ──────────────────────────────────────────────
// data.js — lex.uz dan avtomatik generatsiya qilingan
// Jami: {sum(len(v) for v in limited.values())} ta qonun
// Sana: {__import__('datetime').date.today()}
// ──────────────────────────────────────────────

const CATEGORIES = {json.dumps(CATEGORIES, ensure_ascii=False, indent=2)};

const LAWS_BY_CATEGORY = {json.dumps(limited, ensure_ascii=False, indent=2)};

// ── Qidirish funksiyasi ──
function searchDatabase(query) {{
  const q = query.toLowerCase().trim();
  const words = q.split(/\\s+/).filter(w => w.length > 2);
  
  let bestMatch = null;
  let bestScore = 0;

  for (const [catId, laws] of Object.entries(LAWS_BY_CATEGORY)) {{
    for (const law of laws) {{
      let score = 0;
      const titleLower = law.title.toLowerCase();
      const summaryLower = (law.summary || '').toLowerCase();
      
      for (const word of words) {{
        if (titleLower.includes(word)) score += 3;
        if (summaryLower.includes(word)) score += 1;
        if ((law.keywords || []).includes(word)) score += 2;
      }}
      
      if (score > bestScore) {{
        bestScore = score;
        const cat = CATEGORIES.find(c => c.id === catId);
        bestMatch = {{
          ...law,
          category: cat?.name || catId,
          icon: cat?.icon || '📄',
          query_formal: law.title,
          sources: [
            {{ name: 'lex.uz — ' + law.title.substring(0, 50), url: law.url }}
          ],
          answer: law.summary || law.title,
          warn: "Batafsil ma'lumot uchun lex.uz saytiga o'ting yoki mutaxassisga murojaat qiling."
        }};
      }}
    }}
  }}

  return bestScore >= 2 ? bestMatch : null;
}}

// ── Kategoriya bo'yicha qidirish ──
function getLawsByCategory(catId, limit = 10) {{
  return (LAWS_BY_CATEGORY[catId] || []).slice(0, limit);
}}

// ── Statistika ──
const DB_STATS = {{
  total: {sum(len(v) for v in limited.values())},
  source: 'lex.uz',
  lang: "O'zbek (lotin)",
  updated: '{__import__('datetime').date.today()}'
}};
"""

if __name__ == "__main__":
    main()
