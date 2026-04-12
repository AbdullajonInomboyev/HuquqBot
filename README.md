# ⚖️ Yuridik AI — O'zbekiston Yuridik AI Yordamchisi

<div align="center">

**O'zbekiston qonunchiligi bo'yicha sun'iy intellekt yordamchi**

[![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-3.0-black?logo=flask)](https://flask.palletsprojects.com)
[![React](https://img.shields.io/badge/React-18-61dafb?logo=react)](https://reactjs.org)
[![Telegram](https://img.shields.io/badge/Telegram-Mini%20App-2CA5E0?logo=telegram)](https://core.telegram.org/bots/webapps)
[![Railway](https://img.shields.io/badge/Deploy-Railway-0B0D0E?logo=railway)](https://railway.app)

[🤖 Botni ochish](https://t.me/yuridikAIbot) • [🌐 Demo](https://huquqbot-production.up.railway.app)

</div>

---

## 📋 Loyiha haqida

**Yuridik AI** — O'zbekiston fuqarolari uchun Telegram Mini App ko'rinishidagi sun'iy intellekt yordamchi. 50,000+ rasmiy qonun hujjati asosida yuridik masalalar bo'yicha savol berish, hujjat tahlil qildirish va rasmiy manbalarga havola olish imkoni mavjud.

### 🎯 Muammo va yechim

O'zbekistonda 36 million aholining ko'pchiligida yuridik savodxonlik past. Qonunlarni tushunish qiyin, yuristga murojaat esa qimmat. **Yuridik AI** bu muammoni hal qiladi — 24/7 bepul, tez va ishonchli yuridik ma'lumot.

---

## ✨ Imkoniyatlar

| Funksiya | Tavsif |
|----------|--------|
| 🔍 **Qonun qidirish** | 50,000+ lex.uz hujjatidan real-time qidiruv |
| 🤖 **AI tahlil** | Sun'iy intellekt yordamida savollarga aniq javob |
| 📄 **Hujjat tahlili** | PDF, DOCX, DOC fayllarni avtomatik tahlil |
| 🇺🇿🇷🇺 **Ikki til** | O'zbek va Rus tillarida to'liq ishlaydi |
| 📚 **Chat tarixi** | Suhbatlar saqlanadi va qayta ko'rish mumkin |
| 👍 **Feedback** | Javob sifatini baholash imkoni |

---

## 🏗️ Arxitektura

```
📱 Telegram Bot (@yuridikAIbot)
    │
    └── 🌐 Telegram Mini App (Railway)
            │
            ├── ⚛️  React Frontend (index.html)
            │       ├── Splash Screen
            │       ├── Til tanlash (UZ / RU)
            │       ├── Home — qidiruv, tezkor savollar, chatlar
            │       └── Chat — xabarlar, feedback, fayl yuklash
            │
            └── 🐍 Flask Backend (search_api.py)
                    ├── /api/ask      — AI savol-javob
                    ├── /api/search   — Qonun qidirish
                    ├── /api/upload   — Hujjat tahlili
                    ├── /api/stats    — Statistika & top savollar
                    ├── /api/feedback — Foydalanuvchi baholash
                    └── /api/health   — Tizim holati
                            │
                            ├── 🗄️  SQLite (ldb.db) — 50K+ qonun
                            └── 🤖  Sun'iy intellekt API
```

---

## 🛠️ Texnologiyalar

**Backend:** Python 3.11, Flask 3.0, SQLite, Sun'iy intellekt API, python-telegram-bot 20.x, PyMuPDF, python-docx

**Frontend:** React 18, Tailwind CSS, Inter font, Telegram WebApp JS API

**Infratuzilma:** Railway, Google Drive, GitHub

---

## 🚀 O'rnatish

### 1. Loyihani klonlash

```bash
git clone https://github.com/AbdullajonInomboyev/HuquqBot.git
cd HuquqBot
pip install -r requirements.txt
```

### 2. Muhit o'zgaruvchilari

`.env` fayl yarating:

```env
BOT_TOKEN=your_telegram_bot_token
AI_API_KEY=your_ai_api_key
WEBAPP_URL=https://your-domain.up.railway.app
DB_PATH=/app/data/ldb.db
DATA_DIR=/app/data
GDRIVE_FILE_ID=your_google_drive_file_id
```

### 3. Ishga tushirish

```bash
python main.py
```

---

## 📁 Fayl tuzilmasi

```
HuquqBot/
├── main.py              # Flask + Telegram Bot
├── search_api.py        # Flask API
├── index.html           # React frontend
├── requirements.txt     # Python paketlar
├── runtime.txt          # Python 3.11
├── Procfile             # Railway
├── .env.example         # Muhit o'zgaruvchilari namunasi
├── img/
│   └── logo.png
└── README.md
```

---

## 🌐 API Endpointlar

```http
POST /api/ask       — Savol berish
GET  /api/search    — Qonun qidirish
POST /api/upload    — Hujjat tahlili
GET  /api/stats     — Statistika
POST /api/feedback  — Baholash
GET  /api/health    — Tizim holati
```

---

## 🔒 Xavfsizlik

- ✅ Static file allowlist
- ✅ Thread-safe SQLite
- ✅ Atomic JSON write
- ✅ SQL wildcard escape
- ✅ Input validation
- ✅ XSS himoyasi
- ✅ File upload size limit (50MB)
- ✅ API timeout
- ✅ CORS cheklovi
- ✅ Off-topic filter

---

## 📊 Hackathon baholash

| Mezon | % | Tavsif |
|-------|---|--------|
| 🚀 Innovation | 25% | O'zbekistonda birinchi yuridik AI Telegram Mini App |
| ⚙️ Technical | 25% | RAG arxitektura, xavfsizlik, ikki tilli qidiruv |
| 🤖 AI Usage | 20% | Off-topic filter, hujjat turi tahlili |
| 🎨 UX/UI | 15% | Professional dizayn, navy+gold rang sxemasi |
| 💼 Business | 15% | 36M aholi, B2C va B2B kengaytirish imkoni |

---

## 👨‍💻 Muallif

**Turan International University jamoasi**

- GitHub: [@AbdullajonInomboyev](https://github.com/AbdullajonInomboyev)
- Telegram Bot: [@yuridikAIbot](https://t.me/yuridikAIbot)

---

<div align="center">

**⚖️ Yuridik AI** — O'zbekiston fuqarolari uchun, sun'iy intellekt bilan

*Bu ma'lumotlar tanishish uchun. Muhim masalalar uchun yuristga murojaat qiling.*

</div>