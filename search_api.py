# """
# search_api.py — HuquqBot v2.3
# Hujjat turini aniqlash + to'liq tahlil
# """
# import os, re, json, uuid, logging, sqlite3
# from datetime import datetime
# from flask import Flask, request, jsonify, send_from_directory
# from flask_cors import CORS
# from groq import Groq
# from dotenv import load_dotenv
# import gdown

# load_dotenv()
# app = Flask(__name__, static_folder=".", static_url_path="")
# CORS(app)
# logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
# logger = logging.getLogger(__name__)

# DB_PATH        = os.getenv("DB_PATH", "/app/data/ldb.db")
# GROQ_KEY       = os.getenv("GROQ_API_KEY", "")
# DATA_DIR       = os.getenv("DATA_DIR", "/app/data")
# GDRIVE_FILE_ID = "1RpAWH8GxImR2L8DVX9sL_Z_dM5qbLYPX"
# LANG_ID        = 4
# MAX_RESULTS    = 5
# MAX_TEXT_LEN   = 3000
# UPLOAD_FOLDER  = "/tmp/uploads"

# os.makedirs(UPLOAD_FOLDER, exist_ok=True)
# os.makedirs(DATA_DIR, exist_ok=True)
# FEEDBACK_FILE = os.path.join(DATA_DIR, "feedback.json")
# STATS_FILE    = os.path.join(DATA_DIR, "stats.json")

# def download_db():
#     try:
#         if not os.path.exists(DB_PATH) or os.path.getsize(DB_PATH) < 1_000_000:
#             os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
#             logger.info("⬇️ ldb.db yuklanmoqda...")
#             gdown.download(f"https://drive.google.com/uc?id={GDRIVE_FILE_ID}", DB_PATH, quiet=False)
#             logger.info(f"✅ {os.path.getsize(DB_PATH)//1024//1024}MB")
#         else:
#             logger.info(f"✅ ldb.db: {os.path.getsize(DB_PATH)//1024//1024}MB")
#     except Exception as e:
#         logger.error(f"❌ DB: {e}")

# download_db()
# client = Groq(api_key=GROQ_KEY)

# # ── JSON helpers ──────────────────────────────────────────────────────────────
# def load_json(path, default):
#     try:
#         if os.path.exists(path):
#             with open(path, 'r', encoding='utf-8') as f:
#                 return json.load(f)
#     except: pass
#     return default

# def save_json(path, data):
#     try:
#         with open(path, 'w', encoding='utf-8') as f:
#             json.dump(data, f, ensure_ascii=False, indent=2)
#     except Exception as e:
#         logger.error(f"save_json: {e}")

# def record_question(q):
#     stats = load_json(STATS_FILE, {"counts": {}, "questions": []})
#     stats["counts"][q] = stats["counts"].get(q, 0) + 1
#     stats["questions"] = (stats["questions"] + [{"q": q, "ts": datetime.now().isoformat()}])[-500:]
#     save_json(STATS_FILE, stats)

# def get_top_questions(n=12):
#     stats = load_json(STATS_FILE, {"counts": {}})
#     top = sorted(stats["counts"].items(), key=lambda x: x[1], reverse=True)[:n]
#     return [q for q, _ in top]

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
#     return re.sub(r'\s{2,}', ' ', text).strip()

# def search_laws(query, limit=MAX_RESULTS):
#     stop_uz = {'uchun','nima','qanday','necha','kerak','olsam','qilsa','men','sen',
#                'biz','siz','bu','shu','va','yoki','ham','da','ga','dan','ni','ning',
#                'mumkinmi','boladi','mumkin','bo\'ladi'}
#     stop_ru = {'для','что','как','сколько','если','нужно','можно','нельзя',
#                'я','ты','он','мы','вы','они','это','или','и','но','в','на',
#                'с','по','за','при','от','до','из','к','ли','мне','вам'}

#     # Rus tilidagi kalit so'zlarni o'zbek ekvivalentlariga tarjima
#     RU_TO_UZ = {
#         'труд': 'mehnat', 'трудов': 'mehnat', 'работа': 'ish', 'работник': 'xodim',
#         'зарплат': 'ish haqi', 'отпуск': 'ta\'til', 'увольнен': 'bo\'shatish',
#         'налог': 'soliq', 'ндс': 'qqs', 'доход': 'daromad', 'имуществ': 'mulk',
#         'недвижим': 'ko\'chmas mulk', 'земл': 'yer', 'квартир': 'uy-joy',
#         'ипотек': 'ipoteka', 'аренд': 'ijara', 'купл': 'sotib olish',
#         'брак': 'nikoh', 'развод': 'ajrashish', 'алимент': 'nafaqa',
#         'наследств': 'meros', 'семь': 'oila', 'ребен': 'bola',
#         'пенси': 'pensiya', 'инвалид': 'nogironlik', 'страхован': 'sug\'urta',
#         'транспорт': 'transport', 'автомобил': 'avtomobil', 'водител': 'haydovchi',
#         'лицензи': 'litsenziya', 'регистрац': 'ro\'yxatdan', 'предприним': 'tadbirkorlik',
#         'договор': 'shartnoma', 'суд': 'sud', 'штраф': 'jarima', 'кредит': 'kredit',
#         'банк': 'bank', 'граждан': 'fuqaro', 'права': 'huquq', 'закон': 'qonun',
#         'жилищ': 'uy-joy', 'медицин': 'tibbiy', 'образован': 'ta\'lim',
#         'торговл': 'savdo', 'таможн': 'bojxona', 'патент': 'patent',
#         'уголовн': 'jinoyat', 'административн': 'ma\'muriy', 'арест': 'hibsga olish',
#     }

#     raw = re.split(r'\s+', query.strip().lower())
#     is_ru = len(re.findall(r'[а-яё]', query)) > len(re.findall(r'[a-z]', query))
#     stop = stop_ru if is_ru else stop_uz
#     kw = [w for w in raw if len(w) > 3 and w not in stop] or [w for w in raw if len(w) > 2]
#     if not kw: return []

#     # Rus so'zlarni o'zbek ekvivalentlariga almashtiramiz
#     if is_ru:
#         uz_kw = []
#         for w in kw:
#             translated = False
#             for ru_stem, uz_word in RU_TO_UZ.items():
#                 if ru_stem in w:
#                     uz_kw.append(uz_word)
#                     translated = True
#                     break
#             if not translated:
#                 uz_kw.append(w)  # Tarjima topilmasa o'zini qoldir
#         search_kw = uz_kw
#         logger.info(f"RU→UZ: {list(zip(kw, search_kw))}")
#     else:
#         search_kw = kw

#     logger.info(f"Search KW: {search_kw}")

#     try:
#         conn = get_db()
#     except Exception as e:
#         logger.warning(f"DB: {e}"); return []

#     results = {}
#     def add(row, score):
#         lid = row["lact_id"]
#         if lid not in results:
#             results[lid] = {"lact_id":lid,"title":row["title"] or "","date":row["acceptance_date"] or "",
#                 "number":row["lact_number"] or "","text":clean_html(row["text"] or "")[:MAX_TEXT_LEN],
#                 "url":f"https://lex.uz/uz/docs/{lid}","score":score}
#         else:
#             results[lid]["score"] += score

#     # 1. To'liq ibora
#     try:
#         full = ' '.join(search_kw[:3])
#         rows = conn.execute("""SELECT a.lact_id,a.title,a.acceptance_date,a.lact_number,c.text
#             FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
#             WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ?
#             ORDER BY a.id DESC LIMIT ?""", (LANG_ID, f"%{full}%", limit*2)).fetchall()
#         for r in rows: add(r, 200)
#     except Exception as e: logger.error(f"1: {e}")

#     # 2. Alohida kalit so'zlar
#     for w in search_kw:
#         try:
#             rows = conn.execute("""SELECT a.lact_id,a.title,a.acceptance_date,a.lact_number,c.text
#                 FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
#                 WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ?
#                 ORDER BY a.id DESC LIMIT ?""", (LANG_ID, f"%{w}%", limit*3)).fetchall()
#             for r in rows: add(r, 40*len(w))
#         except: pass

#     # 3. Matnda
#     if len(results) < limit:
#         for w in search_kw[:2]:
#             try:
#                 rows = conn.execute("""SELECT a.lact_id,a.title,a.acceptance_date,a.lact_number,c.text
#                     FROM acts a INNER JOIN act_contents c ON a.lact_id=c.lact_id
#                     WHERE a.lang_id=? AND a.status='Y' AND LOWER(c.text) LIKE ?
#                     ORDER BY a.id DESC LIMIT ?""", (LANG_ID, f"%{w}%", limit*2)).fetchall()
#                 for r in rows: add(r, 8*len(w))
#             except: pass

#     conn.close()
#     top = sorted(results.values(), key=lambda x: x["score"], reverse=True)[:limit]
#     logger.info(f"Top: {[r['title'][:30] for r in top[:3]]}")
#     return top

# # ── Off-topic detection ───────────────────────────────────────────────────────
# LEGAL_KEYWORDS_UZ = {
#     'qonun','huquq','soliq','mehnat','nikoh','ajrash','meros','mulk','shartnoma',
#     'sud','jarima','ariza','litsenziya','patent','kredit','ipoteka','ijara',
#     'tadbirkorlik','yatt','pensiya','nafaqa','sug\'urta','transport','guvohnoma',
#     'fuqaro','davlat','korxona','ro\'yxat','ruxsat','to\'lov','yer','uy','kvartira',
#     'ish','xodim','ishchi','ta\'til','maosh','ish haqi','bo\'shatish','ishdan',
#     'jinoyat','jazo','hibsga','prokuratura','notarius','vasiylik','bola','oila',
# }
# LEGAL_KEYWORDS_RU = {
#     'закон','право','налог','труд','брак','развод','наследство','имущество',
#     'договор','суд','штраф','заявление','лицензия','патент','кредит','ипотека',
#     'аренда','предпринимат','ооо','пенсия','алименты','страхование','транспорт',
#     'гражданин','государство','предприятие','регистрация','разрешение','оплата',
#     'земля','жилье','квартира','работа','сотрудник','отпуск','зарплата','увольнение',
#     'уголовн','наказание','арест','прокурор','нотариус','опека','ребенок','семья',
#     'банк','юрист','адвокат','суд','иск','жалоба','апелляция',
# }
# OFFTOPIC_UZ = {
#     'salom','assalomu','xayr','rahmat','yaxshimisiz','qalaysiz','nechchi','nima gap',
#     'kun yaxshi','ishlar qanday','dam','ovqat','sport','film','musiqa','sevgi',
#     'do\'st','bola','o\'yin','sayohat','havoda','ob-havo','yangilik','ov',
# }
# OFFTOPIC_RU = {
#     'привет','здравствуй','пока','спасибо','как дела','как вы','хорошо ли',
#     'погода','еда','спорт','фильм','музыка','любовь','друг','игра','путешествие',
#     'новости','рецепт','готовить','отдых','праздник',
# }

# def is_legal_question(text, lang):
#     """Savolni yuridik ekanligini tekshir"""
#     tl = text.lower()
#     words = set(re.split(r'\s+', tl))

#     if lang == 'ru':
#         # Off-topic so'zlar bormi?
#         if any(w in tl for w in OFFTOPIC_RU):
#             # Legal so'zlar ham bormi?
#             if not any(w in tl for w in LEGAL_KEYWORDS_RU):
#                 return False
#         return True  # Legal so'zlar yo'q bo'lsa ham, shubha bo'lsa javob ber
#     else:
#         if any(w in tl for w in OFFTOPIC_UZ):
#             if not any(w in tl for w in LEGAL_KEYWORDS_UZ):
#                 return False
#         return True

# OFFTOPIC_RESPONSE_UZ = {
#     "category": "Yuridik bo'lmagan savol",
#     "icon": "⚖️",
#     "simpleAnswer": "Men faqat O'zbekiston qonunchiligi va yuridik masalalar bo'yicha yordam bera olaman.\n\nMisol savollar:\n• Mehnat ta'tili necha kun?\n• YaTT ochish uchun nima kerak?\n• Shartnomani qanday bekor qilaman?",
#     "steps": ["Yuridik savolingizni yozing", "AI qonunlar asosida tahlil qiladi", "Rasmiy manbalar bilan javob beradi"],
#     "legalBasis": "",
#     "warning": None,
#     "confidence": "high"
# }
# OFFTOPIC_RESPONSE_RU = {
#     "category": "Не юридический вопрос",
#     "icon": "⚖️",
#     "simpleAnswer": "Я могу помочь только с вопросами по законодательству Узбекистана.\n\nПримеры вопросов:\n• Сколько дней длится трудовой отпуск?\n• Что нужно для открытия ИП?\n• Как расторгнуть договор?",
#     "steps": ["Задайте юридический вопрос", "ИИ проанализирует законы", "Ответит со ссылками на источники"],
#     "legalBasis": "",
#     "warning": None,
#     "confidence": "high"
# }

# # ── Document type detection ───────────────────────────────────────────────────
# def detect_doc_type(text, lang):
#     """Hujjat turini matndan aniqla"""
#     tl = text.lower()
#     if lang == 'uz':
#         if any(w in tl for w in ['shartnoma', 'kelishuv', '1-tomondan', '2-tomondan', 'majburiyat', 'shartnoma tuzildi']):
#             return 'shartnoma'
#         if any(w in tl for w in ['ariza', 'iltimos qilaman', 'murojaat', 'iltimos']):
#             return 'ariza'
#         if any(w in tl for w in ['qaror', 'buyruq', 'farmoyish', 'ko\'rsatma']):
#             return 'qaror'
#         if any(w in tl for w in ['guvohnoma', 'sertifikat', 'litsenziya']):
#             return 'guvohnoma'
#         if any(w in tl for w in ['hisob', 'balans', 'moliyaviy', 'daromad']):
#             return 'moliyaviy'
#         return 'hujjat'
#     else:
#         if any(w in tl for w in ['договор', 'соглашение', 'сторона', 'обязательств', 'договор заключен']):
#             return 'contract'
#         if any(w in tl for w in ['заявление', 'прошу', 'обращение', 'прошу рассмотреть']):
#             return 'application'
#         if any(w in tl for w in ['решение', 'приказ', 'постановление', 'распоряжение']):
#             return 'decision'
#         if any(w in tl for w in ['свидетельство', 'сертификат', 'лицензия']):
#             return 'certificate'
#         if any(w in tl for w in ['баланс', 'финансовый', 'доходы', 'расходы']):
#             return 'financial'
#         return 'document'

# # ── Document-specific system prompts ─────────────────────────────────────────
# DOC_SYSTEMS = {
#     'uz': {
#         'shartnoma': """Sen yuridik ekspertsan. Shartnomani quyidagi tartibda tahlil qil:
# 1. Tomonlar kim? Ularning huquq va majburiyatlari
# 2. Shartnoma muddati va asosiy shartlar
# 3. Xavfli yoki noqulay bandlar (agar bo'lsa)
# 4. Qonunchilikka muvofiqligini tekshir
# 5. Tavsiyalar va eslatmalar
# FAQAT JSON formatida javob ber:
# {"category":"Shartnoma tahlili","icon":"📄","simpleAnswer":"asosiy xulosa","steps":["qadam1","qadam2"],"legalBasis":"tegishli qonun","warning":"xavfli bandlar yoki null","confidence":"high|medium|low"}""",

#         'ariza': """Sen yuridik ekspertsan. Arizani quyidagi tartibda tahlil qil:
# 1. Ariza maqsadi nima?
# 2. Qonuniy asoslar to'g'rimi?
# 3. Ariza to'g'ri rasmiylashtirilganmi?
# 4. Kamchiliklar va to'ldirish kerak joylar
# 5. Keyingi qadamlar
# FAQAT JSON formatida javob ber:
# {"category":"Ariza tahlili","icon":"📝","simpleAnswer":"asosiy xulosa","steps":["qadam1","qadam2"],"legalBasis":"tegishli qonun","warning":"kamchiliklar yoki null","confidence":"high|medium|low"}""",

#         'qaror': """Sen yuridik ekspertsan. Qarorni quyidagi tartibda tahlil qil:
# 1. Qarorni qabul qilgan organ va vakolatlar
# 2. Qarorning huquqiy asoslari
# 3. Amalga oshirish tartibi va muddatlar
# 4. Nizomga muvofiqlik tekshiruvi
# 5. Ta'sir va oqibatlar
# FAQAT JSON formatida javob ber:
# {"category":"Qaror tahlili","icon":"📋","simpleAnswer":"asosiy xulosa","steps":["qadam1","qadam2"],"legalBasis":"tegishli qonun","warning":"muammolar yoki null","confidence":"high|medium|low"}""",

#         'moliyaviy': """Sen moliyaviy-yuridik ekspertsan. Moliyaviy hujjatni tahlil qil:
# 1. Hujjat turi va maqsadi
# 2. Asosiy ko'rsatkichlar
# 3. Soliqqa oid masalalar
# 4. Qonunchilikka muvofiqlik
# 5. Tavsiyalar
# FAQAT JSON formatida javob ber:
# {"category":"Moliyaviy hujjat","icon":"💰","simpleAnswer":"asosiy xulosa","steps":["qadam1","qadam2"],"legalBasis":"tegishli qonun","warning":"muammolar yoki null","confidence":"high|medium|low"}""",

#         'hujjat': """Sen yuridik ekspertsan. Bu hujjatni tahlil qil:
# 1. Hujjat turi va maqsadi
# 2. Asosiy mazmuni
# 3. Yuridik ahamiyati
# 4. E'tibor berilishi kerak joylar
# 5. Tavsiyalar
# FAQAT JSON formatida javob ber:
# {"category":"Hujjat tahlili","icon":"📄","simpleAnswer":"asosiy xulosa","steps":["qadam1","qadam2"],"legalBasis":"tegishli qonun","warning":"muammolar yoki null","confidence":"high|medium|low"}""",
#     },
#     'ru': {
#         'contract': """Ты юридический эксперт. Проанализируй договор:
# 1. Стороны и их права/обязанности
# 2. Срок и основные условия
# 3. Рискованные или невыгодные пункты
# 4. Соответствие законодательству
# 5. Рекомендации
# Только JSON:
# {"category":"Анализ договора","icon":"📄","simpleAnswer":"основной вывод","steps":["шаг1","шаг2"],"legalBasis":"применимый закон","warning":"рискованные пункты или null","confidence":"high|medium|low"}""",

#         'application': """Ты юридический эксперт. Проанализируй заявление:
# 1. Цель заявления
# 2. Правовые основания
# 3. Правильность оформления
# 4. Недостатки и что дополнить
# 5. Дальнейшие шаги
# Только JSON:
# {"category":"Анализ заявления","icon":"📝","simpleAnswer":"основной вывод","steps":["шаг1","шаг2"],"legalBasis":"применимый закон","warning":"недостатки или null","confidence":"high|medium|low"}""",

#         'decision': """Ты юридический эксперт. Проанализируй решение:
# 1. Орган и его полномочия
# 2. Правовые основания
# 3. Порядок исполнения
# 4. Соответствие нормам
# 5. Последствия
# Только JSON:
# {"category":"Анализ решения","icon":"📋","simpleAnswer":"основной вывод","steps":["шаг1","шаг2"],"legalBasis":"применимый закон","warning":"проблемы или null","confidence":"high|medium|low"}""",

#         'document': """Ты юридический эксперт. Проанализируй документ:
# 1. Тип и назначение документа
# 2. Основное содержание
# 3. Юридическое значение
# 4. На что обратить внимание
# 5. Рекомендации
# Только JSON:
# {"category":"Анализ документа","icon":"📄","simpleAnswer":"основной вывод","steps":["шаг1","шаг2"],"legalBasis":"применимый закон","warning":"проблемы или null","confidence":"high|medium|low"}""",
#     }
# }

# # ── AI ────────────────────────────────────────────────────────────────────────
# SYS_UZ = """Sen O'zbekiston qonunchiligini chuqur biladigan yuridik yordamchisan.
# Suhbat tarixini hisobga ol. Oddiy O'zbek tilida, aniq javob ber.
# FAQAT JSON:
# {"category":"Kategoriya","icon":"emoji","simpleAnswer":"2-4 gap","steps":["qadam"],"legalBasis":"qonun","warning":"yoki null","confidence":"high|medium|low"}"""

# SYS_RU = """Ты опытный юридический помощник по законодательству Узбекистана.
# Учитывай историю беседы. Отвечай на русском, ясно и кратко.
# Только JSON:
# {"category":"Категория","icon":"emoji","simpleAnswer":"2-4 предложения","steps":["шаг"],"legalBasis":"закон","warning":"или null","confidence":"high|medium|low"}"""

# def detect_lang(text):
#     return 'ru' if len(re.findall(r'[а-яё]',text.lower()))>len(re.findall(r'[a-z]',text.lower())) else 'uz'

# def parse_ai_response(raw):
#     clean = re.sub(r'```json\s*','',raw)
#     clean = re.sub(r'```\s*','',clean).strip()
#     # Find first { ... }
#     m = re.search(r'\{.*\}', clean, re.DOTALL)
#     if m:
#         try:
#             return json.loads(m.group())
#         except: pass
#     try:
#         return json.loads(clean)
#     except:
#         return {"category":"Yuridik masala","icon":"⚖️","simpleAnswer":raw[:500],"steps":[],"legalBasis":"","warning":None,"confidence":"low"}

# def ask_ai(question, laws, lang='uz', history=None, system_override=None):
#     actual = detect_lang(question)
#     if actual != lang: lang = actual

#     system = system_override or (SYS_RU if lang=='ru' else SYS_UZ)

#     laws_text = ""
#     if laws:
#         laws_text = "\n\nRASMIY BAZADAN:\n" if lang=='uz' else "\n\nИЗ БАЗЫ:\n"
#         for i, law in enumerate(laws[:3], 1):
#             laws_text += f"\n--- {i}. {law['title']} ---\n"
#             if law.get("number"): laws_text += f"№: {law['number']}\n"
#             if law.get("text"): laws_text += f"{law['text'][:2000]}\n"

#     messages = [{"role": "system", "content": system}]
#     for h in (history or [])[-6:]:
#         r = h.get('role','')
#         c = h.get('content','')
#         if r == 'user' and c:
#             messages.append({"role":"user","content":str(c)[:400]})
#         elif r == 'assistant' and c:
#             messages.append({"role":"assistant","content":str(c)[:200]})

#     prompt = f"SAVOL: {question}{laws_text}\nFAQAT JSON qaytargin." if lang=='uz' else f"ВОПРОС: {question}{laws_text}\nТолько JSON."
#     messages.append({"role":"user","content":prompt})

#     comp = client.chat.completions.create(
#         model="llama-3.3-70b-versatile",
#         messages=messages, max_tokens=1200, temperature=0.3
#     )
#     return parse_ai_response(comp.choices[0].message.content.strip())

# # ── File extraction ───────────────────────────────────────────────────────────
# def extract_text(filepath, filename):
#     ext = filename.rsplit('.',1)[-1].lower()
#     text = ""
#     try:
#         if ext == 'pdf':
#             import fitz
#             doc = fitz.open(filepath)
#             for page in doc: text += page.get_text()
#             doc.close()
#         elif ext in ('docx','doc'):
#             from docx import Document
#             doc = Document(filepath)
#             text = '\n'.join(p.text for p in doc.paragraphs if p.text.strip())
#     except Exception as e:
#         logger.error(f"extract: {e}")
#     return text.strip()

# def chunk_text(text, chunk_size=2000):
#     words = text.split()
#     chunks = []
#     for i in range(0, min(len(words), chunk_size*4), chunk_size):
#         chunks.append(' '.join(words[i:i+chunk_size]))
#     return chunks

# # ── Routes ────────────────────────────────────────────────────────────────────
# @app.route("/")
# def index(): return send_from_directory(".", "index.html")

# @app.route("/<path:filename>")
# def static_files(filename): return send_from_directory(".", filename)

# @app.route("/api/ask", methods=["POST"])
# def ask():
#     data = request.get_json()
#     if not data or not data.get("question"):
#         return jsonify({"error": "Savol yo'q"}), 400
#     q = data["question"].strip()
#     lang = data.get("lang", "uz")
#     history = data.get("history", [])
#     is_doc = data.get("is_doc", False)

#     if len(q) < 2: return jsonify({"error": "Juda qisqa"}), 400
#     logger.info(f"Savol [{lang}]: {q[:80]}")

#     # Off-topic tekshiruv
#     if not is_legal_question(q, lang):
#         logger.info("Off-topic savol — yuridik emas")
#         resp = OFFTOPIC_RESPONSE_RU if lang == 'ru' else OFFTOPIC_RESPONSE_UZ
#         return jsonify({"found": False, "answer": resp, "sources": []})

#     if not is_doc:
#         record_question(q)

#     laws = [] if is_doc else search_laws(q)
#     logger.info(f"Laws: {len(laws)}")

#     try:
#         answer = ask_ai(q, laws, lang, history)
#     except Exception as e:
#         logger.error(f"AI: {e}")
#         return jsonify({"error": str(e)}), 503

#     sources = [{"title":l["title"][:70],"url":l["url"],"date":l.get("date","")} for l in laws[:3]]
#     return jsonify({"found": True, "answer": answer, "sources": sources})

# @app.route("/api/search", methods=["GET"])
# def search_route():
#     q = request.args.get("q","").strip()
#     if len(q) < 2: return jsonify({"results": []})
#     laws = search_laws(q, limit=8)
#     return jsonify({"results": [{"title":l["title"],"number":l.get("number"),"date":l.get("date"),"url":l["url"]} for l in laws]})

# @app.route("/api/upload", methods=["POST"])
# def upload():
#     if 'file' not in request.files:
#         return jsonify({"error": "Fayl topilmadi"}), 400
#     file = request.files['file']
#     lang = request.form.get('lang', 'uz')
#     if not file.filename: return jsonify({"error": "Fayl nomi yo'q"}), 400
#     ext = file.filename.rsplit('.',1)[-1].lower()
#     if ext not in ('pdf','docx','doc'): return jsonify({"error": "Faqat PDF, DOCX, DOC"}), 400

#     filepath = os.path.join(UPLOAD_FOLDER, f"{uuid.uuid4()}.{ext}")
#     file.save(filepath)

#     try:
#         text = extract_text(filepath, file.filename)
#         os.remove(filepath)

#         if not text.strip():
#             return jsonify({"error": "Fayldan matn o'qib bo'lmadi"}), 400

#         logger.info(f"Doc text length: {len(text)} chars")

#         # 1. Hujjat turini aniqla
#         doc_type = detect_doc_type(text, lang)
#         logger.info(f"Doc type: {doc_type}")

#         # 2. Hujjat turiga mos system prompt ol
#         lang_key = lang if lang in DOC_SYSTEMS else 'uz'
#         type_key = doc_type if doc_type in DOC_SYSTEMS[lang_key] else ('hujjat' if lang=='uz' else 'document')
#         system = DOC_SYSTEMS[lang_key][type_key]

#         # 3. Matnni bo'laklarga ajrat
#         chunks = chunk_text(text, chunk_size=2500)
#         logger.info(f"Chunks: {len(chunks)}")

#         # 4. Birinchi bo'lakni tahlil qil
#         first_prompt = f"Hujjat matni:\n\n{chunks[0]}" if lang=='uz' else f"Текст документа:\n\n{chunks[0]}"
#         answer = ask_ai(first_prompt, [], lang, system_override=system)

#         # 5. Qolgan bo'laklar uchun follow-up savollar
#         follow_ups = []
#         for i, chunk in enumerate(chunks[1:], 2):
#             if lang == 'uz':
#                 follow_ups.append(f"Hujjatning {i}-qismi:\n\n{chunk}")
#             else:
#                 follow_ups.append(f"Часть {i} документа:\n\n{chunk}")

#         return jsonify({
#             "found": True,
#             "answer": answer,
#             "sources": [],
#             "question": f"[{doc_type.upper()}] {file.filename}",
#             "doc_parts": len(chunks),
#             "doc_type": doc_type,
#             "follow_up_questions": follow_ups,
#             "follow_up_system": system
#         })

#     except Exception as e:
#         logger.error(f"Upload: {e}")
#         if os.path.exists(filepath): os.remove(filepath)
#         return jsonify({"error": str(e)}), 500

# @app.route("/api/feedback", methods=["POST"])
# def feedback():
#     data = request.get_json()
#     if not data: return jsonify({"ok": False}), 400
#     fb = load_json(FEEDBACK_FILE, [])
#     fb = (fb + [{"msgId":data.get("msgId"),"val":data.get("val"),"lang":data.get("lang"),"ts":datetime.now().isoformat()}])[-1000:]
#     save_json(FEEDBACK_FILE, fb)
#     return jsonify({"ok": True})

# @app.route("/api/stats", methods=["GET"])
# def stats():
#     total = 0
#     try:
#         conn = get_db()
#         total = conn.execute("SELECT COUNT(*) FROM acts WHERE lang_id=? AND status='Y'",(LANG_ID,)).fetchone()[0]
#         conn.close()
#     except: pass
#     return jsonify({"total_laws": total, "lang": "O'zbek (lotin)", "source": "lex.uz", "top_questions": get_top_questions(12)})

# @app.route("/api/health", methods=["GET"])
# def health(): return jsonify({"status":"ok","ai":"Groq Llama 3.3 70B"})

# if __name__ == "__main__":
#     port = int(os.getenv("PORT", 5000))
#     logger.info(f"🚀 HuquqBot → :{port}")
#     app.run(host="0.0.0.0", port=port, debug=False)

"""
search_api.py — HuquqBot v2.4
AI off-topic filter + RU search + source relevance filter
"""
import os,re,json,uuid,logging,sqlite3
from datetime import datetime
from flask import Flask,request,jsonify,send_from_directory
from flask_cors import CORS
from groq import Groq
from dotenv import load_dotenv
import gdown

load_dotenv()
app=Flask(__name__,static_folder=".",static_url_path="")
CORS(app)
logging.basicConfig(level=logging.INFO,format="%(asctime)s %(levelname)s %(message)s")
logger=logging.getLogger(__name__)

DB_PATH=os.getenv("DB_PATH","/app/data/ldb.db")
GROQ_KEY=os.getenv("GROQ_API_KEY","")
DATA_DIR=os.getenv("DATA_DIR","/app/data")
GDRIVE_FILE_ID="1RpAWH8GxImR2L8DVX9sL_Z_dM5qbLYPX"
LANG_ID=4
MAX_RESULTS=5
MAX_TEXT_LEN=3000
UPLOAD_FOLDER="/tmp/uploads"

os.makedirs(UPLOAD_FOLDER,exist_ok=True)
os.makedirs(DATA_DIR,exist_ok=True)
FEEDBACK_FILE=os.path.join(DATA_DIR,"feedback.json")
STATS_FILE=os.path.join(DATA_DIR,"stats.json")

def download_db():
    try:
        if not os.path.exists(DB_PATH) or os.path.getsize(DB_PATH)<1_000_000:
            os.makedirs(os.path.dirname(DB_PATH),exist_ok=True)
            logger.info("⬇️ ldb.db yuklanmoqda...")
            gdown.download(f"https://drive.google.com/uc?id={GDRIVE_FILE_ID}",DB_PATH,quiet=False)
            logger.info(f"✅ {os.path.getsize(DB_PATH)//1024//1024}MB")
        else:
            logger.info(f"✅ ldb.db: {os.path.getsize(DB_PATH)//1024//1024}MB")
    except Exception as e:
        logger.error(f"❌ DB: {e}")

download_db()
client=Groq(api_key=GROQ_KEY)

# ── Helpers ───────────────────────────────────────────────────────────────────
def load_json(p,d):
    try:
        if os.path.exists(p):
            with open(p,'r',encoding='utf-8') as f: return json.load(f)
    except: pass
    return d

def save_json(p,data):
    try:
        with open(p,'w',encoding='utf-8') as f: json.dump(data,f,ensure_ascii=False,indent=2)
    except Exception as e: logger.error(f"save_json: {e}")

def record_question(q,lang='uz'):
    stats=load_json(STATS_FILE,{"counts_uz":{},"counts_ru":{},"questions":[]})
    key=f"counts_{lang}"
    if key not in stats: stats[key]={}
    stats[key][q]=stats[key].get(q,0)+1
    stats["questions"]=(stats["questions"]+[{"q":q,"lang":lang,"ts":datetime.now().isoformat()}])[-500:]
    save_json(STATS_FILE,stats)

def get_top_questions(n=12,lang='uz'):
    stats=load_json(STATS_FILE,{"counts_uz":{},"counts_ru":{}})
    counts=stats.get(f"counts_{lang}",{})
    top=sorted(counts.items(),key=lambda x:x[1],reverse=True)[:n]
    return [q for q,_ in top]

# ── DB ────────────────────────────────────────────────────────────────────────
def get_db():
    conn=sqlite3.connect(DB_PATH,check_same_thread=False)
    conn.row_factory=sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA cache_size=10000")
    conn.execute("PRAGMA temp_store=MEMORY")
    return conn

def clean_html(text):
    if not text: return ""
    text=re.sub(r'<br\s*/?>', '\n',text,flags=re.IGNORECASE)
    text=re.sub(r'<[^>]+>',' ',text)
    for e,r in [('&nbsp;',' '),('&amp;','&'),('&lt;','<'),('&gt;','>')]:
        text=text.replace(e,r)
    return re.sub(r'\s{2,}',' ',text).strip()

# Rus → O'zbek tarjima lug'ati (yuridik atamalar)
RU_TO_UZ={
    'труд':'mehnat','трудов':'mehnat','работа':'ish','работник':'xodim','работодател':'ish beruvchi',
    'зарплат':'ish haqi','отпуск':'ta\'til','увольнен':'bo\'shatish','найм':'ishga olish',
    'налог':'soliq','ндс':'qqs','доход':'daromad','прибыл':'foyda','акциз':'aksiz',
    'имуществ':'mulk','недвижим':'ko\'chmas mulk','земл':'yer','квартир':'uy-joy',
    'ипотек':'ipoteka','аренд':'ijara','купл':'sotib olish','продаж':'sotish',
    'брак':'nikoh','развод':'ajrashish','алимент':'nafaqa','наследств':'meros',
    'семь':'oila','ребен':'bola','опек':'vasiylik','усыновл':'farzandlikka olish',
    'пенси':'pensiya','инвалид':'nogironlik','страхован':'sug\'urta','льгот':'imtiyoz',
    'транспорт':'transport','автомобил':'avtomobil','водител':'haydovchi','гаи':'yol polisi',
    'лицензи':'litsenziya','регистрац':'ro\'yxatdan','предприним':'tadbirkorlik',
    'ооо':'mas\'uliyati cheklangan','ип':'yakka tartibdagi tadbirkor','юрлиц':'yuridik shaxs',
    'договор':'shartnoma','соглашен':'kelishuv','контракт':'shartnoma',
    'суд':'sud','штраф':'jarima','кредит':'kredit','банк':'bank','долг':'qarz',
    'граждан':'fuqaro','паспорт':'pasport','гражданств':'fuqarolik',
    'жилищ':'uy-joy','медицин':'tibbiy','образован':'ta\'lim','торговл':'savdo',
    'таможн':'bojxona','патент':'patent','уголовн':'jinoyat','административн':'ma\'muriy',
    'арест':'hibsga olish','прокурор':'prokuror','нотариус':'notarius',
    'строительств':'qurilish','разрешен':'ruxsat','лицензир':'litsenziyalash',
    'акционер':'aksiyador','дивиденд':'dividend','банкрот':'bankrot',
}

def search_laws(query,limit=MAX_RESULTS):
    stop_uz={'uchun','nima','qanday','necha','kerak','olsam','qilsa','men','sen',
             'biz','siz','bu','shu','va','yoki','ham','da','ga','dan','ni','ning',
             'mumkinmi','boladi','mumkin','bo\'ladi','agar','lekin','chunki'}
    stop_ru={'для','что','как','сколько','если','нужно','можно','нельзя','надо',
             'я','ты','он','мы','вы','они','это','или','и','но','в','на',
             'с','по','за','при','от','до','из','к','ли','мне','вам','нам',
             'хочу','хочет','скажи','расскажи','объясни','помоги'}

    raw=re.split(r'\s+',query.strip().lower())
    is_ru=len(re.findall(r'[а-яё]',query))>len(re.findall(r'[a-z]',query))
    stop=stop_ru if is_ru else stop_uz
    kw=[w for w in raw if len(w)>3 and w not in stop] or [w for w in raw if len(w)>2]
    if not kw: return []

    # Rus so'zlarni o'zbek ekvivalentlariga tarjima
    if is_ru:
        uz_kw=[]
        for w in kw:
            found=False
            for ru,uz in RU_TO_UZ.items():
                if ru in w:
                    uz_kw.append(uz)
                    found=True
                    break
            if not found: uz_kw.append(w)
        search_kw=uz_kw
        logger.info(f"RU→UZ: {list(zip(kw,search_kw))}")
    else:
        search_kw=kw

    logger.info(f"Search KW: {search_kw}")

    try: conn=get_db()
    except Exception as e:
        logger.warning(f"DB: {e}"); return []

    results={}
    def add(row,score):
        lid=row["lact_id"]
        if lid not in results:
            results[lid]={"lact_id":lid,"title":row["title"] or "","date":row["acceptance_date"] or "",
                "number":row["lact_number"] or "","text":clean_html(row["text"] or "")[:MAX_TEXT_LEN],
                "url":f"https://lex.uz/uz/docs/{lid}","score":score}
        else:
            results[lid]["score"]+=score

    try:
        full=' '.join(search_kw[:3])
        rows=conn.execute("""SELECT a.lact_id,a.title,a.acceptance_date,a.lact_number,c.text
            FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
            WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ?
            ORDER BY a.id DESC LIMIT ?""",(LANG_ID,f"%{full}%",limit*2)).fetchall()
        for r in rows: add(r,200)
    except Exception as e: logger.error(f"1: {e}")

    for w in search_kw:
        try:
            rows=conn.execute("""SELECT a.lact_id,a.title,a.acceptance_date,a.lact_number,c.text
                FROM acts a LEFT JOIN act_contents c ON a.lact_id=c.lact_id
                WHERE a.lang_id=? AND a.status='Y' AND LOWER(a.title) LIKE ?
                ORDER BY a.id DESC LIMIT ?""",(LANG_ID,f"%{w}%",limit*3)).fetchall()
            for r in rows: add(r,40*len(w))
        except: pass

    if len(results)<limit:
        for w in search_kw[:2]:
            try:
                rows=conn.execute("""SELECT a.lact_id,a.title,a.acceptance_date,a.lact_number,c.text
                    FROM acts a INNER JOIN act_contents c ON a.lact_id=c.lact_id
                    WHERE a.lang_id=? AND a.status='Y' AND LOWER(c.text) LIKE ?
                    ORDER BY a.id DESC LIMIT ?""",(LANG_ID,f"%{w}%",limit*2)).fetchall()
                for r in rows: add(r,8*len(w))
            except: pass

    conn.close()
    top=sorted(results.values(),key=lambda x:x["score"],reverse=True)[:limit]
    logger.info(f"Top: {[r['title'][:30] for r in top[:3]]}")
    return top

# ── Source relevance filter ───────────────────────────────────────────────────
def filter_sources(sources,answer,query):
    """Javob va so'rov mazmuniga mos bo'lmagan manbalarni olib tashlash"""
    if not sources or not answer: return sources

    # Javobdan kalit so'zlar
    a_text=f"{answer.get('category','')} {answer.get('legalBasis','')} {answer.get('simpleAnswer','')}".lower()
    q_text=query.lower()
    combined=f"{a_text} {q_text}"
    a_words={w for w in re.split(r'\s+',combined) if len(w)>3}

    filtered=[]
    for s in sources:
        title_words=set(re.split(r'\s+',s.get('title','').lower()))
        overlap=len(a_words&title_words)
        if overlap>=1:
            filtered.append(s)

    return filtered if filtered else sources[:1]

# ── AI off-topic check ────────────────────────────────────────────────────────
def is_legal_question(question,lang):
    """AI yordamida savolning yuridik ekanligini tekshir"""
    try:
        if lang=='ru':
            prompt=f'Этот вопрос о праве, законах, налогах, работе, недвижимости, семье, суде, документах Узбекистана? Вопрос: "{question[:200]}"\nОтветь ТОЛЬКО: YES или NO'
        else:
            prompt=f'Bu savol O\'zbekiston huquqi, qonunlari, soliqlari, mehnati, mulki, oilasi, sudi, hujjatlariga tegishlimi? Savol: "{question[:200]}"\nFAQAT javob ber: YES yoki NO'

        comp=client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role":"user","content":prompt}],
            max_tokens=5,temperature=0
        )
        ans=comp.choices[0].message.content.strip().upper()
        logger.info(f"Legal check: {ans}")
        return "YES" in ans
    except Exception as e:
        logger.warning(f"Legal check xato: {e}")
        return True  # Xato bo'lsa javob ber

# ── AI ────────────────────────────────────────────────────────────────────────
SYS_UZ="""Sen O'zbekiston Respublikasi qonunchiligini chuqur biladigan yuridik yordamchisan.
Suhbat davomida mavzudan chiqma. Aniq, sodda, amaliy javob ber.
FAQAT JSON:
{"category":"Kategoriya","icon":"emoji","simpleAnswer":"2-4 gap","steps":["qadam"],"legalBasis":"qonun va modda","warning":"yoki null","confidence":"high|medium|low"}"""

SYS_RU="""Ты опытный юридический помощник по законодательству Узбекистана.
Не выходи за рамки темы. Отвечай чётко, просто, практично.
Только JSON:
{"category":"Категория","icon":"emoji","simpleAnswer":"2-4 предложения","steps":["шаг"],"legalBasis":"закон и статья","warning":"или null","confidence":"high|medium|low"}"""

DOC_SYSTEMS={
    'uz':{
        'shartnoma':"""Sen yuridik ekspertsan. Shartnomani tahlil qil:
1. Tomonlar va ularning majburiyatlari
2. Asosiy shartlar va muddatlar  
3. Xavfli yoki noqulay bandlar
4. Qonunchilikka muvofiqligi
5. Tavsiyalar
FAQAT JSON: {"category":"Shartnoma tahlili","icon":"📄","simpleAnswer":"xulosa","steps":["qadam"],"legalBasis":"qonun","warning":"xavfli bandlar yoki null","confidence":"high|medium|low"}""",
        'ariza':"""Sen yuridik ekspertsan. Arizani tahlil qil:
1. Maqsad va asoslar
2. To'g'ri rasmiylashtirilganmi
3. Kamchiliklar
4. Keyingi qadamlar
FAQAT JSON: {"category":"Ariza tahlili","icon":"📝","simpleAnswer":"xulosa","steps":["qadam"],"legalBasis":"qonun","warning":"kamchiliklar yoki null","confidence":"high|medium|low"}""",
        'qaror':"""Sen yuridik ekspertsan. Qarorni tahlil qil:
1. Qabul qiluvchi organ va vakolati
2. Huquqiy asoslar
3. Amalga oshirish tartibi
4. Muammolar
FAQAT JSON: {"category":"Qaror tahlili","icon":"📋","simpleAnswer":"xulosa","steps":["qadam"],"legalBasis":"qonun","warning":"muammolar yoki null","confidence":"high|medium|low"}""",
        'hujjat':"""Sen yuridik ekspertsan. Hujjatni tahlil qil:
1. Turi va maqsadi
2. Asosiy mazmuni
3. Yuridik ahamiyati
4. E'tibor berilishi kerak joylar
FAQAT JSON: {"category":"Hujjat tahlili","icon":"📄","simpleAnswer":"xulosa","steps":["qadam"],"legalBasis":"qonun","warning":"muammolar yoki null","confidence":"high|medium|low"}""",
    },
    'ru':{
        'contract':"""Ты юридический эксперт. Проанализируй договор:
1. Стороны и обязательства
2. Основные условия и сроки
3. Рискованные пункты
4. Соответствие законодательству
5. Рекомендации
Только JSON: {"category":"Анализ договора","icon":"📄","simpleAnswer":"вывод","steps":["шаг"],"legalBasis":"закон","warning":"риски или null","confidence":"high|medium|low"}""",
        'application':"""Ты юридический эксперт. Проанализируй заявление:
1. Цель и основания
2. Правильность оформления
3. Недостатки
4. Дальнейшие шаги
Только JSON: {"category":"Анализ заявления","icon":"📝","simpleAnswer":"вывод","steps":["шаг"],"legalBasis":"закон","warning":"недостатки или null","confidence":"high|medium|low"}""",
        'decision':"""Ты юридический эксперт. Проанализируй решение:
1. Орган и полномочия
2. Правовые основания
3. Порядок исполнения
Только JSON: {"category":"Анализ решения","icon":"📋","simpleAnswer":"вывод","steps":["шаг"],"legalBasis":"закон","warning":"проблемы или null","confidence":"high|medium|low"}""",
        'document':"""Ты юридический эксперт. Проанализируй документ:
1. Тип и назначение
2. Основное содержание
3. Юридическое значение
4. На что обратить внимание
Только JSON: {"category":"Анализ документа","icon":"📄","simpleAnswer":"вывод","steps":["шаг"],"legalBasis":"закон","warning":"проблемы или null","confidence":"high|medium|low"}""",
    }
}

def detect_lang(text):
    return 'ru' if len(re.findall(r'[а-яё]',text.lower()))>len(re.findall(r'[a-z]',text.lower())) else 'uz'

def detect_doc_type(text,lang):
    tl=text.lower()
    if lang=='uz':
        if any(w in tl for w in ['shartnoma','kelishuv','tomonlar','majburiyat']): return 'shartnoma'
        if any(w in tl for w in ['ariza','iltimos','murojaat']): return 'ariza'
        if any(w in tl for w in ['qaror','buyruq','farmoyish']): return 'qaror'
        return 'hujjat'
    else:
        if any(w in tl for w in ['договор','соглашение','стороны','обязательств']): return 'contract'
        if any(w in tl for w in ['заявление','прошу','обращение']): return 'application'
        if any(w in tl for w in ['решение','приказ','постановление']): return 'decision'
        return 'document'

def parse_ai(raw):
    clean=re.sub(r'```json\s*','',raw)
    clean=re.sub(r'```\s*','',clean).strip()
    m=re.search(r'\{.*\}',clean,re.DOTALL)
    if m:
        try: return json.loads(m.group())
        except: pass
    try: return json.loads(clean)
    except:
        return {"category":"Yuridik masala","icon":"⚖️","simpleAnswer":raw[:500],"steps":[],"legalBasis":"","warning":None,"confidence":"low"}

def ask_ai(question,laws,lang='uz',history=None,system_override=None):
    actual=detect_lang(question)
    if actual!=lang: lang=actual
    system=system_override or(SYS_RU if lang=='ru' else SYS_UZ)

    laws_text=""
    if laws:
        laws_text="\n\nRASMIY BAZADAN:\n" if lang=='uz' else "\n\nИЗ БАЗЫ:\n"
        for i,law in enumerate(laws[:3],1):
            laws_text+=f"\n--- {i}. {law['title']} ---\n"
            if law.get("number"): laws_text+=f"№: {law['number']}\n"
            if law.get("text"): laws_text+=f"{law['text'][:2000]}\n"

    msgs=[{"role":"system","content":system}]
    for h in (history or [])[-6:]:
        r=h.get('role','');c=h.get('content','')
        if r=='user' and c: msgs.append({"role":"user","content":str(c)[:400]})
        elif r=='assistant' and c: msgs.append({"role":"assistant","content":str(c)[:200]})

    prompt=f"SAVOL: {question}{laws_text}\nFAQAT JSON." if lang=='uz' else f"ВОПРОС: {question}{laws_text}\nТолько JSON."
    msgs.append({"role":"user","content":prompt})

    comp=client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=msgs,max_tokens=1200,temperature=0.3
    )
    return parse_ai(comp.choices[0].message.content.strip())

# ── File extraction ───────────────────────────────────────────────────────────
def extract_text(filepath,filename):
    ext=filename.rsplit('.',1)[-1].lower()
    text=""
    try:
        if ext=='pdf':
            import fitz
            doc=fitz.open(filepath)
            for page in doc: text+=page.get_text()
            doc.close()
        elif ext in('docx','doc'):
            from docx import Document
            doc=Document(filepath)
            text='\n'.join(p.text for p in doc.paragraphs if p.text.strip())
    except Exception as e: logger.error(f"extract: {e}")
    return text.strip()

def chunk_text(text,size=2500):
    words=text.split()
    return [' '.join(words[i:i+size]) for i in range(0,min(len(words),size*3),size)]

# ── Routes ────────────────────────────────────────────────────────────────────
@app.route("/")
def index(): return send_from_directory(".","index.html")

@app.route("/<path:filename>")
def static_files(filename): return send_from_directory(".",filename)

@app.route("/api/ask",methods=["POST"])
def ask():
    data=request.get_json()
    if not data or not data.get("question"):
        return jsonify({"error":"Savol yo'q"}),400
    q=data["question"].strip()
    lang=data.get("lang","uz")
    history=data.get("history",[])
    is_doc=data.get("is_doc",False)
    if len(q)<2: return jsonify({"error":"Juda qisqa"}),400

    logger.info(f"Savol [{lang}]: {q[:80]}")

    # Off-topic tekshiruv (faqat oddiy savollarda)
    if not is_doc and not is_legal_question(q,lang):
        logger.info("Off-topic")
        if lang=='ru':
            resp={"category":"Не юридический вопрос","icon":"⚖️",
                "simpleAnswer":"Я специализируюсь на юридических вопросах по законодательству Узбекистана.\n\nПримеры:\n• Сколько дней длится трудовой отпуск?\n• Что нужно для открытия ИП?\n• Как расторгнуть договор аренды?",
                "steps":["Задайте юридический вопрос","ИИ найдёт закон в базе","Ответит со ссылками на lex.uz"],
                "legalBasis":"","warning":None,"confidence":"high"}
        else:
            resp={"category":"Yuridik bo'lmagan savol","icon":"⚖️",
                "simpleAnswer":"Men faqat O'zbekiston qonunchiligi bo'yicha yuridik savollarga javob bera olaman.\n\nMisol savollar:\n• Mehnat ta'tili necha kun?\n• YaTT ochish uchun nima kerak?\n• Shartnomani qanday bekor qilaman?",
                "steps":["Yuridik savolingizni yozing","AI lex.uz dan qonun topadi","Rasmiy manbalar bilan javob beradi"],
                "legalBasis":"","warning":None,"confidence":"high"}
        return jsonify({"found":False,"answer":resp,"sources":[]})

    if not is_doc: record_question(q,lang)

    laws=[] if is_doc else search_laws(q)
    logger.info(f"Laws: {len(laws)}")

    try: answer=ask_ai(q,laws,lang,history)
    except Exception as e:
        logger.error(f"AI: {e}")
        return jsonify({"error":str(e)}),503

    # Source relevance filter
    raw_sources=[{"title":l["title"][:70],"url":l["url"],"date":l.get("date","")} for l in laws[:3]]
    sources=filter_sources(raw_sources,answer,q)

    return jsonify({"found":True,"answer":answer,"sources":sources})

@app.route("/api/search",methods=["GET"])
def search_route():
    q=request.args.get("q","").strip()
    if len(q)<2: return jsonify({"results":[]})
    laws=search_laws(q,limit=8)
    return jsonify({"results":[{"title":l["title"],"number":l.get("number"),"date":l.get("date"),"url":l["url"]} for l in laws]})

@app.route("/api/upload",methods=["POST"])
def upload():
    if 'file' not in request.files: return jsonify({"error":"Fayl topilmadi"}),400
    file=request.files['file']
    lang=request.form.get('lang','uz')
    if not file.filename: return jsonify({"error":"Fayl nomi yo'q"}),400
    ext=file.filename.rsplit('.',1)[-1].lower()
    if ext not in('pdf','docx','doc'): return jsonify({"error":"Faqat PDF, DOCX, DOC"}),400

    filepath=os.path.join(UPLOAD_FOLDER,f"{uuid.uuid4()}.{ext}")
    file.save(filepath)
    try:
        text=extract_text(filepath,file.filename)
        os.remove(filepath)
        if not text.strip(): return jsonify({"error":"Matn o'qib bo'lmadi"}),400

        logger.info(f"Doc: {len(text)} chars")
        doc_type=detect_doc_type(text,lang)
        logger.info(f"Doc type: {doc_type}")

        lang_key=lang if lang in DOC_SYSTEMS else 'uz'
        default_type='hujjat' if lang=='uz' else 'document'
        type_key=doc_type if doc_type in DOC_SYSTEMS[lang_key] else default_type
        system=DOC_SYSTEMS[lang_key][type_key]

        chunks=chunk_text(text,2500)
        first=f"Hujjat matni:\n\n{chunks[0]}" if lang=='uz' else f"Текст документа:\n\n{chunks[0]}"
        answer=ask_ai(first,[],lang,system_override=system)

        follow_ups=[]
        for i,chunk in enumerate(chunks[1:],2):
            fq=f"Hujjatning {i}-qismi:\n\n{chunk}" if lang=='uz' else f"Часть {i} документа:\n\n{chunk}"
            follow_ups.append(fq)

        return jsonify({
            "found":True,"answer":answer,"sources":[],
            "question":f"[{doc_type.upper()}] {file.filename}",
            "doc_parts":len(chunks),"doc_type":doc_type,
            "follow_up_questions":follow_ups,"follow_up_system":system
        })
    except Exception as e:
        logger.error(f"Upload: {e}")
        if os.path.exists(filepath): os.remove(filepath)
        return jsonify({"error":str(e)}),500

@app.route("/api/feedback",methods=["POST"])
def feedback():
    data=request.get_json()
    if not data: return jsonify({"ok":False}),400
    fb=load_json(FEEDBACK_FILE,[])
    fb=(fb+[{"msgId":data.get("msgId"),"val":data.get("val"),"lang":data.get("lang"),"ts":datetime.now().isoformat()}])[-1000:]
    save_json(FEEDBACK_FILE,fb)
    return jsonify({"ok":True})

@app.route("/api/stats",methods=["GET"])
def stats():
    lang=request.args.get("lang","uz")
    total=0
    try:
        conn=get_db()
        total=conn.execute("SELECT COUNT(*) FROM acts WHERE lang_id=? AND status='Y'",(LANG_ID,)).fetchone()[0]
        conn.close()
    except: pass
    return jsonify({"total_laws":total,"lang":"O'zbek (lotin)","source":"lex.uz","top_questions":get_top_questions(12,lang)})

@app.route("/api/health",methods=["GET"])
def health(): return jsonify({"status":"ok","ai":"Groq Llama 3.3 70B"})

if __name__=="__main__":
    port=int(os.getenv("PORT",5000))
    logger.info(f"🚀 HuquqBot → :{port}")
    app.run(host="0.0.0.0",port=port,debug=False)