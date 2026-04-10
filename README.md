# HuquqBot — Telegram Mini App

O'zbekiston fuqarolari uchun yuridik yordamchi. Oddiy so'zlar bilan savol berasiz, rasmiy manbalardan (lex.uz, my.gov.uz, soliq.uz) sodda javob olasiz.

---

## Fayllar tuzilmasi

```
huquqiy-bot/
├── index.html          ← Asosiy sahifa
├── css/
│   └── style.css       ← Barcha dizayn
├── js/
│   ├── data.js         ← Rasmiy ma'lumotlar bazasi
│   └── app.js          ← Asosiy mantiq
└── README.md
```

---

## Telegram Bot o'rnatish bosqichlari

### 1. Botni yarating
1. Telegramda [@BotFather](https://t.me/BotFather) ga yozing
2. `/newbot` buyrug'ini yuboring
3. Bot nomini va username ni kiriting
4. API tokenni saqlang

### 2. Mini App (Web App) ulang
BotFather da:
```
/newapp
→ Botingizni tanlang
→ App nomini kiriting: HuquqBot
→ Veb sayt URL sini kiriting (quyida ko'ring)
```

### 3. Saytni joylang (Hosting)

**Bepul variant — GitHub Pages:**
```bash
# GitHub da yangi repo yarating: huquqbot
git init
git add .
git commit -m "initial"
git remote add origin https://github.com/SIZNING_USERNAME/huquqbot.git
git push -u origin main

# Settings → Pages → main branch → / (root)
# URL: https://sizning_username.github.io/huquqbot
```

**Bepul variant — Netlify:**
1. netlify.com ga kiring
2. "Add new site → Deploy manually"
3. Bu papkani drag & drop qiling
4. URL avtomatik beriladi

**VPS variant (Nginx):**
```nginx
server {
    listen 443 ssl;
    server_name yourdomain.uz;
    root /var/www/huquqbot;
    index index.html;
    ssl_certificate /etc/letsencrypt/live/yourdomain.uz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.uz/privkey.pem;
}
```

### 4. Bot menyusiga tugma qo'shing

BotFather ga:
```
/setmenubutton
→ Botingizni tanlang
→ URL: https://sizning-sayt.com
→ Tugma matni: ⚖️ Yuridik yordam
```

---

## Ma'lumotlar bazasini kengaytirish

`js/data.js` faylida `LEGAL_DATABASE` massiviga yangi obyekt qo'shing:

```javascript
{
  keywords: ["kalit so'z 1", "kalit so'z 2"],
  category: "Bo'lim nomi",
  icon: "📄",
  query_formal: "rasmiy so'rov matni",
  sources: [
    { name: "lex.uz — Qonun nomi", article: "modda", url: "https://..." },
  ],
  answer: `Javob matni bu yerda...`,
  warn: "Ogohlantirish matni"
}
```

---

## Keyingi bosqichlar (roadmap)

- [ ] Real vaqtda lex.uz API integratsiyasi
- [ ] Claude AI bilan savol tahlili
- [ ] Ko'p tilli qo'llab-quvvatlash (ru, en)
- [ ] Foydalanuvchi savollar tarixi (backend)
- [ ] Mutaxassisga ulanish funksiyasi
- [ ] Push-bildirishnomalar

---

## Texnologiyalar

- Vanilla HTML/CSS/JS (framework yo'q — tez yuklanadi)
- Telegram Web App SDK
- Google Fonts (Playfair Display + IBM Plex Sans)
- LocalStorage (tarix saqlash)
