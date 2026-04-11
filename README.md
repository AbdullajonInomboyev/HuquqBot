# HuquqBot — Yuridik AI Yordamchi

O'zbekiston fuqarolari uchun AI yuridik yordamchi.

## Xususiyatlar
- 🇺🇿🇷🇺 O'zbek va Rus tili
- 🤖 Groq Llama 3.3 70B AI
- 📚 50,000+ lex.uz qonun hujjati
- 📄 PDF/Word hujjat tahlili
- 💬 Chat tarixi
- 🔍 Real-time qidiruv

## Deploy (Railway)

### Variables:
```
BOT_TOKEN=...
GROQ_API_KEY=...
WEBAPP_URL=https://huquqbot-production.up.railway.app
DB_PATH=/app/data/ldb.db
```

### Volume:
Mount path: `/app/data`

## Lokal ishga tushirish:
```bash
pip install -r requirements.txt
cp .env.example .env
# .env ni to'ldiring
python main.py
```
