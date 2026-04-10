// ──────────────────────────────────────────────
// data.js — lex.uz dan avtomatik generatsiya qilingan
// Jami: 1144 ta qonun
// Sana: 2026-04-10
// ──────────────────────────────────────────────

const CATEGORIES = [
  {
    "id": "mehnat",
    "name": "Mehnat huquqi",
    "icon": "📋",
    "keywords": [
      "mehnat",
      "ish haqi",
      "ta'til",
      "xodim",
      "ishchi",
      "ish vaqti",
      "ishga olish",
      "bo'shatish",
      "kasaba",
      "intizom",
      "ish joyi"
    ],
    "search_terms": [
      "mehnat",
      "xodim",
      "ish haqi",
      "ta'til",
      "ishga olish"
    ]
  },
  {
    "id": "soliq",
    "name": "Soliq huquqi",
    "icon": "💰",
    "keywords": [
      "soliq",
      "QQS",
      "daromad solig'i",
      "aksiz",
      "bojxona",
      "soliqqa tortish",
      "soliq to'lovchi",
      "patent"
    ],
    "search_terms": [
      "soliq",
      "QQS",
      "daromad",
      "patent",
      "bojxona"
    ]
  },
  {
    "id": "tadbirkorlik",
    "name": "Tadbirkorlik",
    "icon": "🏢",
    "keywords": [
      "tadbirkorlik",
      "korxona",
      "ro'yxatdan o'tish",
      "litsenziya",
      "yakka tartibda",
      "mas'uliyati cheklangan",
      "aksiyadorlik"
    ],
    "search_terms": [
      "tadbirkorlik",
      "korxona",
      "litsenziya",
      "ro'yxatdan"
    ]
  },
  {
    "id": "mulk",
    "name": "Mulk va ko'chmas mulk",
    "icon": "🏠",
    "keywords": [
      "ko'chmas mulk",
      "uy-joy",
      "er",
      "yer",
      "mulk",
      "ijaraga",
      "sotib olish",
      "kadastr",
      "ipoteka"
    ],
    "search_terms": [
      "ko'chmas mulk",
      "uy-joy",
      "yer",
      "mulk",
      "ipoteka"
    ]
  },
  {
    "id": "oila",
    "name": "Oila huquqi",
    "icon": "👨‍👩‍👧",
    "keywords": [
      "nikoh",
      "ajrashish",
      "nafaqa",
      "vasiylik",
      "farzand",
      "meros",
      "oila",
      "turmush o'rtoq"
    ],
    "search_terms": [
      "nikoh",
      "ajrashish",
      "nafaqa",
      "meros",
      "vasiylik"
    ]
  },
  {
    "id": "transport",
    "name": "Transport",
    "icon": "🚗",
    "keywords": [
      "transport",
      "avtomobil",
      "haydovchi",
      "yo'l harakati",
      "guvohnoma",
      "texnik ko'rik",
      "sug'urta"
    ],
    "search_terms": [
      "transport",
      "avtomobil",
      "haydovchi",
      "yo'l harakati"
    ]
  },
  {
    "id": "ijtimoiy",
    "name": "Ijtimoiy ta'minot",
    "icon": "🤝",
    "keywords": [
      "pensiya",
      "nafaqa",
      "nogironlik",
      "ijtimoiy",
      "sug'urta",
      "tibbiy",
      "bolalar nafaqasi",
      "ishsizlik"
    ],
    "search_terms": [
      "pensiya",
      "nafaqa",
      "nogironlik",
      "ijtimoiy sug'urta"
    ]
  },
  {
    "id": "jinoyat",
    "name": "Jinoyat va ma'muriy",
    "icon": "⚖️",
    "keywords": [
      "jinoyat",
      "jazo",
      "jarima",
      "hibsga olish",
      "sud",
      "ma'muriy",
      "huquqbuzarlik",
      "prokuratura"
    ],
    "search_terms": [
      "jinoyat",
      "jazo",
      "jarima",
      "sud",
      "ma'muriy"
    ]
  }
];

const LAWS_BY_CATEGORY = {
  "mehnat": [
    {
      "id": 7643762,
      "title": "Xalq deputatlari Sirdaryo viloyati Kengashining 2025-yil 2-iyuldagi VII-16-120-9-0-K/25-sonli qaroriga o‘zgartirish kiritish haqida",
      "date": "23.07.2025",
      "number": "VII-17-131-9-0-K/25",
      "keywords": [
        "xalq",
        "deputatlari",
        "sirdaryo",
        "viloyati",
        "kengashining",
        "iyuldagi",
        "sonli",
        "qaroriga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7643762"
    },
    {
      "id": -7705655,
      "title": "Ichki ishlar organlari xodimlari va pensionerlari hamda ularning oila a’zolarini turar joy bilan ta’minlash bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida",
      "date": "28.08.2025",
      "number": "543",
      "keywords": [
        "ichki",
        "ishlar",
        "organlari",
        "xodimlari",
        "pensionerlari",
        "hamda",
        "ularning",
        "oila"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7705655"
    },
    {
      "id": -7709841,
      "title": "O‘zbekiston Respublikasi Qurolli Kuchlarida tinchlik va urush davrida tibbiy ko‘rikdan o‘tkazishni tashkil etish va amalga oshirish tartibi to‘g‘risidagi nizomga o‘zgartirishlar kiritish haqida",
      "date": "02.09.2025",
      "number": "3147-3",
      "keywords": [
        "zbekiston",
        "qurolli",
        "kuchlarida",
        "tinchlik",
        "urush",
        "davrida",
        "tibbiy",
        "rikdan"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7709841"
    },
    {
      "id": -7709858,
      "title": "Davlat yong‘in nazorati organlari faoliyatini tashkil etish va amalga oshirish tartibi to‘g‘risidagi yo‘riqnomaning 3-bandiga o‘zgartirish kiritish haqida",
      "date": "02.09.2025",
      "number": "3097-10",
      "keywords": [
        "davlat",
        "yong",
        "nazorati",
        "organlari",
        "faoliyatini",
        "tashkil",
        "etish",
        "amalga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7709858"
    },
    {
      "id": -7690289,
      "title": "“Ijro ishi bo‘yicha kafolat mablag‘larini kiritish instituti joriy etilishi munosabati bilan “Sud hujjatlari va boshqa organlar hujjatlarini ijro etish to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga qo‘shimcha va o‘zgartirishlar kiritish haqida”gi O‘zbekiston Respublikasi Qonuni to‘g‘risida",
      "date": "25.06.2025",
      "number": "SQ-141-V",
      "keywords": [
        "ijro",
        "ishi",
        "yicha",
        "kafolat",
        "mablag",
        "larini",
        "instituti",
        "joriy"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7690289"
    },
    {
      "id": -7683897,
      "title": "“O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga qo‘shimcha va o‘zgartirishlar kiritish haqida”gi O‘zbekiston Respublikasi Qonuni to‘g‘risida",
      "date": "01.07.2025",
      "number": "1034-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "muriy",
        "javobgarlik",
        "risidagi",
        "kodeksiga",
        "shimcha",
        "zgartirishlar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7683897"
    },
    {
      "id": -7683865,
      "title": "“O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga qo‘shimcha va o‘zgartirishlar kiritish haqida”gi QL-95-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida (“O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga o‘zgartirish va qo‘shimchalar kiritish haqida”)",
      "date": "01.07.2025",
      "number": "1033-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "muriy",
        "javobgarlik",
        "risidagi",
        "kodeksiga",
        "shimcha",
        "zgartirishlar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7683865"
    },
    {
      "id": -7683840,
      "title": "“O‘zbekiston Respublikasining ayrim qonun hujjatlariga valyuta hamda qimmatbaho metallar va qimmatbaho toshlar muomalasi bilan bog‘liq munosabatlarni takomillashtirishga qaratilgan o‘zgartirishlar va qo‘shimcha kiritish haqida”gi O‘zbekiston Respublikasi Qonuni to‘g‘risida",
      "date": "01.07.2025",
      "number": "1032-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "valyuta",
        "hamda",
        "qimmatbaho",
        "metallar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7683840"
    },
    {
      "id": -7683811,
      "title": "“O‘zbekiston Respublikasining ayrim qonun hujjatlariga valyuta hamda qimmatbaho metallar va qimmatbaho toshlar muomalasi bilan bog‘liq munosabatlarni takomillashtirishga qaratilgan o‘zgartirishlar va qo‘shimcha kiritish haqida”gi QL-94-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida (“O‘zbekiston Respublikasining ayrim qonun hujjatlariga valyuta hamda qimmatbaho metallar va qimmatbaho toshlar muomalasi bilan bog‘liq munosabatlarni takomillashtirishga qaratilgan qo‘shimchalar va o‘zgartirish kiritish haqida”)",
      "date": "01.07.2025",
      "number": "1031-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "valyuta",
        "hamda",
        "qimmatbaho",
        "metallar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7683811"
    },
    {
      "id": -7685185,
      "title": "“Noshirlik faoliyati to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga qo‘shimchalar va o‘zgartirish kiritish haqida”gi QL-101-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "07.07.2025",
      "number": "1046-V",
      "keywords": [
        "noshirlik",
        "faoliyati",
        "risida",
        "zbekiston",
        "qonuniga",
        "shimchalar",
        "zgartirish",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7685185"
    },
    {
      "id": -7685033,
      "title": "“Noshirlik faoliyati to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga qo‘shimchalar va o‘zgartirish kiritish haqida”gi QL-101-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida (“Noshirlik faoliyati to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga qo‘shimcha va o‘zgartirishlar kiritish haqida”)",
      "date": "07.07.2025",
      "number": "1045-V",
      "keywords": [
        "noshirlik",
        "faoliyati",
        "risida",
        "zbekiston",
        "qonuniga",
        "shimchalar",
        "zgartirish",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7685033"
    },
    {
      "id": -7686954,
      "title": "“Noshirlik faoliyati to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga qo‘shimchalar va o‘zgartirish kiritish haqida”gi QL-101-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "08.07.2025",
      "number": "1070-V",
      "keywords": [
        "noshirlik",
        "faoliyati",
        "risida",
        "zbekiston",
        "qonuniga",
        "shimchalar",
        "zgartirish",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7686954"
    },
    {
      "id": -7697047,
      "title": "“Noshirlik faoliyati to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga qo‘shimchalar va o‘zgartirish kiritish haqida”gi QL-101-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "14.07.2025",
      "number": "1086-V",
      "keywords": [
        "noshirlik",
        "faoliyati",
        "risida",
        "zbekiston",
        "qonuniga",
        "shimchalar",
        "zgartirish",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7697047"
    },
    {
      "id": -7686336,
      "title": "“Noshirlik faoliyati to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga qo‘shimchalar va o‘zgartirish kiritish haqida”gi O‘zbekiston Respublikasi Qonuni to‘g‘risida",
      "date": "15.07.2025",
      "number": "1099-V",
      "keywords": [
        "noshirlik",
        "faoliyati",
        "risida",
        "zbekiston",
        "qonuniga",
        "shimchalar",
        "zgartirish",
        "zbekiston"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7686336"
    },
    {
      "id": -7686311,
      "title": "“Noshirlik faoliyati to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga qo‘shimchalar va o‘zgartirish kiritish haqida”gi QL-101-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "15.07.2025",
      "number": "1098-V",
      "keywords": [
        "noshirlik",
        "faoliyati",
        "risida",
        "zbekiston",
        "qonuniga",
        "shimchalar",
        "zgartirish",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7686311"
    },
    {
      "id": -7690126,
      "title": "“O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga qo‘shimchalar kiritish haqida”gi QL-119-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "21.07.2025",
      "number": "1113-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "muriy",
        "javobgarlik",
        "risidagi",
        "kodeksiga",
        "shimchalar",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7690126"
    },
    {
      "id": -7690104,
      "title": "“O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga qo‘shimchalar kiritish haqida”gi QL-119-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "21.07.2025",
      "number": "1112-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "muriy",
        "javobgarlik",
        "risidagi",
        "kodeksiga",
        "shimchalar",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7690104"
    },
    {
      "id": -7690053,
      "title": "“Ijro ishini yuritishning soddalashtirilgan tartibi yanada takomillashtirilishi munosabati bilan “Sud hujjatlari va boshqa organlar hujjatlarini ijro etish to‘g‘risida”gi O‘zbekiston Respublikasi Qonunining 43-1-moddasiga o‘zgartirish kiritish haqida”gi QL-113-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "21.07.2025",
      "number": "1110-V",
      "keywords": [
        "ijro",
        "ishini",
        "yuritishning",
        "soddalashtirilgan",
        "yanada",
        "takomillashtirilishi",
        "munosabati",
        "bilan"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7690053"
    },
    {
      "id": -7690031,
      "title": "“Ijro ishini yuritishning soddalashtirilgan tartibi yanada takomillashtirilishi munosabati bilan “Sud hujjatlari va boshqa organlar hujjatlarini ijro etish to‘g‘risida”gi O‘zbekiston Respublikasi Qonunining 431-moddasiga o‘zgartirish kiritish haqida”gi QL-113-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "21.07.2025",
      "number": "1109-V",
      "keywords": [
        "ijro",
        "ishini",
        "yuritishning",
        "soddalashtirilgan",
        "yanada",
        "takomillashtirilishi",
        "munosabati",
        "bilan"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7690031"
    },
    {
      "id": -7691929,
      "title": "O‘zbekiston Respublikasi Markaziy banki raisi T. Ishmetovga “Bank tizimini isloh qilish hamda banklarni transformatsiya qilish borasida amalga oshirilayotgan ishlar to‘g‘risida” O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasining parlament so‘rovini yuborish haqida",
      "date": "22.07.2025",
      "number": "1129-V",
      "keywords": [
        "zbekiston",
        "markaziy",
        "banki",
        "raisi",
        "ishmetovga",
        "bank",
        "tizimini",
        "isloh"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7691929"
    },
    {
      "id": -7691885,
      "title": "“Ijro ishini yuritishning soddalashtirilgan tartibi yanada takomillashtirilishi munosabati bilan “Sud hujjatlari va boshqa organlar hujjatlarini ijro etish to‘g‘risida”gi O‘zbekiston Respublikasi Qonunining 43-1-moddasiga o‘zgartirish kiritish haqida”gi QL-113-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "22.07.2025",
      "number": "1128-V",
      "keywords": [
        "ijro",
        "ishini",
        "yuritishning",
        "soddalashtirilgan",
        "yanada",
        "takomillashtirilishi",
        "munosabati",
        "bilan"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7691885"
    },
    {
      "id": -7691833,
      "title": "“O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga qo‘shimchalar kiritish haqida”gi QL-119-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "22.07.2025",
      "number": "1125-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "muriy",
        "javobgarlik",
        "risidagi",
        "kodeksiga",
        "shimchalar",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7691833"
    },
    {
      "id": -7690944,
      "title": "“O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga qo‘shimchalar kiritish haqida”gi QL-119-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "22.07.2025",
      "number": "1124-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "muriy",
        "javobgarlik",
        "risidagi",
        "kodeksiga",
        "shimchalar",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7690944"
    },
    {
      "id": -7694369,
      "title": "“Tashqi mehnat migratsiyasi to‘g‘risida”gi O‘zbekiston Respublikasi Qonunini qayta ko‘rib chiqish haqida",
      "date": "28.07.2025",
      "number": "1141-V",
      "keywords": [
        "tashqi",
        "mehnat",
        "migratsiyasi",
        "risida",
        "zbekiston",
        "qonunini",
        "qayta",
        "chiqish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7694369"
    },
    {
      "id": -7690816,
      "title": "“Aholi bandligi to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga o‘zgartirish va qo‘shimchalar kiritish haqida”gi QL-116-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "28.07.2025",
      "number": "1134-V",
      "keywords": [
        "aholi",
        "bandligi",
        "risida",
        "zbekiston",
        "qonuniga",
        "zgartirish",
        "shimchalar",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7690816"
    },
    {
      "id": -7690791,
      "title": "“Aholi bandligi to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga o‘zgartirish va qo‘shimchalar kiritish haqida”gi QL-116-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "28.07.2025",
      "number": "1133-V",
      "keywords": [
        "aholi",
        "bandligi",
        "risida",
        "zbekiston",
        "qonuniga",
        "zgartirish",
        "shimchalar",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7690791"
    },
    {
      "id": -7696811,
      "title": "“Tashqi mehnat migratsiyasi to‘g‘risida”gi O‘zbekiston Respublikasi Qonunini qayta ko‘rib chiqish haqida",
      "date": "29.07.2025",
      "number": "1158-V",
      "keywords": [
        "tashqi",
        "mehnat",
        "migratsiyasi",
        "risida",
        "zbekiston",
        "qonunini",
        "qayta",
        "chiqish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7696811"
    },
    {
      "id": -7696670,
      "title": "“Aholi bandligi to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga o‘zgartirish va qo‘shimchalar kiritish haqida”gi QL-116-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "29.07.2025",
      "number": "1156-V",
      "keywords": [
        "aholi",
        "bandligi",
        "risida",
        "zbekiston",
        "qonuniga",
        "zgartirish",
        "shimchalar",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7696670"
    },
    {
      "id": -7664656,
      "title": "Doimiy asosda faoliyat ko‘rsatuvchi mehnat arbitraji to‘g‘risidagi namunaviy nizomning 13-bandiga o‘zgartirish kiritish haqida",
      "date": "04.08.2025",
      "number": "3449-1",
      "keywords": [
        "doimiy",
        "asosda",
        "faoliyat",
        "rsatuvchi",
        "mehnat",
        "arbitraji",
        "risidagi",
        "namunaviy"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7664656"
    },
    {
      "id": -7675184,
      "title": "Mehnat munosabatlari va kasbga tayyorlash tizimini takomillashtirish hamda ish beruvchilarni rag‘batlantirishga oid qo‘shimcha chora-tadbirlar to‘g‘risida",
      "date": "04.08.2025",
      "number": "PF-126",
      "keywords": [
        "mehnat",
        "munosabatlari",
        "kasbga",
        "tayyorlash",
        "tizimini",
        "takomillashtirish",
        "hamda",
        "beruvchilarni"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7675184"
    },
    {
      "id": -7664389,
      "title": "Bir qarz oluvchi, o‘zaro aloqador qarz oluvchilar guruhi, shu jumladan bankka aloqador shaxslar uchun tavakkalchilikning eng ko‘p miqdori to‘g‘risidagi nizomga o‘zgartirish va qo‘shimchalar kiritish haqida",
      "date": "04.08.2025",
      "number": "3283-2",
      "keywords": [
        "qarz",
        "oluvchi",
        "zaro",
        "aloqador",
        "qarz",
        "oluvchilar",
        "guruhi",
        "jumladan"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7664389"
    },
    {
      "id": -7663312,
      "title": "Tijorat banklarining likvidliligini boshqarishga qo‘yiladigan talablar to‘g‘risidagi nizomga o‘zgartirish va qo‘shimchalar kiritish haqida",
      "date": "04.08.2025",
      "number": "2709-8",
      "keywords": [
        "tijorat",
        "banklarining",
        "likvidliligini",
        "boshqarishga",
        "yiladigan",
        "talablar",
        "risidagi",
        "nizomga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7663312"
    },
    {
      "id": 7671695,
      "title": "O'zbekiston Respublikasi Prezidentining 2025-yil 25-iyuldagi “Davlat organlari va tashkilotlarda ijro intizomini yanada mustahkamlashning qo'shimcha chora-tadbirlari to'g'risida”gi PF-117-sonli farmoni hamda Qashqadaryo viloyati hokimining 2025-yil 29-iyuldagi 376-4-0-Q/25-sonli qarori haqida",
      "date": "05.08.2025",
      "number": "218-4-60-Q/25",
      "keywords": [
        "prezidentining",
        "iyuldagi",
        "davlat",
        "organlari",
        "tashkilotlarda",
        "ijro",
        "intizomini",
        "yanada"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7671695"
    },
    {
      "id": -7675861,
      "title": "Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahri hamda tuman (shahar) hokimliklari xodimlarining mehnatiga haq to‘lash va ularni moddiy rag‘batlantirish tizimini takomillashtirish chora-tadbirlari to‘g‘risida",
      "date": "07.08.2025",
      "number": "PF-129",
      "keywords": [
        "qoraqalpog",
        "iston",
        "vazirlar",
        "kengashi",
        "viloyatlar",
        "toshkent",
        "shahri",
        "hamda"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7675861"
    },
    {
      "id": -7677240,
      "title": "Transport va logistikani rivojlantirish muammolarini o‘rganish markaziga qo‘shimcha vazifalar yuklanganligi munosabati bilan Vazirlar Mahkamasining “O‘zbekiston Respublikasi Transport vazirligi huzuridagi Transport va logistikani rivojlantirish muammolarini o‘rganish markazi faoliyatini tashkil etish chora-tadbirlari to‘g‘risida” 2019-yil 12-apreldagi 305-son qaroriga o‘zgartirishlar kiritish haqida",
      "date": "07.08.2025",
      "number": "502",
      "keywords": [
        "transport",
        "logistikani",
        "rivojlantirish",
        "muammolarini",
        "rganish",
        "markaziga",
        "shimcha",
        "vazifalar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7677240"
    },
    {
      "id": -7679149,
      "title": "Vazirlar Mahkamasining 2021-yil 6-dekabrdagi 738-son qarori bilan tasdiqlangan Shahar, shahar atrofi, shaharlararo (Qoraqalpog‘iston Respublikasi va viloyatlar ichida hamda Qoraqalpog‘iston Respublikasi, Toshkent shahar va viloyatlararo) va xalqaro yo‘nalishlarni biriktirish bo‘yicha ochiq tenderlarni elektron tarzda tashkil etish va o‘tkazish tartibi to‘g‘risidagi nizomga o‘zgartirish va qo‘shimchalar kiritish haqida",
      "date": "07.08.2025",
      "number": "501",
      "keywords": [
        "vazirlar",
        "mahkamasining",
        "dekabrdagi",
        "qarori",
        "bilan",
        "tasdiqlangan",
        "shahar",
        "shahar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7679149"
    },
    {
      "id": -7675856,
      "title": "Xalqaro brendlar tovarlarining ayrim turlarini brend egalari yoki ularning vakolatli yetkazib beruvchilari (rasmiy distribyutorlar, dilerlar, ishlab chiqaruvchilarning savdo vakillari va ularning distribyutorlari, litsenziatlari) bilan tuzilgan to‘g‘ridan-to‘g‘ri shartnoma asosida import qiluvchilar reyestrini shakllantirish va yuritish tartibi to‘g‘risidagi nizomga o‘zgartirishlar kiritish haqida",
      "date": "08.08.2025",
      "number": "506",
      "keywords": [
        "xalqaro",
        "brendlar",
        "tovarlarining",
        "turlarini",
        "brend",
        "egalari",
        "yoki",
        "ularning"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7675856"
    },
    {
      "id": -7676501,
      "title": "O‘zbekiston Respublikasi Markaziy banki tomonidan tijorat banklarining likvidliligini favqulodda qo‘llab-quvvatlash uchun kreditlar ajratish tartibi to‘g‘risidagi nizomga qo‘shimcha va o‘zgartirishlar kiritish haqida",
      "date": "08.08.2025",
      "number": "3581-1",
      "keywords": [
        "zbekiston",
        "markaziy",
        "banki",
        "tomonidan",
        "tijorat",
        "banklarining",
        "likvidliligini",
        "favqulodda"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7676501"
    },
    {
      "id": -7676496,
      "title": "O‘zbekiston Respublikasi Markaziy banki boshqaruvi tomonidan qabul qilingan ayrim idoraviy normativ-huquqiy hujjatlarga o‘zgartirishlar va qo‘shimcha kiritish haqida",
      "date": "08.08.2025",
      "number": "3658",
      "keywords": [
        "zbekiston",
        "markaziy",
        "banki",
        "boshqaruvi",
        "tomonidan",
        "qabul",
        "qilingan",
        "idoraviy"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7676496"
    },
    {
      "id": -7679225,
      "title": "Umumiy o‘rta ta’lim muassasalarining uzaytirilgan kun guruhlarida bolalar ta’minoti uchun ota-onalar to‘lovini undirish va undan foydalanish tartibi to‘g‘risidagi nizomga o‘zgartirish va qo‘shimcha kiritish haqida",
      "date": "11.08.2025",
      "number": "2820-3",
      "keywords": [
        "umumiy",
        "muassasalarining",
        "uzaytirilgan",
        "guruhlarida",
        "bolalar",
        "minoti",
        "uchun",
        "onalar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7679225"
    },
    {
      "id": -7679170,
      "title": "Maktabgacha ta’lim tashkilotlari va maktab-internatlardagi bolalar ta’minotiga haq to‘lash tartibi to‘g‘risidagi nizomga o‘zgartirishlar va qo‘shimcha kiritish haqida",
      "date": "11.08.2025",
      "number": "2821-4",
      "keywords": [
        "maktabgacha",
        "tashkilotlari",
        "maktab",
        "internatlardagi",
        "bolalar",
        "minotiga",
        "lash",
        "risidagi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7679170"
    },
    {
      "id": -7683650,
      "title": "O‘zbekiston Respublikasining professional va oliy ta’lim tashkilotlarida ta’lim olish uchun yo‘naltiriladigan mablag‘larga jismoniy shaxslardan olinadigan daromad solig‘i bo‘yicha imtiyozni qo‘llash tartibi to‘g‘risidagi nizomga o‘zgartirishlar kiritish haqida",
      "date": "13.08.2025",
      "number": "2107-2",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "professional",
        "oliy",
        "tashkilotlarida",
        "olish",
        "uchun",
        "naltiriladigan"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7683650"
    },
    {
      "id": -7682820,
      "title": "Sanoat xavfsizligi sohasidagi ekspert tashkilotlarini akkreditatsiya qilish va ular faoliyati ustidan inspeksiya nazoratini o‘tkazish uchun to‘lovlarni amalga oshirish tartibi to‘g‘risidagi nizomga o‘zgartirish kiritish haqida",
      "date": "13.08.2025",
      "number": "2105-3",
      "keywords": [
        "sanoat",
        "xavfsizligi",
        "sohasidagi",
        "ekspert",
        "tashkilotlarini",
        "akkreditatsiya",
        "qilish",
        "ular"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7682820"
    },
    {
      "id": -7696297,
      "title": "Namangan viloyati hududlarini ijtimoiy-iqtisodiy rivojlantirish, aholini daromadli mehnat bilan ta’minlash va kambag‘allikni qisqartirish dasturlari ijrosi to‘g‘risida",
      "date": "15.08.2025",
      "number": "KQ-222-V",
      "keywords": [
        "namangan",
        "viloyati",
        "hududlarini",
        "ijtimoiy",
        "iqtisodiy",
        "rivojlantirish",
        "aholini",
        "daromadli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7696297"
    },
    {
      "id": -7687683,
      "title": "Pensiya va kompensatsiya to‘lovlarini tayinlash tartibi takomillashtirilishi munosabati bilan Vazirlar Mahkamasining 2022-yil 13-oktabrdagi 592-son qarori bilan tasdiqlangan Davlat pensiyalarini tayinlash va to‘lash tartibi to‘g‘risidagi nizomga o‘zgartirish va qo‘shimchalar kiritish haqida",
      "date": "18.08.2025",
      "number": "518",
      "keywords": [
        "pensiya",
        "kompensatsiya",
        "lovlarini",
        "tayinlash",
        "takomillashtirilishi",
        "munosabati",
        "bilan",
        "vazirlar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7687683"
    },
    {
      "id": -7695285,
      "title": "Ichki ishlar organlarida xizmatga nomzodlarni tanlab olish tadbirlarini tashkil etish va o‘tkazish tartibi to‘g‘risidagi yo‘riqnomaga o‘zgartirishlar va qo‘shimcha kiritish haqida",
      "date": "18.08.2025",
      "number": "3481-2",
      "keywords": [
        "ichki",
        "ishlar",
        "organlarida",
        "xizmatga",
        "nomzodlarni",
        "tanlab",
        "olish",
        "tadbirlarini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7695285"
    },
    {
      "id": -7689986,
      "title": "Ijro ishi bo‘yicha kafolat mablag‘larini kiritish instituti joriy etilishi munosabati bilan “Sud hujjatlari va boshqa organlar hujjatlarini ijro etish to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga qo‘shimcha va o‘zgartirishlar kiritish haqida",
      "date": "19.08.2025",
      "number": "O‘RQ-1082",
      "keywords": [
        "ijro",
        "ishi",
        "yicha",
        "kafolat",
        "mablag",
        "larini",
        "instituti",
        "joriy"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7689986"
    },
    {
      "id": 7696090,
      "title": "Samarqand viloyati hokimining 2025-yil 14-avgustdagi “O‘zbekiston Respublikasi Prezidentining 2025-yil 7-avgustdagi “Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahri hamda tuman (shahar) hokimliklari xodimlarining mehnatiga haq to‘lash va ularni moddiy rag‘batlantirish tizimini takomillashtirish chora-tadbirlari to‘g‘risida” PF-129-son Farmoni ijrosini ta’minlash haqida”gi 279-7-0-Q/25-sonli qarori to‘g‘risida",
      "date": "19.08.2025",
      "number": "181-7-92-Q/25",
      "keywords": [
        "samarqand",
        "viloyati",
        "hokimining",
        "avgustdagi",
        "zbekiston",
        "prezidentining",
        "avgustdagi",
        "qoraqalpog"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7696090"
    },
    {
      "id": -7694143,
      "title": "Nobank kredit tashkilotlarida buxgalteriya hisobini yuritish tartibi to‘g‘risidagi yo‘riqnomaga o‘zgartirish va qo‘shimchalar kiritish haqida",
      "date": "20.08.2025",
      "number": "3263-3",
      "keywords": [
        "nobank",
        "kredit",
        "tashkilotlarida",
        "buxgalteriya",
        "hisobini",
        "yuritish",
        "risidagi",
        "riqnomaga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7694143"
    },
    {
      "id": -7691790,
      "title": "Vazirlar Mahkamasining “Eksportbop qishloq xo‘jaligi mahsulotlarini yetishtirishda biologik himoya usulini qo‘llashni rag‘batlantirish chora-tadbirlari to‘g‘risida” 2022-yil 19-avgustdagi 460-son qaroriga o‘zgartirish va qo‘shimchalar kiritish haqida",
      "date": "20.08.2025",
      "number": "520",
      "keywords": [
        "vazirlar",
        "mahkamasining",
        "eksportbop",
        "qishloq",
        "jaligi",
        "mahsulotlarini",
        "yetishtirishda",
        "biologik"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7691790"
    },
    {
      "id": -7695476,
      "title": "Budjet tashkilotlarida buxgalteriya hisobi to‘g‘risidagi yo‘riqnomaga qo‘shimcha va o‘zgartirishlar kiritish haqida",
      "date": "20.08.2025",
      "number": "2169-9",
      "keywords": [
        "budjet",
        "tashkilotlarida",
        "buxgalteriya",
        "hisobi",
        "risidagi",
        "riqnomaga",
        "shimcha",
        "zgartirishlar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7695476"
    },
    {
      "id": -7694230,
      "title": "O‘quvchilarni sinfdan sinfga va bir umumiy o‘rta ta’lim muassasasidan boshqasiga o‘tkazish tartibi to‘g‘risidagi nizomning 5-bobini o‘z kuchini yo‘qotgan deb topish haqida",
      "date": "20.08.2025",
      "number": "2684-5",
      "keywords": [
        "quvchilarni",
        "sinfdan",
        "sinfga",
        "umumiy",
        "muassasasidan",
        "boshqasiga",
        "tkazish",
        "risidagi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7694230"
    },
    {
      "id": -7592224,
      "title": "“Ish vaqtidan tashqari ish uchun haq to‘lash va uning davomiyligini soddalashtirish munosabati bilan O‘zbekiston Respublikasining Mehnat kodeksiga o‘zgartirishlar kiritish to‘g‘risida”gi QL-88-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "27.05.2025",
      "number": "914-V",
      "keywords": [
        "vaqtidan",
        "tashqari",
        "uchun",
        "lash",
        "uning",
        "davomiyligini",
        "soddalashtirish",
        "munosabati"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7592224"
    },
    {
      "id": -7638362,
      "title": "“Investitsiyalar va investitsiya faoliyati to‘g‘risida”gi O‘zbekiston Respublikasi Qonunini qayta ko‘rib chiqish haqida",
      "date": "03.06.2025",
      "number": "931-V",
      "keywords": [
        "investitsiyalar",
        "investitsiya",
        "faoliyati",
        "risida",
        "zbekiston",
        "qonunini",
        "qayta",
        "chiqish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7638362"
    },
    {
      "id": -7638522,
      "title": "“Hakamlik sudlari faoliyati yanada takomillashtirilishi hamda budjet intizomi kuchaytirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga qo‘shimcha va o‘zgartirishlar kiritish to‘g‘risida”gi QL-90-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "09.06.2025",
      "number": "938-V",
      "keywords": [
        "hakamlik",
        "sudlari",
        "faoliyati",
        "yanada",
        "takomillashtirilishi",
        "hamda",
        "budjet",
        "intizomi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7638522"
    },
    {
      "id": -7638389,
      "title": "“Hakamlik sudlari faoliyati yanada takomillashtirilishi hamda budjet intizomi kuchaytirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga qo‘shimcha va o‘zgartirishlar kiritish to‘g‘risida”gi QL-90-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "09.06.2025",
      "number": "937-V",
      "keywords": [
        "hakamlik",
        "sudlari",
        "faoliyati",
        "yanada",
        "takomillashtirilishi",
        "hamda",
        "budjet",
        "intizomi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7638389"
    },
    {
      "id": -7636932,
      "title": "O‘zbekiston Respublikasi ekologiya, atrof-muhitni muhofaza qilish va iqlim o‘zgarishi vaziri A. Abduxakimovga “Qattiq maishiy chiqindilarni qayta ishlashning samarali va zamonaviy tizimini yaratish hamda chiqindi poligonlarini yopish va rekultivatsiya qilish borasida amalga oshirilayotgan ishlar to‘g‘risida” O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasining parlament so‘rovini yuborish haqida",
      "date": "10.06.2025",
      "number": "965-V",
      "keywords": [
        "zbekiston",
        "ekologiya",
        "atrof",
        "muhitni",
        "muhofaza",
        "qilish",
        "iqlim",
        "zgarishi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7636932"
    },
    {
      "id": -7636847,
      "title": "“Hakamlik sudlari faoliyati yanada takomillashtirilishi hamda budjet intizomi kuchaytirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga qo‘shimcha va o‘zgartirishlar kiritish to‘g‘risida”gi QL-90-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "10.06.2025",
      "number": "962-V",
      "keywords": [
        "hakamlik",
        "sudlari",
        "faoliyati",
        "yanada",
        "takomillashtirilishi",
        "hamda",
        "budjet",
        "intizomi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7636847"
    },
    {
      "id": 7635144,
      "title": "«Soliq va budjet qonunchiligi takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida»gi O‘zbekiston Respublikasi Qonunini qayta ko‘rib chiqish haqida",
      "date": "23.06.2025",
      "number": "998-V",
      "keywords": [
        "soliq",
        "budjet",
        "qonunchiligi",
        "takomillashtirilishi",
        "munosabati",
        "bilan",
        "zbekiston",
        "respublikasining"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7635144"
    },
    {
      "id": 7635476,
      "title": "«O‘zbekiston Respublikasining ayrim qonun hujjatlariga  valyuta hamda qimmatbaho metallar va qimmatbaho toshlar muomalasi bilan bog‘liq munosabatlarni takomillashtirishga qaratilgan qo‘shimchalar va o‘zgartirish kiritish haqida»gi QL-94-sonli  O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "24.06.2025",
      "number": "1004-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "valyuta",
        "hamda",
        "qimmatbaho",
        "metallar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7635476"
    },
    {
      "id": 7635775,
      "title": "«Soliq va budjet qonunchiligi takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida»gi O‘zbekiston Respublikasi Qonunini qayta ko‘rib chiqish haqida",
      "date": "24.06.2025",
      "number": "1008-V",
      "keywords": [
        "soliq",
        "budjet",
        "qonunchiligi",
        "takomillashtirilishi",
        "munosabati",
        "bilan",
        "zbekiston",
        "respublikasining"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7635775"
    },
    {
      "id": -7655849,
      "title": "O‘zbekiston Respublikasida naqd pulsiz hisob-kitoblar to‘g‘risidagi nizomga qo‘shimcha va o‘zgartirishlar kiritish haqida",
      "date": "28.07.2025",
      "number": "3229-3",
      "keywords": [
        "zbekiston",
        "respublikasida",
        "naqd",
        "pulsiz",
        "hisob",
        "kitoblar",
        "risidagi",
        "nizomga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7655849"
    },
    {
      "id": -7655225,
      "title": "Avtomototransport vositalarini qayta ro‘yxatdan o‘tkazishni (qayd etishni) tashkil etish va amalga oshirish tartibi to‘g‘risidagi yo‘riqnomaning 14-bandiga o‘zgartirish kiritish haqida",
      "date": "30.07.2025",
      "number": "2050-4",
      "keywords": [
        "avtomototransport",
        "vositalarini",
        "qayta",
        "yxatdan",
        "tkazishni",
        "qayd",
        "etishni",
        "tashkil"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7655225"
    },
    {
      "id": -7655065,
      "title": "Muayyan huquqdan mahrum qilish, axloq tuzatish ishlari va ozodlikni cheklash tariqasidagi jazolarning ijrosini tashkil etish hamda shartli hukm qilingan shaxslar ustidan nazoratni amalga oshirish tartibi to‘g‘risidagi yo‘riqnomaning 6-bandiga o‘zgartirish kiritish haqida",
      "date": "30.07.2025",
      "number": "2922-2",
      "keywords": [
        "huquqdan",
        "mahrum",
        "qilish",
        "axloq",
        "tuzatish",
        "ishlari",
        "ozodlikni",
        "cheklash"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7655065"
    },
    {
      "id": -7658577,
      "title": "Ma’muriy qamoqqa olingan shaxslarni qabul qilish va saqlash uchun mo‘ljallangan maxsus qabulxonalarning ichki tartib qoidalariga o‘zgartirishlar kiritish haqida",
      "date": "30.07.2025",
      "number": "3073-4",
      "keywords": [
        "muriy",
        "qamoqqa",
        "olingan",
        "shaxslarni",
        "qabul",
        "qilish",
        "saqlash",
        "uchun"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7658577"
    },
    {
      "id": -7658561,
      "title": "Davlat organlari va tashkilotlari yuridik xizmat xodimlarining normativ-huquqiy hujjatlar va ularning loyihalarini korrupsiyaga qarshi ekspertizadan o‘tkazish faoliyatini baholash uslubiyotini tasdiqlash to‘g‘risida",
      "date": "30.07.2025",
      "number": "3654",
      "keywords": [
        "davlat",
        "organlari",
        "tashkilotlari",
        "yuridik",
        "xizmat",
        "xodimlarining",
        "normativ",
        "huquqiy"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7658561"
    },
    {
      "id": -2643352,
      "title": "Xalqaro havo transportida tashishlarga doir ayrim qoidalarni birxillashtirish haqida (Gamburg qoidalari)",
      "date": "12.10.1929",
      "number": "",
      "keywords": [
        "xalqaro",
        "havo",
        "transportida",
        "tashishlarga",
        "doir",
        "qoidalarni",
        "birxillashtirish",
        "gamburg"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2643352"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "15-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "17-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "18-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "19-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "20-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "21-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "22-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "23-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "24-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "25-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "26-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "27-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "28-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "29-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "30-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "31-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "32-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "33-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -2741082,
      "title": "Majburiy mehnat to‘g‘risida",
      "date": "28.06.1930",
      "number": "",
      "keywords": [
        "majburiy",
        "mehnat",
        "risida"
      ],
      "summary": "Majburiy mehnat to‘g‘risidagi",
      "url": "https://lex.uz/uz/docs/-2741082"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "15-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "17-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "18-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "19-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "20-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "21-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "22-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "23-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "24-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "25-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "26-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "27-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "28-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "29-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "30-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "31-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "32-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "33-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "34-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "35-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "36-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "37-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "38-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "39-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "I BO‘LIM. SANOATDA MEHNAT INSPEKSIYASI",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "II BO‘LIM. SAVDODA MEHNAT IISPEKSIYASI",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "III BO‘LIM. TURLI QOIDALAR",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "IV BO‘LIM. YAKUNIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -4711931,
      "title": "Mehnat inspeksiyasi to‘g‘risida",
      "date": "11.07.1947",
      "number": "",
      "keywords": [
        "mehnat",
        "inspeksiyasi",
        "risida"
      ],
      "summary": "Mehnat inspeksiyasi to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-4711931"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "15-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "17-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "18-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "19-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "20-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "21-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "22-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "23-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "24-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "25-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "26-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "27-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -7346165,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "Ish haqini himoya qilish to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-7346165"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "15-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "17-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "18-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "19-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "20-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "21-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "22-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "23-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "24-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "25-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "26-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "27-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    },
    {
      "id": -6902244,
      "title": "Ish haqini himoya qilish to‘g‘risida",
      "date": "01.07.1949",
      "number": "95",
      "keywords": [
        "haqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-6902244"
    }
  ],
  "soliq": [
    {
      "id": -7711036,
      "title": "Tovarlarni bojxona hududida qayta ishlashni yanada soddalashtirishga oid qo‘shimcha chora-tadbirlar to‘g‘risida",
      "date": "02.09.2025",
      "number": "555",
      "keywords": [
        "tovarlarni",
        "bojxona",
        "hududida",
        "qayta",
        "ishlashni",
        "yanada",
        "soddalashtirishga",
        "shimcha"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7711036"
    },
    {
      "id": -7713685,
      "title": "O‘zbekiston Respublikasining bojxona hududidan olib chiqiladigan tovarlarning bojxona qiymatini aniqlash tartibi to‘g‘risidagi nizomni tasdiqlash haqida",
      "date": "03.09.2025",
      "number": "560",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "bojxona",
        "hududidan",
        "olib",
        "chiqiladigan",
        "tovarlarning",
        "bojxona"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7713685"
    },
    {
      "id": -7680389,
      "title": "Bojxona organlari tomonidan jismoniy va yuridik shaxslarga ko‘rsatiladigan pulli xizmatlar ro‘yxati va tariflarini tasdiqlash to‘g‘risida",
      "date": "11.08.2025",
      "number": "3659",
      "keywords": [
        "bojxona",
        "organlari",
        "tomonidan",
        "jismoniy",
        "yuridik",
        "shaxslarga",
        "rsatiladigan",
        "pulli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7680389"
    },
    {
      "id": -7683236,
      "title": "Respublika hududiga kirib kelgan va bir qismi yaroqsiz holatga kelib qolgan mahsulotlarni bojxona va boshqa vakolatli organlar tomonidan yo‘q qilish tartib-taomillarini soddalashtirish to‘g‘risida",
      "date": "13.08.2025",
      "number": "513",
      "keywords": [
        "respublika",
        "hududiga",
        "kirib",
        "kelgan",
        "qismi",
        "yaroqsiz",
        "holatga",
        "kelib"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7683236"
    },
    {
      "id": -7653000,
      "title": "Tadbirkorlik faoliyati subyektlarining bojxona sohasidagi muammolarini o‘rganish va hal etish bo‘yicha tavsiyalar beruvchi apellyatsiya kengashi faoliyatini tashkil etish to‘g‘risida",
      "date": "28.07.2025",
      "number": "470",
      "keywords": [
        "tadbirkorlik",
        "faoliyati",
        "subyektlarining",
        "bojxona",
        "sohasidagi",
        "muammolarini",
        "rganish",
        "etish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7653000"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "15-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "17-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "18-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "19-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "20-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "I modda. Ta’riflar",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "II modda. Huquqiy layoqat",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "III modda. Mulk, mablag‘ va aktivlar",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "ILOVA Kengashning huquq layoqati, imtiyozlari va immunitetlari",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "IV modda. Aloqa vositalaridan foydalanish",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "IX modda. Nizolarni hal etish",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "V modda. Kengash a’zolarining vakillari",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "VI modda. Kengashning mansabdor shaxslari",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "VII modda. Kengash topshirig‘ini bajaruvchi ekspertlar",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "VIII modda. Imtiyozlarni suiiste’mol qilish",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -2599503,
      "title": "Bojxona hamkorlik kengashini tashkil qilish to‘g‘risida",
      "date": "15.12.1950",
      "number": "",
      "keywords": [
        "bojxona",
        "hamkorlik",
        "kengashini",
        "tashkil",
        "qilish",
        "risida"
      ],
      "summary": "X modda. Qo‘shimcha shartnomalar",
      "url": "https://lex.uz/uz/docs/-2599503"
    },
    {
      "id": -7354720,
      "title": "Qochoqlar maqomi to‘g‘risida",
      "date": "28.07.1951",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomi",
        "risida"
      ],
      "summary": "29-modda. Soliqlar",
      "url": "https://lex.uz/uz/docs/-7354720"
    },
    {
      "id": -7333398,
      "title": "Apatrid maqomi to‘g‘risida",
      "date": "28.09.1954",
      "number": "",
      "keywords": [
        "apatrid",
        "maqomi",
        "risida"
      ],
      "summary": "29-modda. Soliqlar",
      "url": "https://lex.uz/uz/docs/-7333398"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "Yakuniy maqolalar",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2685571,
      "title": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "date": "14.12.1956",
      "number": "",
      "keywords": [
        "yuklarni",
        "orqali",
        "xalqaro",
        "tashishda",
        "foydalaniladigan",
        "yukni",
        "orqali",
        "tashuvchi"
      ],
      "summary": "Yuklarni yo‘l orqali xalqaro tashishda foydalaniladigan, yukni yo‘l orqali tashuvchi vositalarga soliq solish to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2685571"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "1-modda Ittifoqni ta’sis etish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "10-modda Qabul qiluvchi idora",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "11-modda Xalqaro talabnomani berish sanasi va oqibatlari",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "12-modda Xalqaro talabnomani Xalqaro byuroga va Xalqaro izlash organiga yuborish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "13-modda Ko‘rsatilgan idoralar tomonidan xalqaro talabnoma nusxasini olish imkoniyati",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "14-modda Xalqaro talabnomaning ayrim kamchiliklari",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "15-modda Xalqaro izlash",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "16-modda Xalqaro izlash organi",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "17-modda Xalqaro izlash organi tomonidan qo‘llaniladigan tartib-taomil",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "18-modda Xalqaro izlash to‘g‘risida hisobot",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "19-modda Xalqaro byuroda ixtiro formulasini o‘zgartirish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "2-modda Tushunchalar",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "20-modda Xalqaro talabnoma materiallarini ko‘rsatilgan idoralarga yuborish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "21-modda Xalqaro e’lon qilish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "22-modda Ko‘rsatilgan idoralar uchun nusxasi, tarjimasi va patent boji",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "23-modda Milliy tartib-taomilni kechiktirish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "24-modda Ko‘rsatilgan mamlakatlarda xalqaro talabnoma amal qilishini tugatish ehtimoli",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "25-modda Ko‘rsatilgan idoralar tomonidan qarorlarni qayta ko‘rib chiqish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "26-modda Ko‘rsatilgan idoralarda xalqaro talabnomaga tuzatishlar kiritish imkoniyati",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "27-modda Milliy qonunchilik talablari",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "28-modda Ko‘rsatilgan idoralarda ixtiro formulasi, ixtiro tavsifi va chizmalarni o‘zgartirish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "29-modda Xalqaro e’lon qilish oqibatlari",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "3-modda Xalqaro talabnoma",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "30-modda Xalqaro talabnomaning oshkor qilinmaslik tabiati",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "31-modda Xalqaro dastlabki ekspertizani o‘tkazish talabi",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "32-modda Xalqaro dastlabki ekspertiza organi",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "33-modda Xalqaro dastlabki ekspertiza",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "34-modda Xalqaro dastlabki ekspertiza organi tomonidan qo‘llanadigan tartib-taomil",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "35-modda Xalqaro dastlabki ekspertiza xulosasi",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "36-modda Xalqaro dastlabki ekspertiza xulosasini yuborish, tarjima qilish va tarqatish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "37-modda Xalqaro dastlabki ekspertiza o‘tkazish talabini yoki davlatni tanlashni olib qo‘yish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "38-modda Xalqaro dastlabki ekspertizaning oshkor qilinmaslik tabiati",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "39-modda Tanlangan idoralar uchun nusxasi, tarjimasi va patent boji",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "4-modda Ariza",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "40-modda Milliy ekspertiza va boshqa tartib-taomilni kechiktirish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "41-modda Tanlangan idoralarda ixtiro formulasi, ixtiro tavsifi va chizmalarni o‘zgartirish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "42-modda Tanlangan idoralarda milliy ekspertiza natijalari",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "43-modda Muhofazaning ma’lum turlarini so‘rab olish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "44-modda Ikki turdagi muhofazani so‘rab olish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "45-modda Mintaqaviy patentlar to‘g‘risida shartnomalar",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "46-modda Xalqaro talabnomani noto‘g‘ri tarjimasi",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "47-modda Muddatlar",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "48-modda Ayrim hollarda muddatlarga rioya qilmaslik",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "49-modda Xalqaro organlarda ishlarni yuritish huquqi",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "5-modda Ixtiro tavsifi",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "50-modda Patent axboroti sohasida xizmatlar",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "51-modda Texnik yordam",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "52-modda Shartnomaning boshqa qoidalari bilan bog‘liqlik",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "53-modda Assambleya",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "54-modda Ijroiya qo‘mitasi",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "55-modda Xalqaro byuro",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "56-modda Texnik hamkorlik qo‘mitasi",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "57-modda Moliyalashtirish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "58-modda Yo‘riqnoma",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "59-modda Nizolarni hal qilish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "6-modda Ixtiro formulasi",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "60-modda Shartnomani qayta ko‘rib chiqish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "61-modda Shartnomaning ayrim qoidalariga tuzatishlar kiritish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "62-modda Shartnomada ishtirok etish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "63-modda Shartnomani kuchga kirishi",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "64-modda Izohlar[ 4 ]",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "65-modda Shartnoma va Yo‘riqnomani bosqichma-bosqich qo‘llash",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "67-modda Imzolash va tillar",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "68-modda Depozitariy funksiyalari",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "69-modda Bildirishnomalar",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "7-modda Chizmalar",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "8-modda Ustuvorlikni da’vo qilish",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "9-modda Talabnoma beruvchi",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "I BOB XALQARO TALABNOMA VA XALQARO IZLASh",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "II BOB XALQARO DASTLABKI EKSPERTIZA",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "III BOB UMUMIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "IV BOB TEXNIK XIZMATLAR",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "KIRISh QOIDALARI",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "Patent kooperatsiyasi to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "V BOB MA’MURIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "VI BOB NIZOLARNI HAL QILISh",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "VII BOB QAYTA KO‘RIB ChIQISh VA TUZATIShLAR",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2602762,
      "title": "Patent kooperatsiyasi to‘g‘risida",
      "date": "19.06.1970",
      "number": "",
      "keywords": [
        "patent",
        "kooperatsiyasi",
        "risida"
      ],
      "summary": "VIII BOB YAKUNIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-2602762"
    },
    {
      "id": -2111876,
      "title": "Xalqaro patent tasnifi to‘g‘risida",
      "date": "24.03.1971",
      "number": "",
      "keywords": [
        "xalqaro",
        "patent",
        "tasnifi",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2111876"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Amal qilish muddati 17-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Boshqaruv qo‘mitasi 6-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "I BOB Ta’riflar",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "II BOB QO‘LLANILISh SOHASI VA TUZILIShI",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "III BOB KONVENSIYA BOShQARMASI",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "IV BOB AHDLAShUVChI TOMON",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Konvensiya tuzilishi 4-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Konvensiyaga tuzatishlar 15-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Konvensiyani ratifikatsiya qilish 8-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Konvensiyani ro‘yxatdan o‘tkazish va matnlarning haqiqiyligi 20-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Konvensiyaning depozitariysi 19-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Konvensiyaning kuchga kirishi 18-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Konvensiyaning qo‘llanilish doirasi 2-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Konvensiyaning qo‘llanilishi 10-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Nizolarni hal qilish 14-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Qoida va bandlarni qabul qilish 12-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "Qoidalarni bajarish 13-modda",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -5371534,
      "title": "Bojxona tartib-taomillarini soddalashtirish va uyg‘unlashtirish to‘g‘risida",
      "date": "18.05.1973",
      "number": "",
      "keywords": [
        "bojxona",
        "tartib",
        "taomillarini",
        "soddalashtirish",
        "unlashtirish",
        "risida"
      ],
      "summary": "V BOB Yakuniy qoidalar",
      "url": "https://lex.uz/uz/docs/-5371534"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "1-modda Ittifoqning ta’sis etilishi",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "10-modda Assambleya",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "11-modda Xalqaro byuro",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "12-modda Yo‘riqnoma",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "13-modda Shartnomani qayta ko‘rib chiqish",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "14-modda Shartnomaning ayrim qoidalariga tuzatishlar kiritish",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "15-modda Shartnomada qatnashish",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "16-modda Shartnomaning kuchga kirishi",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "17-modda Shartnoma denonsatsiyasi",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "18-modda Shartnomaning imzolanishi va tillari",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "19-modda Shartnomani saqlash; nusxalarni jo‘natish; Shartnomani ro‘yxatga olish",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "2-modda Ta’riflar",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "20-modda Bildirishnomalar",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "3-modda. Mikroorganizmlarni deponentlashning e’tirof etilishi va oqibatlari",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "4-modda Qayta deponentlash",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "5-modda Import va eksport sohasida cheklovlar",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "6-modda Deponentlash bo‘yicha xalqaro organning maqomi",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "7-modda Deponentlash bo‘yicha xalqaro organ maqomini olish",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "8-modda Deponentlash bo‘yicha xalqaro organ maqomining tugatilishi va cheklanishi",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "9-modda Hukumatlararo sanoat mulki tashkiloti",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "I BOB MODDIY-HUQUQIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "II BOB MA’MURIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "III BOB QAYTA KO‘RIB ChIQISh VA TUZATIShLAR KIRITISh",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "IV BOB YAKUNIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "KIRISh QOIDALARI",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2119620,
      "title": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "date": "28.04.1977",
      "number": "",
      "keywords": [
        "patent",
        "protsedurasi",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "deponentlashning",
        "xalqaro",
        "tirof"
      ],
      "summary": "Patent protsedurasi maqsadlari uchun mikroorganizmlarni deponentlashning xalqaro e’tirof etilishi to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2119620"
    },
    {
      "id": -2970033,
      "title": "Patent tartiboti maqsadlari uchun mikroorganizmlarni to‘plashni xalqaro e’tirof etish to‘g‘risidagi Budapesht shartnomasiga",
      "date": "31.01.1981",
      "number": "",
      "keywords": [
        "patent",
        "tartiboti",
        "maqsadlari",
        "uchun",
        "mikroorganizmlarni",
        "plashni",
        "xalqaro",
        "tirof"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2970033"
    },
    {
      "id": -2658137,
      "title": "Chegaralarda yuklarni nazoratdan o‘tkazish shartlarini kelishish to‘g‘risida",
      "date": "21.10.1982",
      "number": "",
      "keywords": [
        "chegaralarda",
        "yuklarni",
        "nazoratdan",
        "tkazish",
        "shartlarini",
        "kelishish",
        "risida"
      ],
      "summary": "Muvofiqlashtirish bojxona nazorati va nazoratning boshqa turlari",
      "url": "https://lex.uz/uz/docs/-2658137"
    },
    {
      "id": -5071234,
      "title": "SSJ Vazirlar Mahkamasining 1983-yil 1-dekabrdagi “Qishloq xo‘jaligini soliq imtiyozlari to‘g‘risida” 749-sonli qarori",
      "date": "30.12.1983",
      "number": "749",
      "keywords": [
        "vazirlar",
        "mahkamasining",
        "dekabrdagi",
        "qishloq",
        "jaligini",
        "soliq",
        "imtiyozlari",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-5071234"
    },
    {
      "id": -2661072,
      "title": "Soliq siyosatining kelishilgan prinsiplari to‘g‘risida",
      "date": "13.03.1992",
      "number": "",
      "keywords": [
        "soliq",
        "siyosatining",
        "kelishilgan",
        "prinsiplari",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2661072"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "2-modda Bojxona to‘lovlaridan ozod qilish va xarajatlarni qoplash",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2735258,
      "title": "Havo qatnovi to‘g‘risidagi",
      "date": "24.05.1993",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "risidagi"
      ],
      "summary": "6-modda BOJXONA YIG‘IMLARI VA TARTIBOTLARI",
      "url": "https://lex.uz/uz/docs/-2735258"
    },
    {
      "id": -2652132,
      "title": "Ikki tomonlama soliq solishga yo‘l qo‘ymaslik hamda daromad va sarmoyadan soliq to‘lashdan bosh tortishning oldini olish to‘g‘risida",
      "date": "29.07.1993",
      "number": "",
      "keywords": [
        "ikki",
        "tomonlama",
        "soliq",
        "solishga",
        "ymaslik",
        "hamda",
        "daromad",
        "sarmoyadan"
      ],
      "summary": "1-modda Bitim tatbiq etiladigan shaxslar",
      "url": "https://lex.uz/uz/docs/-2652132"
    },
    {
      "id": -2652132,
      "title": "Ikki tomonlama soliq solishga yo‘l qo‘ymaslik hamda daromad va sarmoyadan soliq to‘lashdan bosh tortishning oldini olish to‘g‘risida",
      "date": "29.07.1993",
      "number": "",
      "keywords": [
        "ikki",
        "tomonlama",
        "soliq",
        "solishga",
        "ymaslik",
        "hamda",
        "daromad",
        "sarmoyadan"
      ],
      "summary": "10-modda Dividendlar",
      "url": "https://lex.uz/uz/docs/-2652132"
    },
    {
      "id": -2652132,
      "title": "Ikki tomonlama soliq solishga yo‘l qo‘ymaslik hamda daromad va sarmoyadan soliq to‘lashdan bosh tortishning oldini olish to‘g‘risida",
      "date": "29.07.1993",
      "number": "",
      "keywords": [
        "ikki",
        "tomonlama",
        "soliq",
        "solishga",
        "ymaslik",
        "hamda",
        "daromad",
        "sarmoyadan"
      ],
      "summary": "11-modda Foizlar",
      "url": "https://lex.uz/uz/docs/-2652132"
    },
    {
      "id": -2652132,
      "title": "Ikki tomonlama soliq solishga yo‘l qo‘ymaslik hamda daromad va sarmoyadan soliq to‘lashdan bosh tortishning oldini olish to‘g‘risida",
      "date": "29.07.1993",
      "number": "",
      "keywords": [
        "ikki",
        "tomonlama",
        "soliq",
        "solishga",
        "ymaslik",
        "hamda",
        "daromad",
        "sarmoyadan"
      ],
      "summary": "12-modda Royalti",
      "url": "https://lex.uz/uz/docs/-2652132"
    },
    {
      "id": -2652132,
      "title": "Ikki tomonlama soliq solishga yo‘l qo‘ymaslik hamda daromad va sarmoyadan soliq to‘lashdan bosh tortishning oldini olish to‘g‘risida",
      "date": "29.07.1993",
      "number": "",
      "keywords": [
        "ikki",
        "tomonlama",
        "soliq",
        "solishga",
        "ymaslik",
        "hamda",
        "daromad",
        "sarmoyadan"
      ],
      "summary": "13-modda Texnik xizmatlar uchun to‘lovlar to‘lash",
      "url": "https://lex.uz/uz/docs/-2652132"
    },
    {
      "id": -2652132,
      "title": "Ikki tomonlama soliq solishga yo‘l qo‘ymaslik hamda daromad va sarmoyadan soliq to‘lashdan bosh tortishning oldini olish to‘g‘risida",
      "date": "29.07.1993",
      "number": "",
      "keywords": [
        "ikki",
        "tomonlama",
        "soliq",
        "solishga",
        "ymaslik",
        "hamda",
        "daromad",
        "sarmoyadan"
      ],
      "summary": "14-modda Ko‘chmas va ko‘char mulkni sotishdan tushgan daromadlar",
      "url": "https://lex.uz/uz/docs/-2652132"
    },
    {
      "id": -2652132,
      "title": "Ikki tomonlama soliq solishga yo‘l qo‘ymaslik hamda daromad va sarmoyadan soliq to‘lashdan bosh tortishning oldini olish to‘g‘risida",
      "date": "29.07.1993",
      "number": "",
      "keywords": [
        "ikki",
        "tomonlama",
        "soliq",
        "solishga",
        "ymaslik",
        "hamda",
        "daromad",
        "sarmoyadan"
      ],
      "summary": "15-modda Mustaqil shaxsiy xizmatlar",
      "url": "https://lex.uz/uz/docs/-2652132"
    },
    {
      "id": -2652132,
      "title": "Ikki tomonlama soliq solishga yo‘l qo‘ymaslik hamda daromad va sarmoyadan soliq to‘lashdan bosh tortishning oldini olish to‘g‘risida",
      "date": "29.07.1993",
      "number": "",
      "keywords": [
        "ikki",
        "tomonlama",
        "soliq",
        "solishga",
        "ymaslik",
        "hamda",
        "daromad",
        "sarmoyadan"
      ],
      "summary": "16-modda Bog‘liq shaxsiy xizmatlar",
      "url": "https://lex.uz/uz/docs/-2652132"
    }
  ],
  "tadbirkorlik": [
    {
      "id": -7685395,
      "title": "“O‘zbekiston Respublikasining ayrim qonun hujjatlariga tadbirkorlik subyektlarini qo‘llab-quvvatlash orqali aholi bandligini ta’minlashga hamda qo‘shilgan qiymati yuqori bo‘lgan tovarlar ishlab chiqarishni kengaytirishga qaratilgan o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida”gi QL-111-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "07.07.2025",
      "number": "1049-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "tadbirkorlik",
        "subyektlarini",
        "llab",
        "quvvatlash"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7685395"
    },
    {
      "id": 7695170,
      "title": "«O‘zbekiston Respublikasining ayrim qonun hujjatlariga tadbirkorlik subyektlarini qo‘llab-quvvatlash orqali aholi bandligini ta’minlashga hamda qo‘shilgan qiymati yuqori bo‘lgan tovarlar ishlab chiqarishni kengaytirishga qaratilgan o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida»gi QL-111-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "14.07.2025",
      "number": "1079-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "tadbirkorlik",
        "subyektlarini",
        "llab",
        "quvvatlash"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7695170"
    },
    {
      "id": -7688970,
      "title": "“O‘zbekiston Respublikasining ayrim qonun hujjatlariga tadbirkorlik subyektlarini qo‘llab-quvvatlash orqali aholi bandligini ta’minlashga hamda qo‘shilgan qiymati yuqori bo‘lgan tovarlar ishlab chiqarishni kengaytirishga qaratilgan o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida”gi QL-111-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "15.07.2025",
      "number": "1104-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "tadbirkorlik",
        "subyektlarini",
        "llab",
        "quvvatlash"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7688970"
    },
    {
      "id": -7656521,
      "title": "Jahon savdo tashkilotining Importni litsenziyalash qo‘mitasiga xabarnoma yuborish tartibi to‘g‘risidagi nizomni tasdiqlash haqida",
      "date": "23.07.2025",
      "number": "463",
      "keywords": [
        "jahon",
        "savdo",
        "tashkilotining",
        "importni",
        "litsenziyalash",
        "mitasiga",
        "xabarnoma",
        "yuborish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7656521"
    },
    {
      "id": -7675127,
      "title": "“Toshkent davlat yuridik universiteti qoshidagi akademik litseyning bitiruvchilarini Toshkent davlat yuridik universitetiga yakka tartibda suhbat o‘tkazish orqali o‘qishga qabul qilish tartibi to‘g‘risida nizomni tasdiqlash haqida”gi buyruq, shuningdek unga qo‘shimchani o‘z kuchini yo‘qotgan deb topish to‘g‘risida",
      "date": "08.08.2025",
      "number": "3308-2",
      "keywords": [
        "toshkent",
        "davlat",
        "yuridik",
        "universiteti",
        "qoshidagi",
        "akademik",
        "litseyning",
        "bitiruvchilarini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7675127"
    },
    {
      "id": -7681520,
      "title": "Yakka tartibdagi tadbirkorlar hamda o‘zini o‘zi band qilgan shaxslar uchun qulay shart-sharoit yaratish chora-tadbirlari to‘g‘risida",
      "date": "12.08.2025",
      "number": "PQ-247",
      "keywords": [
        "yakka",
        "tartibdagi",
        "tadbirkorlar",
        "hamda",
        "zini",
        "band",
        "qilgan",
        "shaxslar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7681520"
    },
    {
      "id": -7683270,
      "title": "Qimmatli qog‘ozlar bozorini tartibga solish bo‘yicha vakolatli davlat organining “Qimmatli qog‘ozlar markaziy depozitariysi” aksiyadorlik jamiyati bilan o‘zaro hamkorligi to‘g‘risidagi nizomni tasdiqlash haqida",
      "date": "13.08.2025",
      "number": "3666",
      "keywords": [
        "qimmatli",
        "ozlar",
        "bozorini",
        "tartibga",
        "solish",
        "yicha",
        "vakolatli",
        "davlat"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7683270"
    },
    {
      "id": -7687658,
      "title": "Etilen va propilen polimerlaridan yuqori qo‘shilgan qiymatga ega mahsulotlar ishlab chiqaruvchi mahalliy korxonalarni qo‘llab-quvvatlash bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida",
      "date": "18.08.2025",
      "number": "PQ-252",
      "keywords": [
        "etilen",
        "propilen",
        "polimerlaridan",
        "yuqori",
        "shilgan",
        "qiymatga",
        "mahsulotlar",
        "ishlab"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7687658"
    },
    {
      "id": 7695874,
      "title": "Toshkent viloyati hududidagi markaziy issiqlik ta’minoti korxonalarining  issiq suv va isitish xizmatlari tariflari tasdiqlash to‘g‘risida",
      "date": "18.08.2025",
      "number": "VII-18-104-10-0-K/25",
      "keywords": [
        "toshkent",
        "viloyati",
        "hududidagi",
        "markaziy",
        "issiqlik",
        "minoti",
        "korxonalarining",
        "issiq"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7695874"
    },
    {
      "id": -7694875,
      "title": "Samarqand viloyatida davlat va tadbirkorlik subyektlari o‘rtasida o‘zaro manfaatli hamkorlik tizimini joriy etish chora-tadbirlari to‘g‘risida",
      "date": "20.08.2025",
      "number": "526",
      "keywords": [
        "samarqand",
        "viloyatida",
        "davlat",
        "tadbirkorlik",
        "subyektlari",
        "rtasida",
        "zaro",
        "manfaatli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7694875"
    },
    {
      "id": -7700347,
      "title": "Davlat muassasalari va davlat ishtirokidagi korxonalarni tashkil etish, shuningdek, davlat ulushining vujudga kelishi va miqdorining o‘zgarishi bilan bog‘liq ta’sis hujjatlariga kiritiladigan o‘zgartirishlarni Davlat aktivlarini boshqarish agentligi bilan kelishish tartibi to‘g‘risidagi nizomni tasdiqlash haqida",
      "date": "25.08.2025",
      "number": "537",
      "keywords": [
        "davlat",
        "muassasalari",
        "davlat",
        "ishtirokidagi",
        "korxonalarni",
        "tashkil",
        "etish",
        "shuningdek"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7700347"
    },
    {
      "id": 7643501,
      "title": "Oʻzbekiston Respublikasi “Umumiy harbiy majburiyat va harbiy xizmat toʻgʻrisida”gi qonuni, Vazirlar Mahkamasining 2003-yil 4-martdagi 119-sonli “Oʻzbekiston Respublikasi fuqarolarni harbiy roʻyhatga olish toʻgʻrisida”gi Nizomiga muvofiq Vobkent tumanidagi korxona, tashkilot, muassasalar, taʼlim muassalari va oʻzini-oʻzi boshqarish organlarida harbiy hisobni olib borish va tashkillashtirish toʻgʻrisida",
      "date": "22.07.2025",
      "number": "242-2-33-Q/25",
      "keywords": [
        "oʻzbekiston",
        "umumiy",
        "harbiy",
        "majburiyat",
        "harbiy",
        "xizmat",
        "toʻgʻrisida",
        "qonuni"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7643501"
    },
    {
      "id": -7659063,
      "title": "Tadbirkorlik subyektlariga tutash hududlardan mavsumiy foydalanishni tashkil etishni yanada soddalashtirish chora-tadbirlari to‘g‘risida",
      "date": "31.07.2025",
      "number": "478",
      "keywords": [
        "tadbirkorlik",
        "subyektlariga",
        "tutash",
        "hududlardan",
        "mavsumiy",
        "foydalanishni",
        "tashkil",
        "etishni"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7659063"
    },
    {
      "id": -7354720,
      "title": "Qochoqlar maqomi to‘g‘risida",
      "date": "28.07.1951",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomi",
        "risida"
      ],
      "summary": "18-modda. O‘z korxonasida ishlash",
      "url": "https://lex.uz/uz/docs/-7354720"
    },
    {
      "id": -7333398,
      "title": "Apatrid maqomi to‘g‘risida",
      "date": "28.09.1954",
      "number": "",
      "keywords": [
        "apatrid",
        "maqomi",
        "risida"
      ],
      "summary": "18-modda. O‘z korxonasida ishlash",
      "url": "https://lex.uz/uz/docs/-7333398"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "11 bis -modda Efirga uzatish va shunga aloqador huquqlar: 1. Efirga uzatish va eshittirishni simsiz ma’lum qilishning boshqa usullari, efirga uzatilgan asarni simlar orqali yoki efirga takroran uzatish yo‘li bilan ommaga ma’lum qilish, efirga uzatilgan asarni radiokarnay yoki o‘xshash moslamalar yordamida ommaga ma’lum qilish; 2. Majburiy litsenziyalar; 3. Yozuvlar; qisqa muddat foydalaniladigan yozuvlar",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "13-modda Musiqa asarlarini va ularga taalluqli har qanday matnlarni yozish huquqiga nisbatan yo‘l qo‘yilgan cheklashlar: 1. Majburiy litsenziyalar; 2. O‘tish choralari; 3. Muallafdan beruxsat tayyorlangan ekzemplyarlarni olib kirishda xatlash",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "14-modda Kinematografik asarlar va ularga tegishli huquqlar: 1. Kinematografik qayta yaratish va takrorlash; tarqatish; takrorlangan yoki shu tarzda qayta yaratilgan asarlarni elektr simi orqali omma oldida namoyish qilish va ommaga ma’lum qilish; 2. Kinematografik asarlarni qayta yaratish; 3. Majburiy litsenziyalarning qo‘llanmasligi",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "II modda Tarjimaga bo‘lgan huquqlarning cheklanishi: 1. Vakolatli organlar tomonidan beriladigan litsenziyalar; 2-4. Bunday litsenziyalarni berish shartlari; 5. Bunday litsenziyalar berilishi mumkin bo‘lgan maqsadlar; 6. Litsenziyalar amal qilishining tugatilishi; 7. Asosan illyustratsiyalardan tashkil topgan asarlar; 8. Muomaladan chiqarib olingan asarlar; 9. Efirga eshittirishlarni amalga oshiradigan tashkilotlar uchun litsenziyalar",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "III-modda Takrorlashga berilgan huquqlarning cheklanishi: 1. Vakolatli organ tomonidan beriladigan litsenziyalar; 2-5. Bunday litsenziyalarni berish shartlari; 6. Litsenziyalar amal qilishining to‘xtatilishi; 7. Ushbu modda qo‘llanadigan asarlar",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "IV-modda II va III moddalarga muvofiq beriladigan litsenziyalar uchun umumiy bo‘lgan qoidalar: 1 va 2. Protsedura; 3. Asar muallifining va nomining ko‘rsatilishi; 4. Nushalar eksporti; 5. Bildirishnoma; 6. Kompensatsiya",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -139240,
      "title": "Kooperatsiya to‘g‘risida",
      "date": "14.06.1991",
      "number": "295-XII",
      "keywords": [
        "kooperatsiya",
        "risida"
      ],
      "summary": "16-modda. Bog‘dorchilik shirkatlari, yakka tartibda qurilish bilan shug‘ullanuvchilar shirkatlari va o‘zga matlubot shirkatlari",
      "url": "https://lex.uz/uz/docs/-139240"
    },
    {
      "id": -1045253,
      "title": "Germaniyada “O‘zbekiston” kichik ko‘p tarmoqli korxonasining savdo markazini ochish to‘g‘risida",
      "date": "14.10.1991",
      "number": "256",
      "keywords": [
        "germaniyada",
        "zbekiston",
        "kichik",
        "tarmoqli",
        "korxonasining",
        "savdo",
        "markazini",
        "ochish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-1045253"
    },
    {
      "id": -112328,
      "title": "Ijara to‘g‘risida",
      "date": "19.11.1991",
      "number": "427-XII",
      "keywords": [
        "ijara",
        "risida"
      ],
      "summary": "II BO‘LIM. KORXONALARNI IJARAGA OLISH",
      "url": "https://lex.uz/uz/docs/-112328"
    },
    {
      "id": -376179,
      "title": "Ittifoq tasarrufida bo‘lgan birlashmalar, korxonalar va tashkilotlarni O‘zbekiston Respublikasi yurisdiksiyasiga va mulkiga o‘tkazishga doir ishlarni tashkil etish to‘g‘risida",
      "date": "22.01.1992",
      "number": "25",
      "keywords": [
        "ittifoq",
        "tasarrufida",
        "lgan",
        "birlashmalar",
        "korxonalar",
        "tashkilotlarni",
        "zbekiston",
        "yurisdiksiyasiga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-376179"
    },
    {
      "id": -379082,
      "title": "SSSR Davlat jismoniy tarbiya va sport qo‘mitasi korxona va tashkilotlarini O‘zbekiston Respublikasining yurisdiksiyasiga qabul qilish to‘g‘risida",
      "date": "23.01.1992",
      "number": "28",
      "keywords": [
        "sssr",
        "davlat",
        "jismoniy",
        "tarbiya",
        "sport",
        "mitasi",
        "korxona",
        "tashkilotlarini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-379082"
    },
    {
      "id": -398596,
      "title": "Tadbirkorlik faoliyati bilan shug‘ullanish taqiqlangan mansabdor shaxslarning ro‘yxati to‘g‘risida",
      "date": "06.03.1992",
      "number": "103",
      "keywords": [
        "tadbirkorlik",
        "faoliyati",
        "bilan",
        "shug",
        "ullanish",
        "taqiqlangan",
        "mansabdor",
        "shaxslarning"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-398596"
    },
    {
      "id": -405136,
      "title": "O‘zbekiston-Amerika “Zarafshon-Nyumont” qo‘shma korxonasining samarali ishlashini ta’minlash chora-tadbirlari va unga hukumat kafolatlarini berish to‘g‘risida",
      "date": "27.03.1992",
      "number": "151",
      "keywords": [
        "zbekiston",
        "amerika",
        "zarafshon",
        "nyumont",
        "shma",
        "korxonasining",
        "samarali",
        "ishlashini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-405136"
    },
    {
      "id": -455183,
      "title": "Toshkent shahar yo‘lovchilar tashish transporti korxonalari davlat uyushmasi (“Toshshaharyo‘lovchitrans”) faoliyatini tashkil etish masalalari to‘g‘risida",
      "date": "05.06.1992",
      "number": "266",
      "keywords": [
        "toshkent",
        "shahar",
        "lovchilar",
        "tashish",
        "transporti",
        "korxonalari",
        "davlat",
        "uyushmasi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-455183"
    },
    {
      "id": -456488,
      "title": "Temir-tersak parchalari va qora metallar chiqindilarini tayyorlash, qayta ishlash va etkazib berish korxonalarini O‘zbekiston metallurgiya zavodiga berish to‘g‘risida",
      "date": "06.06.1992",
      "number": "269",
      "keywords": [
        "temir",
        "tersak",
        "parchalari",
        "qora",
        "metallar",
        "chiqindilarini",
        "tayyorlash",
        "qayta"
      ],
      "summary": "1-ILOVA “O‘zkoopikkilamchimetall” respublika kooperativ birlashmasining O‘zbekiston metallurgiya zavodiga beriladigan bo‘linmalari RO‘YXATI",
      "url": "https://lex.uz/uz/docs/-456488"
    },
    {
      "id": -456488,
      "title": "Temir-tersak parchalari va qora metallar chiqindilarini tayyorlash, qayta ishlash va etkazib berish korxonalarini O‘zbekiston metallurgiya zavodiga berish to‘g‘risida",
      "date": "06.06.1992",
      "number": "269",
      "keywords": [
        "temir",
        "tersak",
        "parchalari",
        "qora",
        "metallar",
        "chiqindilarini",
        "tayyorlash",
        "qayta"
      ],
      "summary": "2-ILOVA “Ikkilamchiranglimetall” ishlab chiqarish birlashmasi tarkibiga qiruvchi bo‘linmalar RO‘YXATI",
      "url": "https://lex.uz/uz/docs/-456488"
    },
    {
      "id": -456488,
      "title": "Temir-tersak parchalari va qora metallar chiqindilarini tayyorlash, qayta ishlash va etkazib berish korxonalarini O‘zbekiston metallurgiya zavodiga berish to‘g‘risida",
      "date": "06.06.1992",
      "number": "269",
      "keywords": [
        "temir",
        "tersak",
        "parchalari",
        "qora",
        "metallar",
        "chiqindilarini",
        "tayyorlash",
        "qayta"
      ],
      "summary": "TEMIR-TERSAK PARChALARI VA QORA METALLAR ChIQINDILARINI TAYYoRLASh, QAYTA IShLASh VA ETKAZIB BERISh KORXONALARINI O‘ZBEKISTON METALLURGIYA ZAVODIGA BERISh TO‘G‘RISIDA",
      "url": "https://lex.uz/uz/docs/-456488"
    },
    {
      "id": -509313,
      "title": "O‘zbekiston davlat qishloq xo‘jaligi va avtomobil mashinasozligi konserni va “DEU Korporeyshn” korporatsiyasi tomonidan avtomobillar ishlab chiqaruvchi “O‘zDEUAVTO” qo‘shma korxonasi tashkil etilishi to‘g‘risida",
      "date": "05.11.1992",
      "number": "509",
      "keywords": [
        "zbekiston",
        "davlat",
        "qishloq",
        "jaligi",
        "avtomobil",
        "mashinasozligi",
        "konserni",
        "korporeyshn"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-509313"
    },
    {
      "id": -510042,
      "title": "O‘zbekiston davlat qishloq xo‘jaligi abtomobil mashinasozligi konserni va “DEU Korporeyshn” kompaniyasi tomonidan Toshkent “Zenit” zavodi negizida “O‘zDEU Elektroniks” qo‘shma korxonasi tashkil etilishi to‘g‘risida",
      "date": "10.11.1992",
      "number": "514",
      "keywords": [
        "zbekiston",
        "davlat",
        "qishloq",
        "jaligi",
        "abtomobil",
        "mashinasozligi",
        "konserni",
        "korporeyshn"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-510042"
    },
    {
      "id": -561466,
      "title": "Gugurt ishlab chiqarish bo‘yicha “O‘zellas” O‘zbekiston gretsiya qo‘shma korxonasini tashkil etish to‘g‘risida",
      "date": "22.02.1993",
      "number": "93",
      "keywords": [
        "gugurt",
        "ishlab",
        "chiqarish",
        "yicha",
        "zellas",
        "zbekiston",
        "gretsiya",
        "shma"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-561466"
    },
    {
      "id": -12328,
      "title": "Suv va suvdan foydalanish to‘g‘risida",
      "date": "06.05.1993",
      "number": "837-XII",
      "keywords": [
        "suvdan",
        "foydalanish",
        "risida"
      ],
      "summary": "IV BOB. SUVLARNING VA SUV OBYEKTLARINING HOLATIGA TA’SIR ETUVCHI KORXONALAR, INSHOOTLARNI HAMDA BOSHQA OBYEKTLARNI JOYLASHTIRISH, LOYIHALASH, QURISH, REKONSTRUKSIYA QILISH, TA’MIRLASH, TIKLASH VA ISHGA TUSHIRISH",
      "url": "https://lex.uz/uz/docs/-12328"
    },
    {
      "id": -2735258,
      "title": "Havo qatnovi to‘g‘risidagi",
      "date": "24.05.1993",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "risidagi"
      ],
      "summary": "3-modda AVIAKORXONA TAYINLASh",
      "url": "https://lex.uz/uz/docs/-2735258"
    },
    {
      "id": -2735258,
      "title": "Havo qatnovi to‘g‘risidagi",
      "date": "24.05.1993",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "risidagi"
      ],
      "summary": "8-modda TAYINLANGAN AVIAKORXONALARNING MANFAATLARI",
      "url": "https://lex.uz/uz/docs/-2735258"
    },
    {
      "id": -519733,
      "title": "“Radioelektrontexasbob” konserni va “DEU elektroniks Ko Ltd” korporatsiyasi tomonidan “AlgoDEU” qo‘shma korxonasi tashkil etilishi to‘g‘risida",
      "date": "04.06.1993",
      "number": "269",
      "keywords": [
        "radioelektrontexasbob",
        "konserni",
        "elektroniks",
        "korporatsiyasi",
        "tomonidan",
        "algodeu",
        "shma",
        "korxonasi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-519733"
    },
    {
      "id": -1193512,
      "title": "O‘zbekiston Respublikasi tijorat banklari va MDH davlatlaridagi korxonalar o‘rtasida korkrespondent hisobvaraqlar ochish to‘g‘risida",
      "date": "28.06.1993",
      "number": "318",
      "keywords": [
        "zbekiston",
        "tijorat",
        "banklari",
        "davlatlaridagi",
        "korxonalar",
        "rtasida",
        "korkrespondent",
        "hisobvaraqlar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-1193512"
    },
    {
      "id": -893620,
      "title": "“Marjon” O‘zbekiston-amerika qo‘shma korxonasini tashkil etish va uning samarali ishlashini ta’minlash chora-tadbirlari to‘g‘risida",
      "date": "24.08.1993",
      "number": "426",
      "keywords": [
        "marjon",
        "zbekiston",
        "amerika",
        "shma",
        "korxonasini",
        "tashkil",
        "etish",
        "uning"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-893620"
    },
    {
      "id": -250047,
      "title": "O‘zbekiston Respublikasidagi ma’muriy-hududiy birliklar, aholi punktlari, korxonalar, muassasalar, tashkilotlar, fizik-jug‘rofiy, geologik va boshqa toponimik obyektlarning nomlarini tartibga solish to‘g‘risida",
      "date": "03.09.1993",
      "number": "940-XII",
      "keywords": [
        "zbekiston",
        "respublikasidagi",
        "muriy",
        "hududiy",
        "birliklar",
        "aholi",
        "punktlari",
        "korxonalar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-250047"
    },
    {
      "id": -2593688,
      "title": "Havo qatnovi to‘g‘risida",
      "date": "24.11.1993",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "risida"
      ],
      "summary": "12-modda Aviakorxona vakolatxonasi va tijorat",
      "url": "https://lex.uz/uz/docs/-2593688"
    },
    {
      "id": -2593688,
      "title": "Havo qatnovi to‘g‘risida",
      "date": "24.11.1993",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "risida"
      ],
      "summary": "4-modda Aviakorxonani tayinlash va unga vakolat berish",
      "url": "https://lex.uz/uz/docs/-2593688"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -2900820,
      "title": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "date": "23.12.1993",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligiga",
        "lgan",
        "davlatlar",
        "korxonalari",
        "tarmoqlarining"
      ],
      "summary": "Mustaqil Davlatlar Hamdo‘stligiga a’zo bo‘lgan davlatlar korxonalari va tarmoqlarining ishlab chiqarish kooperatsiyasini rivojlantirishni qo‘llab-quvvatlashning umumiy shart-sharoitlari va tartibi to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2900820"
    },
    {
      "id": -195887,
      "title": "Iqtisodiy islohotlarni yanada chuqurlashtirish, xususiy mulk manfaatlarini himoya qilish va tadbirkorlikni rivojlantirish chora-tadbirlari to‘g‘risida",
      "date": "21.01.1994",
      "number": "PF-745",
      "keywords": [
        "iqtisodiy",
        "islohotlarni",
        "yanada",
        "chuqurlashtirish",
        "xususiy",
        "mulk",
        "manfaatlarini",
        "himoya"
      ],
      "summary": "IQTISODIY ISLOHOTLARNI YANADA ChUQURLAShTIRISh, XUSUSIY MULK MANFAATLARINI HIMOYA QILISh VA TADBIRKORLIKNI RIVOJLANTIRISh ChORA-TADBIRLARI TO‘G‘RISIDA",
      "url": "https://lex.uz/uz/docs/-195887"
    },
    {
      "id": -401635,
      "title": "O‘zbekiston Respublikasi korxonalari, muassasalari va tashkilotlarining nomlarini tartibga solish to‘g‘risida",
      "date": "14.02.1994",
      "number": "1030-XII",
      "keywords": [
        "zbekiston",
        "korxonalari",
        "muassasalari",
        "tashkilotlarining",
        "nomlarini",
        "tartibga",
        "solish",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-401635"
    },
    {
      "id": -825323,
      "title": "“O‘zbekiston metallurgiya kombinati” aksionerlik ishlab chiqarish birlashmasini tashkil etish to‘g‘risida",
      "date": "24.03.1994",
      "number": "159",
      "keywords": [
        "zbekiston",
        "metallurgiya",
        "kombinati",
        "aksionerlik",
        "ishlab",
        "chiqarish",
        "birlashmasini",
        "tashkil"
      ],
      "summary": "ILOVA “O‘zbekiston metallurgiya kombinati” aksionerlik ishlab chiqarish birlashmasi tarkibiga kiruvchi korxonalar RO‘YXATI",
      "url": "https://lex.uz/uz/docs/-825323"
    },
    {
      "id": -196027,
      "title": "Eksport-import operatsiyalari bo‘yicha valyuta nazoratini ta’minlash chora-tadbirlari to‘g‘risida",
      "date": "20.04.1994",
      "number": "PF-837",
      "keywords": [
        "eksport",
        "import",
        "operatsiyalari",
        "yicha",
        "valyuta",
        "nazoratini",
        "minlash",
        "chora"
      ],
      "summary": "III. Eksport va import qiluvchi korxonalarning javobgarligi",
      "url": "https://lex.uz/uz/docs/-196027"
    },
    {
      "id": -707316,
      "title": "“O‘zbat A. J.” O‘zbekiston - britaniya qo‘shma korxonasini tashkil etish to‘g‘risida",
      "date": "20.06.1994",
      "number": "309",
      "keywords": [
        "zbat",
        "zbekiston",
        "britaniya",
        "shma",
        "korxonasini",
        "tashkil",
        "etish",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-707316"
    }
  ],
  "mulk": [
    {
      "id": 7644949,
      "title": "Xalq deputatlari Sho'rchi tumani Kengashining 2025-yil 21-maydagi “O‘zbekiston Respublikasi Prezidentining 2024-yil 5-yanvardagi PQ-5-sonli qarorining 7-bandiga asosan tumanda vegetatsiya davri uchun yakuniy iste’molchilar kesimida ekinlarni sug‘orish uchun suv olish limitlarini hududlar bo‘yicha tasdiqlash to‘g‘risida tuman “Suv yetkazib berish xizmati” davlat muassasasi direktorining hisoboti haqida”gi VII-9-68-8-120-K/25-sonli qaroriga o'zgartirish va qo'shimchalar kiritish to'g'risida",
      "date": "24.07.2025",
      "number": "VII-10-101-8-120-K/25",
      "keywords": [
        "xalq",
        "deputatlari",
        "sho'rchi",
        "tumani",
        "kengashining",
        "maydagi",
        "zbekiston",
        "prezidentining"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7644949"
    },
    {
      "id": 7695337,
      "title": "Qaraózek rayonı boyınsha fermer xojalıqlarına shor juwıw hám vegetaciya dáwirinde suwǵarıw jumısları ushın ajıratılǵan sheklengen suw limitlerin qayta tastıyıqlaw haqqında",
      "date": "15.08.2025",
      "number": "VII-10-68-13-183-K/25",
      "keywords": [
        "qara",
        "rayon",
        "nsha",
        "fermer",
        "xojal",
        "qlar",
        "shor",
        "vegetaciya"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7695337"
    },
    {
      "id": 7701491,
      "title": "Xalıq deputatları Taxtakópir rayonlıq Keńesiniń 2024-jıl 18-sentyabr kúngi VI-87-167-13-189-K/24-sanlı “Rayondaǵı fermer xojalıqları, klasterler hám basqa da suw tutınıwshılarına 2024-2025-jıllardaǵı shor juwıw dáwirinde ajratılǵan suw limiti hám haqıyqıy alınatuǵın suw múǵdarın tastıyıqlaw haqqında”ǵı  sheshimine ózgeris kiritiw tuwralı",
      "date": "25.08.2025",
      "number": "VII-12-102-13-189-K/25",
      "keywords": [
        "deputatlar",
        "taxtak",
        "rayonl",
        "esini",
        "sentyabr",
        "sanl",
        "rayonda",
        "fermer"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7701491"
    },
    {
      "id": 7701518,
      "title": "Tumandagi ayrim Mahalla fuqarolar yig‘inlarida joylashgan nomsiz ko‘chalarga nom berish va takroriy nomdagi ko‘chalarning nomlarini o‘zgartirish to‘g‘risida",
      "date": "25.08.2025",
      "number": "VII-13-78-11-153-K/25",
      "keywords": [
        "tumandagi",
        "mahalla",
        "fuqarolar",
        "inlarida",
        "joylashgan",
        "nomsiz",
        "chalarga",
        "berish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7701518"
    },
    {
      "id": 7701602,
      "title": "Andijon shahridagi “Geografik ob’ektlarga nom berish va ularni qayta nomlash to‘g‘risidagi takliflarning qonun hujjatlariga muvofiqligi haqida”gi ekspert xulosasiga asosan qonun hujjatlariga muvofiq deb topilgan geografik ob’ektlar nomlari to‘g‘risida",
      "date": "26.08.2025",
      "number": "VII-3-86-1-29-K/25",
      "keywords": [
        "andijon",
        "shahridagi",
        "geografik",
        "ektlarga",
        "berish",
        "ularni",
        "qayta",
        "nomlash"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7701602"
    },
    {
      "id": 7706569,
      "title": "To‘rtko‘l tumanidagi fermer xo‘jaliklari, klasterlar va boshqa suv iste’molchilariga 2025-yil vegetatsiya davrida sug‘orish ishlari uchun ajratilgan suv limitini tasdiqlash to‘g‘risida",
      "date": "27.08.2025",
      "number": "VII-13-92-13-190-K/25",
      "keywords": [
        "rtko",
        "tumanidagi",
        "fermer",
        "jaliklari",
        "klasterlar",
        "boshqa",
        "iste",
        "molchilariga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7706569"
    },
    {
      "id": 7706644,
      "title": "Yirik investitsiya loyihalari uchun ijaraga berilgan yer uchastkalarida loyiha doirasidagi investitsiya majburiyatlarining bajarilishini monitoring qilish va investitsiya majburiyatlarini qabul qilish to‘g‘risida",
      "date": "28.08.2025",
      "number": "509-13-0-Q/25",
      "keywords": [
        "yirik",
        "investitsiya",
        "loyihalari",
        "uchun",
        "ijaraga",
        "berilgan",
        "uchastkalarida",
        "loyiha"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7706644"
    },
    {
      "id": 7711539,
      "title": "Nókis qalası boyınsha fermer xojalıqlarına vegetaciya dáwirinde suwǵarıw jumısları ushın ajıratılǵan sheklengen suw limitlerin tastıyıqlaw haqqında",
      "date": "28.08.2025",
      "number": "VI-10-98-13-195-K/25",
      "keywords": [
        "qalas",
        "nsha",
        "fermer",
        "xojal",
        "qlar",
        "vegetaciya",
        "wirinde",
        "slar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7711539"
    },
    {
      "id": 7711680,
      "title": "O'rmon fondi yerlarida o'rmon tuzish, geodeziya va xatlov ishlari  natijalari to'g'risida",
      "date": "28.08.2025",
      "number": "224-1-15-Q/25",
      "keywords": [
        "o'rmon",
        "fondi",
        "yerlarida",
        "o'rmon",
        "tuzish",
        "geodeziya",
        "xatlov",
        "ishlari"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7711680"
    },
    {
      "id": 7711842,
      "title": "O‘zbekiston Respublikasi Prezidentining 2025-yil 21-avgustdagi PF-140-sonli “Sudlar faoliyatiga sun’iy intellekt texnologiyalarini joriy etish orqali odil sudlovga erishish darajasini oshirish hamda sud tizimining moddiy-texnik ta’minotini yaxshilashga doir qo‘shimcha chora-tadbirlar to‘g‘risida”gi Farmoni ijrosini ta’minlash haqida",
      "date": "28.08.2025",
      "number": "358-9-0-Q/25",
      "keywords": [
        "zbekiston",
        "prezidentining",
        "avgustdagi",
        "sonli",
        "sudlar",
        "faoliyatiga",
        "intellekt",
        "texnologiyalarini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7711842"
    },
    {
      "id": -7707940,
      "title": "Yerosti suv olish inshootlarini suv hisoblash vositalari bilan jihozlashni ro‘yxatga olish va muhrlash bo‘yicha davlat xizmatini ko‘rsatishning ma’muriy reglamentini tasdiqlash to‘g‘risida",
      "date": "28.08.2025",
      "number": "547",
      "keywords": [
        "yerosti",
        "olish",
        "inshootlarini",
        "hisoblash",
        "vositalari",
        "bilan",
        "jihozlashni",
        "yxatga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7707940"
    },
    {
      "id": -7708027,
      "title": "2023-2030-yillarga mo‘ljallangan elektr energiyasining ulgurji va chakana bozori mexanizmlariga bosqichma-bosqich o‘tish konsepsiyasiga o‘zgartirishlar kiritish to‘g‘risida",
      "date": "29.08.2025",
      "number": "PF-152",
      "keywords": [
        "yillarga",
        "ljallangan",
        "elektr",
        "energiyasining",
        "ulgurji",
        "chakana",
        "bozori",
        "mexanizmlariga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7708027"
    },
    {
      "id": 7713813,
      "title": "Andijon shahar “Bog’i Eram” MFY hududida 57-sonli umumta’lim maktabini tashkil etish to‘g‘risida",
      "date": "29.08.2025",
      "number": "223-1-29-Q/25",
      "keywords": [
        "andijon",
        "shahar",
        "eram",
        "hududida",
        "sonli",
        "umumta",
        "maktabini",
        "tashkil"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7713813"
    },
    {
      "id": 7713893,
      "title": "Mirzaobod tumani 23-sonli boshlang‘ich ta’lim maktabiga 23-sonli umumiy o‘rta ta’lim maktabi maqomini berish to‘g‘risida",
      "date": "30.08.2025",
      "number": "241-9-125-Q/25",
      "keywords": [
        "mirzaobod",
        "tumani",
        "sonli",
        "boshlang",
        "maktabiga",
        "sonli",
        "umumiy",
        "maktabi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7713893"
    },
    {
      "id": -7711251,
      "title": "“O‘qotar va pnevmatik sport quroli hamda unga o‘q-dorilarni saqlash, tashish, berish, qabul qilish, hisobga olish va ulardan foydalanish tartibi to‘g‘risidagi yo‘riqnomani tasdiqlash haqida”gi qarorga o‘zgartirishlar kiritish to‘g‘risida",
      "date": "02.09.2025",
      "number": "2701-1",
      "keywords": [
        "qotar",
        "pnevmatik",
        "sport",
        "quroli",
        "hamda",
        "unga",
        "dorilarni",
        "saqlash"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7711251"
    },
    {
      "id": -7712688,
      "title": "Yer uchastkalarini onlayn-auksion orqali realizatsiya qilish va kadastr sohasida davlat xizmatlari ko‘rsatish tartib-taomillarini takomillashtirish yuzasidan qo‘shimcha chora-tadbirlar to‘g‘risida",
      "date": "03.09.2025",
      "number": "559",
      "keywords": [
        "uchastkalarini",
        "onlayn",
        "auksion",
        "orqali",
        "realizatsiya",
        "qilish",
        "kadastr",
        "sohasida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7712688"
    },
    {
      "id": -7716366,
      "title": "Avtomototransport vositalari uchun ro‘yxatdan o‘tkazish davlat raqami belgilarini berish tartibini soddalashtirish chora-tadbirlari to‘g‘risida",
      "date": "04.09.2025",
      "number": "562",
      "keywords": [
        "avtomototransport",
        "vositalari",
        "uchun",
        "yxatdan",
        "tkazish",
        "davlat",
        "raqami",
        "belgilarini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7716366"
    },
    {
      "id": -7716565,
      "title": "Andijon viloyati Asaka tumanidagi qishloq xo‘jaligiga mo‘ljallangan yerlardan samarali foydalanishni tashkil etish chora-tadbirlari to‘g‘risida",
      "date": "05.09.2025",
      "number": "567",
      "keywords": [
        "andijon",
        "viloyati",
        "asaka",
        "tumanidagi",
        "qishloq",
        "jaligiga",
        "ljallangan",
        "yerlardan"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7716565"
    },
    {
      "id": -7717938,
      "title": "Sud-ekspertlik faoliyatini yanada takomillashtirish va sohaga zamonaviy texnologiyalarni keng joriy etish chora-tadbirlari to‘g‘risida",
      "date": "08.09.2025",
      "number": "PQ-270",
      "keywords": [
        "ekspertlik",
        "faoliyatini",
        "yanada",
        "takomillashtirish",
        "sohaga",
        "zamonaviy",
        "texnologiyalarni",
        "keng"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7717938"
    },
    {
      "id": -7675692,
      "title": "Olimpiya va paralimpiya sport turlariga tayyorlash markazlari va sport turlari bo‘yicha ixtisoslashtirilgan davlat maktab-internatlari o‘quvchi-sportchilarining ovqatlanishiga qo‘yiladigan sanitariya qoidalari, normalari va gigiyena normativlarini (0096-25-son SanQvaN) tasdiqlash to‘g‘risida",
      "date": "27.06.2025",
      "number": "16",
      "keywords": [
        "olimpiya",
        "paralimpiya",
        "sport",
        "turlariga",
        "tayyorlash",
        "markazlari",
        "sport",
        "turlari"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7675692"
    },
    {
      "id": -7684304,
      "title": "“O‘zbekiston Respublikasining ayrim qonun hujjatlariga qurilish materiallari sohasidagi texnik jihatdan tartibga solishni yanada takomillashtirishga qaratilgan qo‘shimchalar kiritish to‘g‘risida”gi QL-107-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "01.07.2025",
      "number": "1039-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "qurilish",
        "materiallari",
        "sohasidagi",
        "texnik"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7684304"
    },
    {
      "id": -7683717,
      "title": "“Huquqiy eksperiment to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni haqida",
      "date": "01.07.2025",
      "number": "1028-V",
      "keywords": [
        "huquqiy",
        "eksperiment",
        "risida",
        "zbekiston",
        "qonuni"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7683717"
    },
    {
      "id": -7683693,
      "title": "“Huquqiy eksperiment to‘g‘risida”gi QL-65-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "01.07.2025",
      "number": "1027-V",
      "keywords": [
        "huquqiy",
        "eksperiment",
        "risida",
        "sonli",
        "zbekiston",
        "qonuni",
        "loyihasi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7683693"
    },
    {
      "id": -7678094,
      "title": "Tuproq va mineral o‘g‘itlar tarkibidagi tabiiy radionuklidlarning solishtirma faolligi va samarali solishtirma faolligi darajalariga hamda ularning radiatsiyaviy ko‘rsatkichlarini baholashga doir sanitariya qoidalari, normalari va gigiyena normativlarini (0097-25-son SanQvaN) tasdiqlash to‘g‘risida",
      "date": "04.07.2025",
      "number": "17",
      "keywords": [
        "tuproq",
        "mineral",
        "itlar",
        "tarkibidagi",
        "tabiiy",
        "radionuklidlarning",
        "solishtirma",
        "faolligi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7678094"
    },
    {
      "id": -7685710,
      "title": "“O‘zbekiston Respublikasining ayrim qonun hujjatlariga qo‘shimchalar va o‘zgartirish kiritish to‘g‘risida”gi QL-107-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida (“O‘zbekiston Respublikasining ayrim qonun hujjatlariga qurilish materiallari sohasidagi texnik jihatdan tartibga solishni yanada takomillashtirishga qaratilgan qo‘shimchalar kiritish to‘g‘risida”)",
      "date": "07.07.2025",
      "number": "1054-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "shimchalar",
        "zgartirish",
        "risida",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7685710"
    },
    {
      "id": -7685546,
      "title": "“Davlat mulkini xususiylashtirish sohasi takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida”gi QL-87-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "07.07.2025",
      "number": "1051-V",
      "keywords": [
        "davlat",
        "mulkini",
        "xususiylashtirish",
        "sohasi",
        "takomillashtirilishi",
        "munosabati",
        "bilan",
        "zbekiston"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7685546"
    },
    {
      "id": -7686331,
      "title": "“O‘zbekiston Respublikasining ayrim qonun hujjatlariga qo‘shimchalar va o‘zgartirish kiritish to‘g‘risida”gi QL-107-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida (“O‘zbekiston Respublikasining ayrim qonun hujjatlariga qurilish materiallari sohasidagi texnik jihatdan tartibga solishni yanada takomillashtirishga qaratilgan qo‘shimchalar kiritish to‘g‘risida”)",
      "date": "08.07.2025",
      "number": "1066-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "shimchalar",
        "zgartirish",
        "risida",
        "sonli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7686331"
    },
    {
      "id": 7683513,
      "title": "«Davlat mulkini xususiylashtirish sohasi takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida»gi QL-87-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "08.07.2025",
      "number": "1062-V",
      "keywords": [
        "davlat",
        "mulkini",
        "xususiylashtirish",
        "sohasi",
        "takomillashtirilishi",
        "munosabati",
        "bilan",
        "zbekiston"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7683513"
    },
    {
      "id": 7683532,
      "title": "«Davlat mulkini xususiylashtirish sohasi takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida»gi  O‘zbekiston Respublikasi Qonuni haqida",
      "date": "08.07.2025",
      "number": "1063-V",
      "keywords": [
        "davlat",
        "mulkini",
        "xususiylashtirish",
        "sohasi",
        "takomillashtirilishi",
        "munosabati",
        "bilan",
        "zbekiston"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7683532"
    },
    {
      "id": -7661766,
      "title": "Kelib chiqishi hayvonot dunyosiga mansub oziq-ovqat mahsulotlarida veterinariya dori vositalari qoldiq miqdorlarining ruxsat etilgan maksimal darajalariga doir sanitariya qoidalari, normalari va gigiyena normativlarini (0099-25-son SanQvaN) tasdiqlash to‘g‘risida",
      "date": "09.07.2025",
      "number": "19",
      "keywords": [
        "kelib",
        "chiqishi",
        "hayvonot",
        "dunyosiga",
        "mansub",
        "oziq",
        "ovqat",
        "mahsulotlarida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7661766"
    },
    {
      "id": 7653055,
      "title": "Kogon tumanidagi geografik obyektlar (ko‘cha, tor ko‘cha, berk ko‘cha)ni nomlash to‘g‘risida",
      "date": "28.07.2025",
      "number": "VII-10-71-2-36-K/25",
      "keywords": [
        "kogon",
        "tumanidagi",
        "geografik",
        "obyektlar",
        "berk",
        "nomlash",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7653055"
    },
    {
      "id": -7662472,
      "title": "O‘zbekiston xalq artisti Sherali Jo‘rayev xotirasini abadiylashtirish va uning ijodiy maktabi an’analarini munosib davom ettirishga oid chora-tadbirlar to‘g‘risida",
      "date": "28.07.2025",
      "number": "PQ-232",
      "keywords": [
        "zbekiston",
        "xalq",
        "artisti",
        "sherali",
        "rayev",
        "xotirasini",
        "abadiylashtirish",
        "uning"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7662472"
    },
    {
      "id": 7663246,
      "title": "O‘zbekiston Respublikasi Vazirlar Mahkamasining “2025-yilda davlat tomonidan ijtimoiy-iqtisodiy rivojlantirish dasturlarini amalga oshirishda fuqarolik jamiyati institutlarini ijtimoiy sheriklik asosida jalb qilish dasturini tasdiqlash to‘g‘risida” 2025-yil 8-iyuldagi 420-son hamda Namangan viloyati hokimining 2025-yil 21-iyuldagi 348-6-0-Q/25-sonli qarorlarini tumanda ijrosini taʼminlash haqida",
      "date": "30.07.2025",
      "number": "344-6-80-Q/25",
      "keywords": [
        "zbekiston",
        "vazirlar",
        "mahkamasining",
        "yilda",
        "davlat",
        "tomonidan",
        "ijtimoiy",
        "iqtisodiy"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7663246"
    },
    {
      "id": 7667361,
      "title": "Ózbekstan Respublikası Ministrler Kabinetiniń 2025-jıl 27-fevral kúngi  “Aymaqlarda 2025-jılda “kem qarjılıq hám turaqlılıqdı tamiyinlew” baǵdarı tiykarında byudjet qarjılarınan unemli paydalanıw hám nátiyjeliligin asırıw is-ilajları haqqında”ǵı bayanlamasına tiykarlanıp uyreniw jumıslarında anıqlanǵan optimizaciya esap betlerine ótkerilgen qarjılar haqqında",
      "date": "30.07.2025",
      "number": "VII-11-78-13-215-K/25",
      "keywords": [
        "zbekstan",
        "respublikas",
        "ministrler",
        "kabinetini",
        "fevral",
        "aymaqlarda",
        "qarj",
        "turaql"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7667361"
    },
    {
      "id": 7667383,
      "title": "2025-2027-yillarda Qoraqalpog‘iston Respublikasi hududida o‘rmon fondi va qishloq xo‘jaligiga mo‘ljallangan yerlar tarkibidagi sug‘orilmaydigan yer uchastkalarining (yaylovlar, suv yetib bormaydigan, unumdorligi past bo‘lgan yerlarning) yer fondi toifasini o‘zgartirish bo‘yicha komissiya tarkibi va vaqtincha tartibini tasdiqlash to‘g‘risida",
      "date": "30.07.2025",
      "number": "412-13-0-Q/25",
      "keywords": [
        "yillarda",
        "qoraqalpog",
        "iston",
        "hududida",
        "rmon",
        "fondi",
        "qishloq",
        "jaligiga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7667383"
    },
    {
      "id": -7661939,
      "title": "Raqamli kriminalistika tadqiqotlari sohasida mutaxassislar malakasini oshirish va sertifikatlangan mutaxassislarning yagona elektron reyestrini yuritish tartibini joriy etish chora-tadbirlari to‘g‘risida",
      "date": "31.07.2025",
      "number": "479",
      "keywords": [
        "raqamli",
        "kriminalistika",
        "tadqiqotlari",
        "sohasida",
        "mutaxassislar",
        "malakasini",
        "oshirish",
        "sertifikatlangan"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7661939"
    },
    {
      "id": 7669761,
      "title": "Baliqchi tuman mahalliy byudjet mablag‘laridan moliyalashtiriluvchi byudjet muassasa va tashkilotlarining 2025-yil 2-chorakda mahalliy byudjetga kiritilgan o`zgarishlar, vakant shtatlar xisobidan iqtisod qilingan hamda byudjet tashkilotlarining 2025 yilda 4-guruh harajatlaridan bo‘sh turgan mablag‘larni byudjet tashkilotlarining 2025 yilda ish haqi va ijtimoiy soliq harajatlariga yetishmaydigan qismini qoplash uchun yo‘naltirish, tuman mahalliy byudjetining 2025-yil 1-chorak daromadlar rejasini orttirib bajarilgan qismi hamda yer uchastkalariga bo’lgan huquqlarni sotishdan tushgan pul mablag’lari hisobidan shakllangan mablag‘larni yo’naltirish to‘g‘risida",
      "date": "04.08.2025",
      "number": "VII-7-66-1-18-K/25",
      "keywords": [
        "baliqchi",
        "tuman",
        "mahalliy",
        "byudjet",
        "mablag",
        "laridan",
        "moliyalashtiriluvchi",
        "byudjet"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7669761"
    },
    {
      "id": 7671656,
      "title": "Shomanay rayonında 2024-2025-jıllarda gúz-qıs dáwirinde awıl xojalıǵı eginlerin suwǵarıw hám shor juwıw ushın suw alıw limitlerine ózgeris kiritip qayta tastıyıqlaw haqqında",
      "date": "04.08.2025",
      "number": "VII-11-105-13-193-K/25",
      "keywords": [
        "shomanay",
        "rayon",
        "llarda",
        "wirinde",
        "xojal",
        "eginlerin",
        "shor",
        "limitlerine"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7671656"
    },
    {
      "id": -7667269,
      "title": "Tuman (shahar)larda iqtisodiy o‘sishga turtki beruvchi drayver loyihalarni shakllantirish va amalga oshirish tartibi to‘g‘risidagi nizomni tasdiqlash haqida",
      "date": "05.08.2025",
      "number": "495",
      "keywords": [
        "tuman",
        "shahar",
        "larda",
        "iqtisodiy",
        "sishga",
        "turtki",
        "beruvchi",
        "drayver"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7667269"
    },
    {
      "id": 7671747,
      "title": "Qaraqalpaqstan Respublikasınıń Nókis qalası hám rayonlarda  2025-jıl ushın isbilermenlik hám qala qurılısı iskerligin ámelge asırıw maqsetinde awıl xojalıǵına qaratılmaǵan jer uchastkasın ijaraǵa beriwdiń bir kvadrat metr jer uchastkası ushın eń kem muǵdarların tastıyıqlaw haqqında",
      "date": "05.08.2025",
      "number": "428-13-0-Q/25",
      "keywords": [
        "qaraqalpaqstan",
        "respublikas",
        "qalas",
        "rayonlarda",
        "isbilermenlik",
        "qala",
        "iskerligin",
        "melge"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7671747"
    },
    {
      "id": -7672412,
      "title": "Jismoniy tarbiya-sport tashkilotlarining trener-o‘qituvchilari va yo‘riqchi-uslubchilari hamda sport hakamlariga malaka toifalarini berish tizimini takomillashtirish chora-tadbirlari to‘g‘risida",
      "date": "07.08.2025",
      "number": "500",
      "keywords": [
        "jismoniy",
        "tarbiya",
        "sport",
        "tashkilotlarining",
        "trener",
        "qituvchilari",
        "riqchi",
        "uslubchilari"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7672412"
    },
    {
      "id": -7675874,
      "title": "Eshik va derazalarning xavfsizligi to‘g‘risidagi texnik reglamentni tasdiqlash haqida",
      "date": "08.08.2025",
      "number": "507",
      "keywords": [
        "eshik",
        "derazalarning",
        "xavfsizligi",
        "risidagi",
        "texnik",
        "reglamentni"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7675874"
    },
    {
      "id": -7680592,
      "title": "Kafolatlar berish tashkilotlari faoliyatini muvofiqlashtirish va tartibga solish to‘g‘risidagi nizomni tasdiqlash haqida",
      "date": "11.08.2025",
      "number": "3662",
      "keywords": [
        "kafolatlar",
        "berish",
        "tashkilotlari",
        "faoliyatini",
        "muvofiqlashtirish",
        "tartibga",
        "solish",
        "risidagi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7680592"
    },
    {
      "id": 7683275,
      "title": "“Geografik obyektlarga nom berish va ularni qayta nomlash to‘g‘risidagi takliflarning qonun hujjatlariga muvofiqligi haqida”gi ekspert xulosasiga asosan qonun hujjatlariga muvofiq deb topilgan istirohat bog‘i,  xiyobon,  ziyoratgoh  qabristonlar nomlari to‘g‘risida",
      "date": "12.08.2025",
      "number": "VII-10-86-1-17-K/25",
      "keywords": [
        "geografik",
        "obyektlarga",
        "berish",
        "ularni",
        "qayta",
        "nomlash",
        "risidagi",
        "takliflarning"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7683275"
    },
    {
      "id": -7683470,
      "title": "Madaniy meros sohasiga oid ma’muriy reglamentlarni tasdiqlash to‘g‘risida",
      "date": "13.08.2025",
      "number": "512",
      "keywords": [
        "madaniy",
        "meros",
        "sohasiga",
        "muriy",
        "reglamentlarni",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7683470"
    },
    {
      "id": -7689932,
      "title": "Faktoring elektron platformalarining axborot tizimlarida axborot xavfsizligi va kiberxavfsizlikni ta’minlash bo‘yicha minimal talablar to‘g‘risidagi nizomni tasdiqlash haqida",
      "date": "13.08.2025",
      "number": "3665",
      "keywords": [
        "faktoring",
        "elektron",
        "platformalarining",
        "axborot",
        "tizimlarida",
        "axborot",
        "xavfsizligi",
        "kiberxavfsizlikni"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7689932"
    },
    {
      "id": -7684579,
      "title": "O‘zbekistondagi bir guruh falastinlik fuqarolarga davlat g‘amxo‘rligi, mehr-shafqat tamoyillari asosida ko‘mak berish tizimini yo‘lga qo‘yish chora-tadbirlari to‘g‘risida",
      "date": "14.08.2025",
      "number": "PF-133",
      "keywords": [
        "zbekistondagi",
        "guruh",
        "falastinlik",
        "fuqarolarga",
        "davlat",
        "amxo",
        "rligi",
        "mehr"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7684579"
    },
    {
      "id": 7695798,
      "title": "Geografik obyektlarga nom berish va ularni qayta nomlash to‘g‘risida",
      "date": "15.08.2025",
      "number": "VII-10-113-3-44-K/25",
      "keywords": [
        "geografik",
        "obyektlarga",
        "berish",
        "ularni",
        "qayta",
        "nomlash",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7695798"
    },
    {
      "id": -7689991,
      "title": "“Kasb-hunar kollejlarini o‘quv-amaliy mashg‘ulotlarni o‘tkazish uchun sarflanadigan materiallar hamda zarur xom ashyo bilan ta’minlash tartibi to‘g‘risidagi nizomni tasdiqlash haqida”gi qarorga o‘zgartirishlar kiritish to‘g‘risida",
      "date": "18.08.2025",
      "number": "2427-1",
      "keywords": [
        "kasb",
        "hunar",
        "kollejlarini",
        "amaliy",
        "mashg",
        "ulotlarni",
        "tkazish",
        "uchun"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7689991"
    },
    {
      "id": -7689033,
      "title": "Davlat ro‘yxatidan o‘tkazmasdan, majburiy sertifikatlash sharti bilan tibbiyot amaliyotida qo‘llash va olib kirishga ruxsat beriladigan, O‘zbekiston Respublikasida davlat ro‘yxatidan o‘tkazilgan analoglari mavjud bo‘lmagan dori vositalari va tibbiy buyumlar ro‘yxatiga o‘zgartirish kiritish to‘g‘risida",
      "date": "18.08.2025",
      "number": "3611-1",
      "keywords": [
        "davlat",
        "yxatidan",
        "tkazmasdan",
        "majburiy",
        "sertifikatlash",
        "sharti",
        "bilan",
        "tibbiyot"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7689033"
    },
    {
      "id": -7689673,
      "title": "O‘zbekiston Respublikasi tijorat banklarining axborot xavfsizligi va kiberxavfsizligiga doir minimal talablar to‘g‘risidagi nizomni tasdiqlash haqida",
      "date": "18.08.2025",
      "number": "3669",
      "keywords": [
        "zbekiston",
        "tijorat",
        "banklarining",
        "axborot",
        "xavfsizligi",
        "kiberxavfsizligiga",
        "doir",
        "minimal"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7689673"
    },
    {
      "id": 7696140,
      "title": "Andijon viloyati maʼmuriy-hududiy chegaralarini belgilash va yer resurslarini xatlovdan oʻtkazishni muvofiqlashtiruvchi viloyat komissiyasining xulosasini koʻrib chiqish va maʼqullash haqida",
      "date": "19.08.2025",
      "number": "VII-12-203-1-0-K/25",
      "keywords": [
        "andijon",
        "viloyati",
        "muriy",
        "hududiy",
        "chegaralarini",
        "belgilash",
        "resurslarini",
        "xatlovdan"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7696140"
    },
    {
      "id": 7696180,
      "title": "Baliqchi tumanida “Suv yetkazib berish xizmati” davlat muassasasi  hududlar, manbalar va suv iste’molchilari bo‘yicha suv olish limitlarini  tasdiqlash to‘g‘risida",
      "date": "20.08.2025",
      "number": "VII-7-79-1-18-K/25",
      "keywords": [
        "baliqchi",
        "tumanida",
        "yetkazib",
        "berish",
        "xizmati",
        "davlat",
        "muassasasi",
        "hududlar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7696180"
    },
    {
      "id": -7694451,
      "title": "Davlat va nodavlat ta’lim tashkilotlarini jalb qilgan holda vaucher asosida kasb va xorijiy tillarga o‘qitish tizimini joriy qilish to‘g‘risida",
      "date": "20.08.2025",
      "number": "527",
      "keywords": [
        "davlat",
        "nodavlat",
        "tashkilotlarini",
        "jalb",
        "qilgan",
        "holda",
        "vaucher",
        "asosida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7694451"
    },
    {
      "id": -7696567,
      "title": "Sudlar faoliyatiga sun’iy intellekt texnologiyalarini joriy etish orqali odil sudlovga erishish darajasini oshirish hamda sud tizimining moddiy-texnik ta’minotini yaxshilashga doir qo‘shimcha chora-tadbirlar to‘g‘risida",
      "date": "21.08.2025",
      "number": "PF-140",
      "keywords": [
        "sudlar",
        "faoliyatiga",
        "intellekt",
        "texnologiyalarini",
        "joriy",
        "etish",
        "orqali",
        "odil"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7696567"
    },
    {
      "id": -7696346,
      "title": "Oliy ta’lim tashkilotlari talabalari uchun tayyorlangan o‘quv adabiyotlarini ekspertizadan o‘tkazish bo‘yicha davlat xizmatini ko‘rsatishning ma’muriy reglamentini tasdiqlash to‘g‘risida",
      "date": "22.08.2025",
      "number": "530",
      "keywords": [
        "oliy",
        "tashkilotlari",
        "talabalari",
        "uchun",
        "tayyorlangan",
        "adabiyotlarini",
        "ekspertizadan",
        "tkazish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7696346"
    },
    {
      "id": -7638339,
      "title": "“BMTning “Elektron hukumatni rivojlantirish indeksi”da O‘zbekiston Respublikasining reytingini yaxshilash bo‘yicha ko‘rilayotgan choralar to‘g‘risida”gi O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasining parlament so‘roviga O‘zbekiston Respublikasi raqamli texnologiyalar vaziri Sh. Shermatovning javobi haqida",
      "date": "03.06.2025",
      "number": "930-V",
      "keywords": [
        "bmtning",
        "elektron",
        "hukumatni",
        "rivojlantirish",
        "indeksi",
        "zbekiston",
        "respublikasining",
        "reytingini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7638339"
    },
    {
      "id": 7640610,
      "title": "Qońırat rayonında 2024-2025-jıldıń shor juwıw dáwiri ushın fermerler kesiminde egin túrlerine qarap suw limitin tastıyıqlaw haqqında",
      "date": "18.07.2025",
      "number": "VII-15-99-13-185-K/25",
      "keywords": [
        "rayon",
        "shor",
        "wiri",
        "fermerler",
        "kesiminde",
        "egin",
        "rlerine",
        "qarap"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7640610"
    },
    {
      "id": 7640770,
      "title": "O'zbekiston Respublikasi Vazirlar Mahkamasining 2025-yil 7-iyuldagi “Hududlarda kooperatsiyalar tashkil etish orqali aholining daromad olish manbalarini ko'paytirish chora-tadbirlari to'g'risida”gi 414-son qarori hamda viloyat hokimining 2025-yil 11-iyuldagi 357-4-0-Q/25-sonli qarori ijrosi haqida",
      "date": "18.07.2025",
      "number": "204-4-60-Q/25",
      "keywords": [
        "vazirlar",
        "mahkamasining",
        "iyuldagi",
        "hududlarda",
        "kooperatsiyalar",
        "tashkil",
        "etish",
        "orqali"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7640770"
    },
    {
      "id": 7643654,
      "title": "Qońırat rayonlıq mektepke shekemgi hám mektep bilimlendiriw bólimine qaraslı ulıwma orta bilim beriw mekteplerine balalardı qamtıp alıw boyınsha aymaqlardı (mikrouchastka) belgilew hám biriktiriw haqqında",
      "date": "23.07.2025",
      "number": "220-13-185-Q/25",
      "keywords": [
        "rayonl",
        "mektepke",
        "shekemgi",
        "mektep",
        "bilimlendiriw",
        "limine",
        "qarasl",
        "orta"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7643654"
    },
    {
      "id": 7645140,
      "title": "Kogon tuman mahalliy budjetining 2025 yil boshidagi erkin qoldiq mablag’lari hisobidan xizmat safariga mablag‘ yo’naltirish va O‘zbekiston Respublikasi Prezidentining 2024 yil 25 dekabrdagi PQ-455-sonli Qarori ijrosini ta’minlash, 2025 yil 6 oylik yakunlari bo‘yicha ijrosi va 2025 yil 6 oylik yakunlari bo’yicha tashabbusli byudjetlashtirishga oid jamoatchilik fikri asosida shakllantirilgan tadbirlarni moliyalashtirish uchun yo‘naltirilgan mablag‘lar yuzasidan ochiq byudjet jarayonlari to‘g‘risida",
      "date": "24.07.2025",
      "number": "VII-10-65-2-36-K/25",
      "keywords": [
        "kogon",
        "tuman",
        "mahalliy",
        "budjetining",
        "boshidagi",
        "erkin",
        "qoldiq",
        "mablag"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7645140"
    },
    {
      "id": 7645742,
      "title": "Kegeyli rayonında suwdan paydalanıwshılar kesiminde vegetaciya dáwirinde awıl xojalıǵı eginlerin suwǵarıw ushın suw alıw limitlerin tastıyıqlaw haqqında",
      "date": "24.07.2025",
      "number": "VII-10-78-13-184-K/25",
      "keywords": [
        "kegeyli",
        "rayon",
        "suwdan",
        "paydalan",
        "kesiminde",
        "vegetaciya",
        "wirinde",
        "xojal"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7645742"
    },
    {
      "id": 7648178,
      "title": "O‘zbekiston Respublikasining “Geografik obyektlarning nomlari to‘g‘risida”gi Qonuniga asosan tumandagi 7 ta mahallaning chegaralari aniq belgilangan hududdagi ko‘chalarni toifalar (ko‘cha, shoh ko‘cha, tor ko‘cha, berk ko‘cha)ga ajratish va nomsiz ko‘chalarni nomlash to‘g‘risida",
      "date": "26.07.2025",
      "number": "VII-15-81-2-38-K/25",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "geografik",
        "obyektlarning",
        "nomlari",
        "risida",
        "qonuniga",
        "asosan"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7648178"
    },
    {
      "id": -7652780,
      "title": "“Mikromoliya tashkiloti va lombard faoliyati sohasidagi ruxsat berish va xabardor qilish tartib-taomillaridan o‘tish tartibi to‘g‘risidagi nizomni tasdiqlash haqida”gi qarorga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida",
      "date": "28.07.2025",
      "number": "3423-1",
      "keywords": [
        "mikromoliya",
        "tashkiloti",
        "lombard",
        "faoliyati",
        "sohasidagi",
        "ruxsat",
        "berish",
        "xabardor"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7652780"
    },
    {
      "id": -7651631,
      "title": "Yer uchastkalarini ijaraga oluvchilarning mustaqilligini oshirish va yuqori qo‘shilgan qiymatga ega qishloq xo‘jaligi mahsulotlarini yetishtirishga asoslangan yangi tizim joriy etilgani munosabati bilan O‘zbekiston Respublikasi Hukumatining ayrim qarorlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida",
      "date": "28.07.2025",
      "number": "469",
      "keywords": [
        "uchastkalarini",
        "ijaraga",
        "oluvchilarning",
        "mustaqilligini",
        "oshirish",
        "yuqori",
        "shilgan",
        "qiymatga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7651631"
    },
    {
      "id": -7652987,
      "title": "O‘zbekiston xalq artisti Botir Zokirov xotirasini abadiylashtirish, uning ijodiy merosini chuqur o‘rganish va jahon miqyosida targ‘ib qilish chora-tadbirlari to‘g‘risida",
      "date": "28.07.2025",
      "number": "PQ-230",
      "keywords": [
        "zbekiston",
        "xalq",
        "artisti",
        "botir",
        "zokirov",
        "xotirasini",
        "abadiylashtirish",
        "uning"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7652987"
    },
    {
      "id": -7652975,
      "title": "Elektr energiyasini ishlab chiqarish, uzatish va taqsimlashda yuzaga keladigan texnologik sarfning ruxsat etilgan me’yorlarini hisoblash hamda tasdiqlash tartibi to‘g‘risidagi nizomni tasdiqlash haqida",
      "date": "29.07.2025",
      "number": "472",
      "keywords": [
        "elektr",
        "energiyasini",
        "ishlab",
        "chiqarish",
        "uzatish",
        "taqsimlashda",
        "yuzaga",
        "keladigan"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7652975"
    },
    {
      "id": -7654842,
      "title": "Sport federatsiyalari (uyushmalari) reyestrini yuritish va undan ma’lumotlar taqdim etish tartibi to‘g‘risidagi nizomni tasdiqlash haqidagi qarorga o‘zgartirishlar kiritish to‘g‘risida",
      "date": "29.07.2025",
      "number": "2939-1",
      "keywords": [
        "sport",
        "federatsiyalari",
        "uyushmalari",
        "reyestrini",
        "yuritish",
        "undan",
        "lumotlar",
        "taqdim"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7654842"
    },
    {
      "id": -7655202,
      "title": "Davlat xaridlarida axborot-kommunikatsiya texnologiyalaridan foydalanishni kengaytirish hamda davlat xaridlari elektron tizimi operatorlari faoliyatini yanada takomillashtirish bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida",
      "date": "30.07.2025",
      "number": "476",
      "keywords": [
        "davlat",
        "xaridlarida",
        "axborot",
        "kommunikatsiya",
        "texnologiyalaridan",
        "foydalanishni",
        "kengaytirish",
        "hamda"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7655202"
    },
    {
      "id": -5392234,
      "title": "Bo‘g‘uvchi, zaharli yoki boshqa shu kabi gazlar va bakteriologik vositalarning urushda qo‘llanilishini taqiqlash to‘g‘risida",
      "date": "17.06.1925",
      "number": "",
      "keywords": [
        "uvchi",
        "zaharli",
        "yoki",
        "boshqa",
        "kabi",
        "gazlar",
        "bakteriologik",
        "vositalarning"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-5392234"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "15-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "17-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "18-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "19-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "20-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "21-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "I BO‘LIM. BIRLAShISh ERKINLIGI",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "II BO‘LIM. BIRLAShISh HUQUQIII HIMOYA QILISh",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "III BO‘LIM. TURLI QOIDALAR",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -3462412,
      "title": "Birlashmalar erkinligi va birlashish huquqini himoya qilish to‘g‘risida",
      "date": "09.07.1948",
      "number": "87",
      "keywords": [
        "birlashmalar",
        "erkinligi",
        "birlashish",
        "huquqini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "IV BO‘LIM. YAKUNIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-3462412"
    },
    {
      "id": -2665470,
      "title": "Urush vaqtida fuqaro aholini himoya qilish to‘g‘risida",
      "date": "12.08.1949",
      "number": "",
      "keywords": [
        "urush",
        "vaqtida",
        "fuqaro",
        "aholini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "VI BOB. SHAXSIY MULK VA PUL MABLAG‘LARI",
      "url": "https://lex.uz/uz/docs/-2665470"
    },
    {
      "id": -2660045,
      "title": "Harbiy asirlar bilan qilinadigan muomala to‘g‘risida",
      "date": "12.08.1949",
      "number": "",
      "keywords": [
        "harbiy",
        "asirlar",
        "bilan",
        "qilinadigan",
        "muomala",
        "risida"
      ],
      "summary": "VIII BOB. HARBIY ASIRLARNI BIR LAGERDAN BOSHQASIGA KO‘CHIRISH",
      "url": "https://lex.uz/uz/docs/-2660045"
    },
    {
      "id": -2629153,
      "title": "Harakatdagi qurolli kuchlardagi yaradorlar va bemorlarning qismatlarini yengillashtirish to‘g‘risida",
      "date": "12.08.1949",
      "number": "",
      "keywords": [
        "harakatdagi",
        "qurolli",
        "kuchlardagi",
        "yaradorlar",
        "bemorlarning",
        "qismatlarini",
        "yengillashtirish",
        "risida"
      ],
      "summary": "V BOB BINOLAR VA MOL-MULK",
      "url": "https://lex.uz/uz/docs/-2629153"
    },
    {
      "id": -7354720,
      "title": "Qochoqlar maqomi to‘g‘risida",
      "date": "28.07.1951",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomi",
        "risida"
      ],
      "summary": "13-modda. Ko‘char va ko‘chmas mulk",
      "url": "https://lex.uz/uz/docs/-7354720"
    },
    {
      "id": -7354720,
      "title": "Qochoqlar maqomi to‘g‘risida",
      "date": "28.07.1951",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomi",
        "risida"
      ],
      "summary": "19-modda. Erkin kasblar",
      "url": "https://lex.uz/uz/docs/-7354720"
    },
    {
      "id": -7354720,
      "title": "Qochoqlar maqomi to‘g‘risida",
      "date": "28.07.1951",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomi",
        "risida"
      ],
      "summary": "21-modda. Uy-joy masalasi",
      "url": "https://lex.uz/uz/docs/-7354720"
    },
    {
      "id": -7354720,
      "title": "Qochoqlar maqomi to‘g‘risida",
      "date": "28.07.1951",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomi",
        "risida"
      ],
      "summary": "26-modda. Harakatlanish erkinligi",
      "url": "https://lex.uz/uz/docs/-7354720"
    },
    {
      "id": -7354720,
      "title": "Qochoqlar maqomi to‘g‘risida",
      "date": "28.07.1951",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomi",
        "risida"
      ],
      "summary": "30-modda. Mulkni olib chiqib ketish",
      "url": "https://lex.uz/uz/docs/-7354720"
    },
    {
      "id": -7354720,
      "title": "Qochoqlar maqomi to‘g‘risida",
      "date": "28.07.1951",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomi",
        "risida"
      ],
      "summary": "31-modda. Ularga boshpana bergan mamlakatda noqonuniy yashayotgan qochoqlar",
      "url": "https://lex.uz/uz/docs/-7354720"
    },
    {
      "id": -7354720,
      "title": "Qochoqlar maqomi to‘g‘risida",
      "date": "28.07.1951",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomi",
        "risida"
      ],
      "summary": "41-modda. Federativ davlatlar to‘g‘risidagi qaror",
      "url": "https://lex.uz/uz/docs/-7354720"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "15-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -4772006,
      "title": "Xalqaro xususiy huquq bo‘yicha Gaaga Konferensiyasi Ustavi",
      "date": "31.10.1951",
      "number": "",
      "keywords": [
        "xalqaro",
        "xususiy",
        "huquq",
        "yicha",
        "gaaga",
        "konferensiyasi",
        "ustavi"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-4772006"
    },
    {
      "id": -7333398,
      "title": "Apatrid maqomi to‘g‘risida",
      "date": "28.09.1954",
      "number": "",
      "keywords": [
        "apatrid",
        "maqomi",
        "risida"
      ],
      "summary": "13-modda. Ko‘char va ko‘chmas mulk",
      "url": "https://lex.uz/uz/docs/-7333398"
    },
    {
      "id": -7333398,
      "title": "Apatrid maqomi to‘g‘risida",
      "date": "28.09.1954",
      "number": "",
      "keywords": [
        "apatrid",
        "maqomi",
        "risida"
      ],
      "summary": "19-modda. Erkin kasblar",
      "url": "https://lex.uz/uz/docs/-7333398"
    },
    {
      "id": -7333398,
      "title": "Apatrid maqomi to‘g‘risida",
      "date": "28.09.1954",
      "number": "",
      "keywords": [
        "apatrid",
        "maqomi",
        "risida"
      ],
      "summary": "21-modda. Uy-joy masalasi",
      "url": "https://lex.uz/uz/docs/-7333398"
    },
    {
      "id": -7333398,
      "title": "Apatrid maqomi to‘g‘risida",
      "date": "28.09.1954",
      "number": "",
      "keywords": [
        "apatrid",
        "maqomi",
        "risida"
      ],
      "summary": "26-modda. Harakatlanish erkinligi",
      "url": "https://lex.uz/uz/docs/-7333398"
    },
    {
      "id": -7333398,
      "title": "Apatrid maqomi to‘g‘risida",
      "date": "28.09.1954",
      "number": "",
      "keywords": [
        "apatrid",
        "maqomi",
        "risida"
      ],
      "summary": "30-modda. Mulkni olib chiqib ketish",
      "url": "https://lex.uz/uz/docs/-7333398"
    },
    {
      "id": -7333398,
      "title": "Apatrid maqomi to‘g‘risida",
      "date": "28.09.1954",
      "number": "",
      "keywords": [
        "apatrid",
        "maqomi",
        "risida"
      ],
      "summary": "37-modda. Federativ davlatlar to‘g‘risidagi qaror",
      "url": "https://lex.uz/uz/docs/-7333398"
    },
    {
      "id": -2119697,
      "title": "Belgilarni ro‘yxatdan o‘tkazish uchun tovar va xizmatlarning xalqaro tasnifi to‘g‘risida",
      "date": "15.06.1957",
      "number": "",
      "keywords": [
        "belgilarni",
        "yxatdan",
        "tkazish",
        "uchun",
        "tovar",
        "xizmatlarning",
        "xalqaro",
        "tasnifi"
      ],
      "summary": "3-modda Ekspertlar Qo‘mitasi",
      "url": "https://lex.uz/uz/docs/-2119697"
    },
    {
      "id": -5065245,
      "title": "Farg‘ona markazida sug‘orish va yerlarni rivojlantirish bo‘yicha xududiy kolxozlar kengashlari va O‘zbekiston SSJ Suv xo‘jaligi vazirligining Farg‘ona va Andijon viloyatlaridagi suv xo‘jaligi trestlarini tashkil etish bilan bog‘liq tadbirlar to‘g‘risida",
      "date": "06.04.1961",
      "number": "251",
      "keywords": [
        "farg",
        "markazida",
        "orish",
        "yerlarni",
        "rivojlantirish",
        "yicha",
        "xududiy",
        "kolxozlar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-5065245"
    },
    {
      "id": -7210294,
      "title": "Ijrochilar, fonogrammalar tayyorlovchilar va eshittirish olib boruvchi tashkilotlar huquqlarini muhofaza qilish to‘g‘risida",
      "date": "26.10.1961",
      "number": "",
      "keywords": [
        "ijrochilar",
        "fonogrammalar",
        "tayyorlovchilar",
        "eshittirish",
        "olib",
        "boruvchi",
        "tashkilotlar",
        "huquqlarini"
      ],
      "summary": "15-modda [Ruxsat berilgan istisnolar: 1. Maxsus cheklashlar; 2. Mualliflik huquqining muhofaza qilinishiga nisbatan cheklashlarga tenglashtirilgan cheklashlar]",
      "url": "https://lex.uz/uz/docs/-7210294"
    },
    {
      "id": -7355515,
      "title": "Qochoqlar maqomlariga taalluqli bayonnoma",
      "date": "31.01.1967",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomlariga",
        "taalluqli",
        "bayonnoma"
      ],
      "summary": "6-modda. Federativ davlatlar to‘g‘risidagi modda",
      "url": "https://lex.uz/uz/docs/-7355515"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "1-modda Tashkilotni ta’sis etish",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "10-modda Qarorgoh",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "11-modda Moliyalashtirish",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "12-modda Huquqqa layoqatliligi; imtiyozlar va immunitetlar",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "13-modda Boshqa tashkilotlar bilan aloqalar",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "14-modda Konvensiyani imzolash, ratifikatsiya qilish va unga a’zo bo‘lish",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "15-modda Konvensiyani kuchga kirishi",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "16-modda Qo‘shimcha shart",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "17-modda O‘zgartishlar",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "18-modda Denonsatsiya",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "19-modda Bildirishnoma",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "2-modda Ta’riflar",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "20-modda Yakuniy qoidalar",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "21-modda O‘tish davri qoidalari",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "3-modda Tashkilotning maqsadi",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "4-modda Funksiyalari",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "5-modda A’zolik",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "6-modda Bosh Assambleya",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "7-modda Konferensiya",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "8-modda Muvofiqlashtiruvchi qo‘mita",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "9-modda Xalqaro byuro",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -2600169,
      "title": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "date": "14.07.1967",
      "number": "",
      "keywords": [
        "butunjahon",
        "intellektual",
        "mulk",
        "tashkilotini",
        "etish"
      ],
      "summary": "Butunjahon intellektual mulk tashkilotini ta’sis etish",
      "url": "https://lex.uz/uz/docs/-2600169"
    },
    {
      "id": -1345377,
      "title": "Sanoat namunalarining xalqaro tasnifini ta’sis etish to‘g‘risida",
      "date": "08.10.1968",
      "number": "",
      "keywords": [
        "sanoat",
        "namunalarining",
        "xalqaro",
        "tasnifini",
        "etish",
        "risida"
      ],
      "summary": "13-modda Territoriya",
      "url": "https://lex.uz/uz/docs/-1345377"
    },
    {
      "id": -5346573,
      "title": "Butunjahon turizm tashkiloti Nizomi",
      "date": "27.09.1970",
      "number": "",
      "keywords": [
        "butunjahon",
        "turizm",
        "tashkiloti",
        "nizomi"
      ],
      "summary": "Ovoz berish 28-modda",
      "url": "https://lex.uz/uz/docs/-5346573"
    },
    {
      "id": -2739983,
      "title": "Madaniy boyliklarni noqonuniy ravishda olib kelish, olib ketish va ularga bo‘lgan egalik huquqini o‘zgaga berishni man etish va oldini olishga qaratilgan chora-tadbirlar to‘g‘risida",
      "date": "17.11.1970",
      "number": "",
      "keywords": [
        "madaniy",
        "boyliklarni",
        "noqonuniy",
        "ravishda",
        "olib",
        "kelish",
        "olib",
        "ketish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2739983"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "10 bis -modda Asarlardan erkin foydalanish mumkin bo‘lgan qo‘shimcha holatlar: 1. Muayyan maqolalar va efirga uzatilgan asarlardan; 2. Kundalik hodisalar bilan bog‘liq namoyish qilingan yoki o‘qib eshittirilgan asarlardan",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "10-modda Asarlardan erkin foydalanishning muayyan holatlari; 1. Iqtiboslar; 2. O‘qitish uchun illyustratsiyalar; manba va muallifni ko‘rsatish",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "11 ter -modda Adabiy asarlarga nisbatan muayyan huquqlar: 1. Ommaviy o‘qishga va ommaga ma’lum qilish uchun o‘qishga nisbatan huquq; 2. Tarjimalar xususida",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "14 ter -modda San’at asarlari va qo‘lyozmalarga “o‘z ulushi bilan qatnashish huquqi”: 1. Qayta sotishdan tushgan ulushga bo‘lgan huquq; 2. Qo‘llanadigan qonunchilik; 3. Protsedura",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "22-modda Assambleya: 1. Ta’sis etilishi va tarkibi; 2. Vazifalari; 3. Kvorum, ovoz berish, kuzatuvchilar; 4. Chaqirish; 5. Protsedura qoidalari Assambleya: 1. Uchrejdeniye i sostav; 2. Zadachi; 3. Kvorum, golosovaniye, nablyudateli; 4. Soziv; 5. Pravila protseduri",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "23-modda Ijroiya qumitasi: 1. Ta’sis etilishi; 2. Tarkibi; 3. A’zolar soni; 4. Geografik taqsimlanishi; maxsus bitimlar; 5. Qayta saylov muddati, chegaralari, saylov qoidalari; 6. Vazifalari; 7. Chaqirilishi; 8. Kvorum, ovoz berish; 9. Kuzatuvchilar; 10. Protsedura qoidalari.",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "24-modda Xalqaro byuro: 1. Umumiy vazifalar, Bosh direktor; 2. Umumiy axborot; 3. Jurnal; 4. Mamlakatlarga taqdim etiladigan axborot; 5. Tadqiqotlar va xizmatlar; 6. Majlislarda qatnashish; 7. Qayta ko‘rib chiqish bo‘yicha konferensiyalar; 8. Boshqa vazifalar",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "27-modda Qayta ko‘rib chiqish: 1. Maqsad; 2. Konferensiyalar; 3. Qabul qilish",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "30-modda Eslatmalar: 1. Eslatmalar qilish imkoniyatining cheklanganligi; 2. Avvalgi eslatmalar; tarjimaga berilgan huquqqa nisbatan eslatma; eslatmaning chiqarib olinishi",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "34-modda Ayrim ertangi qoidalarning yopilishi: 1. Avvalgi aktlarning; 2. Stokgolm akti protokolining",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "6 bis -modda Shaxsiy mulkiy bo‘lmagan huquqlar: 1. Mualliflikning e’tirof etilishini talab qilish; huquqlarni buzadigan muayyan o‘zgarishlarga va boshqa xatti-harakatlarga e’tiroz bildirish; 2. Muallif vafotidan keyin; 3. Himoya vositalari",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "9-modda Takrorlashga beriladigan huquq: 1. Umumiy qoida; 2. Yo‘l qo‘yiladigan istisnolar; 3. Ovozli va vizual yozuvlar",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -2901555,
      "title": "Bakteriologik (biologik) va toksik qurol-yarog‘larni ishlab chiqish, tayyorlash va to‘plashni man etish hamda ularni tugatish to‘g‘risida",
      "date": "10.04.1972",
      "number": "",
      "keywords": [
        "bakteriologik",
        "biologik",
        "toksik",
        "qurol",
        "yarog",
        "larni",
        "ishlab",
        "chiqish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2901555"
    },
    {
      "id": -2749728,
      "title": "Umumjahon madaniy va tabiiy merosni muhofaza qilish to‘g‘risida",
      "date": "23.11.1972",
      "number": "",
      "keywords": [
        "umumjahon",
        "madaniy",
        "tabiiy",
        "merosni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2749728"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "1-bob. Umumiy qoidalar",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "15-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "17-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "18-modda. Imzolash, ratifikatsiya qilish, qabul qilish, tasdiqlash va qo‘shilish",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "19-modda. Kuchga kirish",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "20-modda. Konteynyerlarga tegishli bojxona Konvensiyasining amal qilishini tugatish (1956-y.)",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "21-modda. Ushbu Konvensiyaga o‘zgartirish kiritish tartibi, shu jumladan unga ilovalar",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "22-modda. 1, 4, 5 va 6-ilovalariga o‘zgartirish kiritish uchun maxsus tartib",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "23-modda. Denonsatsiya",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "24-modda. Bekor qilish",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "25-modda. Nizolarni hal qilish",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "26-modda. Qo‘shimcha shartlar",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "27-modda Bildirishnoma",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "28-modda. Haqiqiy matnlar",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    },
    {
      "id": -2749700,
      "title": "Konteynyerlar xususida",
      "date": "02.12.1972",
      "number": "",
      "keywords": [
        "konteynyerlar",
        "xususida"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-2749700"
    }
  ],
  "oila": [
    {
      "id": 7712049,
      "title": "O‘zbekiston “Milliy tiklanish” demokratik partiyasi taklifiga binoan, shaharda To‘ylar, oilaviy tantanalar, ma’raka va marosimlar o‘tkazilishini tartibga solish tizimini yanada takomillashtirish to‘g‘risida",
      "date": "29.08.2025",
      "number": "VII-12-89-5-210-K/25",
      "keywords": [
        "zbekiston",
        "milliy",
        "tiklanish",
        "demokratik",
        "partiyasi",
        "taklifiga",
        "binoan",
        "shaharda"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7712049"
    },
    {
      "id": 7716231,
      "title": "Furqat tumanida To‘ylar, oilaviy tantanalar, ma’raka va marosimlar o‘tkazilishini tartibga solish tizimini yanada takomillashtirish to‘g‘risida",
      "date": "02.09.2025",
      "number": "VII-10-78-11-164-K/25",
      "keywords": [
        "furqat",
        "tumanida",
        "ylar",
        "oilaviy",
        "tantanalar",
        "raka",
        "marosimlar",
        "tkazilishini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7716231"
    },
    {
      "id": -7661944,
      "title": "Kambag‘al oilalar reyestriga kiritilgan va rasmiy band bo‘lgan yolg‘iz ota va onalarga farzandi uchun maktabgacha ta’lim xizmatidan foydalanishda moddiy yordam to‘lash to‘g‘risida",
      "date": "31.07.2025",
      "number": "484",
      "keywords": [
        "kambag",
        "oilalar",
        "reyestriga",
        "kiritilgan",
        "rasmiy",
        "band",
        "lgan",
        "yolg"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7661944"
    },
    {
      "id": -7683590,
      "title": "Qoraqalpog‘iston Respublikasi va Xorazm viloyatida ayrim toifadagi oilalarni toza ichimlik suvi bilan ta’minlashga qaratilgan qo‘shimcha chora-tadbirlar to‘g‘risida",
      "date": "14.08.2025",
      "number": "515",
      "keywords": [
        "qoraqalpog",
        "iston",
        "xorazm",
        "viloyatida",
        "toifadagi",
        "oilalarni",
        "toza",
        "ichimlik"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7683590"
    },
    {
      "id": -2674804,
      "title": "Xalqaro qurolli mojarolar qurbonlarini himoya qilishga taalluqli 1949-yil 12-avgustda qabul qilingan Jeneva konvensiyalariga doir (I protokol)",
      "date": "08.06.1977",
      "number": "",
      "keywords": [
        "xalqaro",
        "qurolli",
        "mojarolar",
        "qurbonlarini",
        "himoya",
        "qilishga",
        "taalluqli",
        "avgustda"
      ],
      "summary": "74-modda — Ajralgan oilalarni birlashtirish",
      "url": "https://lex.uz/uz/docs/-2674804"
    },
    {
      "id": -5000050,
      "title": "SSR Ministrlar Sovetining 1981-yil 17-fevraldagi 193-sonli “Harbiy xizmatchilar, harbiy xizmatga majburlar, harbiy xizmatdan iste’foga chiqarilgan shaxslar va ularning oilalari uchun imtiyozlar to‘g‘risidagi nizomni tasdiqlash haqida”gi qarori",
      "date": "02.03.1981",
      "number": "179",
      "keywords": [
        "ministrlar",
        "sovetining",
        "fevraldagi",
        "sonli",
        "harbiy",
        "xizmatchilar",
        "harbiy",
        "xizmatga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-5000050"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "1-modda Huquqiy himoyani ta’minlash",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "11-modda Hujjatlarni topshirishni tasdiqlash",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "12-modda Diplomatik vakolatxonalar va konsullik muassasalarining vakolatlari",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "13-modda Hujjatlarning haqiqiyligi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "14-modda Fuqarolik holati haqidagi hujjatlarni va boshqa hujjatlarni yuborish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "15-modda Huquqiy masalalar bo‘yicha ma’lumotlar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "16-modda Manzillar va boshqa ma’lumotlarni aniqlash",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "17-modda Til",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "18-modda Huquqiy yordam ko‘rsatish bilan bog‘liq xarajatlar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "19-modda Huquqiy yordam ko‘rsatishni rad etish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "20-modda Umumiy qoidalar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "21-modda Shartnoma bo‘yicha sudlovga tegishlilik",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "22 1 -modda Prokurorning fuqarolik protsessida ishtirok etishi haqida so‘rov",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "22-modda Sud jarayonlarining o‘zaro bog‘liqligi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "23-modda Huquq layoqati va muomala layoqati",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "24-modda Muomala layoqati cheklangan yoki muomalaga layoqatsiz deb topish. Muomala layoqatini tiklash",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "25-modda Bedarak yo‘qolgan va vafot etgan deb topish. O‘lim faktini aniqlash",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "26-modda Nikoh tuzish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "28-modda Nikohni bekor qilish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "29-modda Ahdlashuvchi Tomonlar muassasalarining vakolatliligi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "30-modda Nikohni haqiqiy emas deb topish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "31-modda Otalik yoki onalikni belgilash va nizolashish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "32-modda Ota-onalar va bolalar o‘rtasidagi huquqiy munosabatlar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "33-modda Vasiylik va homiylik",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "34-modda Ahdlashuvchi Tomonlar muassasalarining vasiylik va homiylik masalalari bo‘yicha vakolatliligi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "35-modda Vasiylik va homiylik choralarini qo‘llash tartibi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "36-modda Vasiylik va homiylikni o‘tkazish tartibi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "37-modda Farzandlikka olish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "38-modda Egalik huquqi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "39-modda Bitimning shakli",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "4-modda Huquqiy yordam ko‘rsatish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "40-modda Ishonchnoma",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "41-modda Bitim taraflarining huquq va majburiyatlari",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "42-modda Zararni qoplash",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "43-modda Da’vo muddati",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "44-modda Tenglik prinsipi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "45-modda Meros huquqi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "46-modda Merosning davlatga o‘tkazilishi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "47-modda Vasiyatnoma",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "48-modda Meros ishlari bo‘yicha vakolatlar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "49-modda Diplomatik vakolatxona yoki konsullik muassasasining meros masalalari bo‘yicha vakolati",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "5-modda Aloqa tartibi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "50-modda Merosni himoya qilish bo‘yicha choralar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "51-modda Qarorlarni tan olish va ijro etish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "52-modda Ijro etishni talab qilmaydigan qarorlarni tan olish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "54-modda Qarorlarni tan olish va majburiy ijro etish tartibi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "55-modda Qarorlarni tan olish va ijro etishni rad etish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "56-modda Topshirish majburiyati",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "56-modda Topshirishni rad etish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "58-modda Topshirish to‘g‘risida talabnoma",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "59-modda Qo‘shimcha ma’lumotlar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "6-modda Huquqiy yordam ko‘lami",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "60-modda Qidiruv va topshirish uchun hibsga olish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "61 1 -modda Topshirish talabini olishdan oldin shaxs qidiruvi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "61 2 -modda Qamoqda ushlab turish muddatini hisoblash",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "62-modda Qamoqqa olingan yoki ushlab turilgan shaxsni ozod qilish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "63-modda Topshirishni kechiktirish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "64-modda Vaqtinchalik topshirish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "66-modda Topshirilgan shaxsni jinoiy javobgarlikka tortish chegarasi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "67 1 -modda Takroran ushlab turish yoki qamoqqa olish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "67-modda Topshirilgan shaxsni o‘tkazish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "68-modda Qayta topshirish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "70-modda Tranzit o‘tkazish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "71-modda Topshirish va tranzit o‘tkazish bilan bog‘liq xarajatlar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "72-modda Jinoiy ta’qibni amalga oshirish majburiyati",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "73-modda Jinoiy ta’qibni amalga oshirish to‘g‘risida topshiriq",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "75-modda Qaror qabul qilishning oqibatlari",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "76 1 -modda Hukmlarni tan olish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "76-modda Javobgarlikni yengillashtiruvchi yoki og‘irlashtiruvchi holatlar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "77-modda Ikki yoki undan ortiq Ahdlashuvchi tomonlarning sudlari sudloviga tegishli ishlarni ko‘rib chiqish tartibi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "78 1 -modda Qamoqqa olingan yoki ozodlikdan mahrum qilish tarzidagi jazoni o‘tayotgan shaxsni vaqtincha topshirish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "79-modda Ayblov hukmlari hamda sudlanganlik haqida ma’lumotlar to‘g‘risidagi xabarnomalar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "8-modda Ijro etish tartibi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "80-modda Aloqa qilishning maxsus tartibi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "81-modda Mazkur Konvensiyani qo‘llash bilan bog‘liq masalalar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "82-modda Konvensiyaning xalqaro shartnomalar bilan nisbati",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "83-modda Kuchga kirish tartibi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "84-modda Konvensiyaning amal qilish muddati",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "85-modda Vaqt bo‘yicha amal qilishi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "86-modda Konvensiyaga qo‘shilish tartibi",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "87-modda Depozitariyning majburiyatlari",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "I BO‘LIM UMUMIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "I Qism Topshirish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "I qism Huquqiy himoya",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "I qism Vakolat",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "II bo‘lim FUQAROLIK VA OILAVIY IShLAR BO‘YIChA HUQUQIY MUNOSABATLAR",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "II qism Huquqiy yordam",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "II qism Jinoiy ta’qibni amalga oshirish",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "II qism Shaxsiy holat",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "III bo‘lim QARORLARNI TAN OLISh VA IJRO ETISh",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "III qism Jinoyat ishlari bo‘yicha huquqiy yordam va huquqiy munosabatlarga oid maxsus qoidalar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "III qism Oilaga oid ishlar",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "IV BO‘LIM JINOYAT IShLARI BO‘YIChA HUQUQIY YORDAM VA HUQUQIY MUNOSABATLAR",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "V qism Meros",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -2741647,
      "title": "Fuqarolik, oilaviy va jinoiy ishlar bo‘yicha huquqiy yordam va huquqiy munosabatlar to‘g‘risida",
      "date": "22.01.1993",
      "number": "",
      "keywords": [
        "fuqarolik",
        "oilaviy",
        "jinoiy",
        "ishlar",
        "yicha",
        "huquqiy",
        "yordam",
        "huquqiy"
      ],
      "summary": "V bo‘lim YAKUNIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-2741647"
    },
    {
      "id": -4953674,
      "title": "Qoraqalpog‘iston Respublikasining Konstitutsiyasi",
      "date": "09.04.1993",
      "number": "",
      "keywords": [
        "qoraqalpog",
        "iston",
        "respublikasining",
        "konstitutsiyasi"
      ],
      "summary": "XIV BOB. OILA",
      "url": "https://lex.uz/uz/docs/-4953674"
    },
    {
      "id": -2595699,
      "title": "Afg‘onistonda va boshqa davlatlarda olib borilgan jangovar harakatlarda halok bo‘lgan harbiy xizmatchilarning oila a’zolariga davlat ijtimoiy yordami to‘g‘risida",
      "date": "24.09.1993",
      "number": "",
      "keywords": [
        "onistonda",
        "boshqa",
        "davlatlarda",
        "olib",
        "borilgan",
        "jangovar",
        "harakatlarda",
        "halok"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2595699"
    },
    {
      "id": -2628006,
      "title": "Ikkinchi jahon urushi qatnashchilari, nogironlari, boshqa davlatlar hududida olib borilgan jangovar harakatlar qatnashchilari, halok bo‘lgan harbiy xizmatchilar oilalariga imtiyozlar hamda kafolatlarni o‘zaro tan olish to‘g‘risida",
      "date": "15.04.1994",
      "number": "",
      "keywords": [
        "ikkinchi",
        "jahon",
        "urushi",
        "qatnashchilari",
        "nogironlari",
        "boshqa",
        "davlatlar",
        "hududida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2628006"
    },
    {
      "id": -292110,
      "title": "Bolali oilalarga davlat ijtimoiy yordami tizimini takomillashtirish to‘g‘risida",
      "date": "16.06.1994",
      "number": "PF-871",
      "keywords": [
        "bolali",
        "oilalarga",
        "davlat",
        "ijtimoiy",
        "yordami",
        "tizimini",
        "takomillashtirish",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-292110"
    }
  ],
  "transport": [
    {
      "id": 7701467,
      "title": "4R197 “Paxtakor-Uchqo‘rg‘on-Zafarobod sh.-Gagarin sh.” avtomobil yo‘lining 0-5,6 kilometrini va 7,9-8,2 kilometrida joylashgan 9 p.m uzunlikdagi ko‘prikni ta’mirlash ishlari boshlanganligi munosabati bilan mazkur yo‘lni vaqtincha yopish to‘g‘risida",
      "date": "25.08.2025",
      "number": "140-3-50-Q/25",
      "keywords": [
        "paxtakor",
        "uchqo",
        "zafarobod",
        "gagarin",
        "avtomobil",
        "lining",
        "kilometrini",
        "kilometrida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7701467"
    },
    {
      "id": 7706539,
      "title": "Farg‘ona shahridagi avtomobil yo‘llarida 2.5 “To‘xtamasdan harakatlanish taqiqlanadi” va 3.27 “To‘xtash taqiqlanadi” yo‘l belgilarini o‘rnatishga haqida",
      "date": "27.08.2025",
      "number": "240-11-169-Q/25",
      "keywords": [
        "farg",
        "shahridagi",
        "avtomobil",
        "llarida",
        "xtamasdan",
        "harakatlanish",
        "taqiqlanadi",
        "xtash"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7706539"
    },
    {
      "id": 7713921,
      "title": "Viloyat hududidan oʻtgan xalqaro ahamiyatdagi yoʻllarida harakat xavfsizligini taʼminlash, yoʻl-transport hodisalarining oldini olish chora-tadbirlarini kuchaytirish toʻgʻrisida",
      "date": "02.09.2025",
      "number": "VII-12-117-12-0-K/25",
      "keywords": [
        "viloyat",
        "hududidan",
        "oʻtgan",
        "xalqaro",
        "ahamiyatdagi",
        "yoʻllarida",
        "harakat",
        "xavfsizligini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7713921"
    },
    {
      "id": -7685507,
      "title": "“O‘zbekiston Respublikasining ayrim qonun hujjatlariga transport xizmati ko‘rsatishni tashkil etish tizimini takomillashtirishga qaratilgan o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida”gi QL-1241-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida (“O‘zbekiston Respublikasining ayrim qonun hujjatlariga transport xizmati ko‘rsatishni tashkil etish tizimini takomillashtirishga yo‘naltirilgan o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida”)",
      "date": "07.07.2025",
      "number": "1050-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "transport",
        "xizmati",
        "rsatishni",
        "tashkil"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7685507"
    },
    {
      "id": -7684666,
      "title": "“Avtomobil yo‘llari to‘g‘risida”gi QL-100-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "07.07.2025",
      "number": "1044-V",
      "keywords": [
        "avtomobil",
        "llari",
        "risida",
        "sonli",
        "zbekiston",
        "qonuni",
        "loyihasi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7684666"
    },
    {
      "id": -7686926,
      "title": "“Avtomobil yo‘llari to‘g‘risida”gi QL-100-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "08.07.2025",
      "number": "1069-V",
      "keywords": [
        "avtomobil",
        "llari",
        "risida",
        "sonli",
        "zbekiston",
        "qonuni",
        "loyihasi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7686926"
    },
    {
      "id": 7683483,
      "title": "«O‘zbekiston Respublikasining ayrim qonun hujjatlariga transport xizmati ko‘rsatishni tashkil etish tizimini takomillashtirishga qaratilgan o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida»gi QL-1241-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida («O‘zbekiston Respublikasining ayrim qonun hujjatlariga transport xizmati ko‘rsatishni tashkil etish tizimini takomillashtirishga yo‘naltirilgan o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida»)",
      "date": "08.07.2025",
      "number": "1060-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "transport",
        "xizmati",
        "rsatishni",
        "tashkil"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7683483"
    },
    {
      "id": 7683497,
      "title": "«O‘zbekiston Respublikasining ayrim qonun hujjatlariga transport xizmati ko‘rsatishni tashkil etish tizimini takomillashtirishga qaratilgan o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida»gi O‘zbekiston Respublikasi Qonuni haqida",
      "date": "08.07.2025",
      "number": "1061-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "transport",
        "xizmati",
        "rsatishni",
        "tashkil"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7683497"
    },
    {
      "id": 7683183,
      "title": "Qamashi tumani hududida umumfoydalanuvidagi avtomobil yo‘llari va markaziy ko‘chalarida fuqarolar va transport vositalarini harakati xavfsizligini ta’minlash, yo‘l transporti hodisalarini oldini olish maqsadida yo‘l belgilari o‘rnatish to‘g‘risida",
      "date": "11.08.2025",
      "number": "225-4-58-Q/25",
      "keywords": [
        "qamashi",
        "tumani",
        "hududida",
        "umumfoydalanuvidagi",
        "avtomobil",
        "llari",
        "markaziy",
        "chalarida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7683183"
    },
    {
      "id": 7683318,
      "title": "Tuman hududida og‘ir yuk ko‘taruvchi avtotransport vositalarining gabarit o‘lchovini cheklovchi temir to‘sinlar o‘rnatish to‘g‘risida",
      "date": "12.08.2025",
      "number": "VII-10-78-5-72-K/25",
      "keywords": [
        "tuman",
        "hududida",
        "taruvchi",
        "avtotransport",
        "vositalarining",
        "gabarit",
        "lchovini",
        "cheklovchi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7683318"
    },
    {
      "id": 7683434,
      "title": "Kosonsoy tuman hududida ko‘chalardagi tirbandliklarni kamaytirish, yo‘l transport hodisalarini oldini olish hamda yo‘llarda harakat xavsizligini ta’minlash va harakat ishtirokchilariga qulaylik yaratish maqsadida, tuman markazidagi ayrim ko‘chalarni bir tomonlama qilish va yo‘l harakatini nazorat qiluvchi ko‘chma mobil punktni o‘rnatish bo‘yicha to‘g’risida",
      "date": "13.08.2025",
      "number": "VII-8-80-6-80-K/25",
      "keywords": [
        "kosonsoy",
        "tuman",
        "hududida",
        "chalardagi",
        "tirbandliklarni",
        "kamaytirish",
        "transport",
        "hodisalarini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7683434"
    },
    {
      "id": 7695997,
      "title": "Oʻzbekiston Respublikasi Prezidentining 2022-yil 4-apreldagi “Avtomobil yoʻllarida inson xavfsizligini ishonchli taʼminlash va oʻlim holatlarini keskin kamaytirish chora-tadbirlari toʻgʻrisida”gi PQ-190-sonli qarori ijrosini taʼminlash toʻgʻrisida",
      "date": "18.08.2025",
      "number": "160-3-49-Q/25",
      "keywords": [
        "oʻzbekiston",
        "prezidentining",
        "apreldagi",
        "avtomobil",
        "yoʻllarida",
        "inson",
        "xavfsizligini",
        "ishonchli"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7695997"
    },
    {
      "id": -7698351,
      "title": "O‘zbekiston Respublikasi Hukumatining ayrim qarorlariga avtomototransport vositalari bilan bog‘liq savdo tartibini takomillashtirishga qaratilgan o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida",
      "date": "22.08.2025",
      "number": "535",
      "keywords": [
        "zbekiston",
        "hukumatining",
        "qarorlariga",
        "avtomototransport",
        "vositalari",
        "bilan",
        "savdo",
        "tartibini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7698351"
    },
    {
      "id": 7640745,
      "title": "40V042 “Rishton sh. – Amirobod q” avtomobil yo‘lining PK0+00 qismini, D105 “Farg‘ona halqa yo‘li” avtomobil yo‘lining PK2640+00 qismiga tutashtirish to‘g‘risida",
      "date": "18.07.2025",
      "number": "VII-11-53-11-158-K/25",
      "keywords": [
        "rishton",
        "amirobod",
        "avtomobil",
        "lining",
        "qismini",
        "farg",
        "halqa",
        "avtomobil"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7640745"
    },
    {
      "id": 7642899,
      "title": "Qamashi tumani O‘zbekiston mahallasi O‘zbekiston ko‘chasida joylashgan bolalar istirohat bog‘i oldiga fuqarolar va transport vositalarini harakati xavfsizligini ta’minlash, yo‘l transporti hodisalarini oldini olish maqsadida yo‘l belgilari o‘rnatish to‘g‘risida",
      "date": "19.07.2025",
      "number": "203-4-58-Q/25",
      "keywords": [
        "qamashi",
        "tumani",
        "zbekiston",
        "mahallasi",
        "zbekiston",
        "chasida",
        "joylashgan",
        "bolalar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7642899"
    },
    {
      "id": -7660480,
      "title": "Temir yo‘l transporti infratuzilmasi xavfsizligi to‘g‘risidagi texnik reglamentni tasdiqlash haqida",
      "date": "31.07.2025",
      "number": "480",
      "keywords": [
        "temir",
        "transporti",
        "infratuzilmasi",
        "xavfsizligi",
        "risidagi",
        "texnik",
        "reglamentni"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7660480"
    },
    {
      "id": -2629153,
      "title": "Harakatdagi qurolli kuchlardagi yaradorlar va bemorlarning qismatlarini yengillashtirish to‘g‘risida",
      "date": "12.08.1949",
      "number": "",
      "keywords": [
        "harakatdagi",
        "qurolli",
        "kuchlardagi",
        "yaradorlar",
        "bemorlarning",
        "qismatlarini",
        "yengillashtirish",
        "risida"
      ],
      "summary": "Shaxsiy guvohnoma shakli",
      "url": "https://lex.uz/uz/docs/-2629153"
    },
    {
      "id": -2629153,
      "title": "Harakatdagi qurolli kuchlardagi yaradorlar va bemorlarning qismatlarini yengillashtirish to‘g‘risida",
      "date": "12.08.1949",
      "number": "",
      "keywords": [
        "harakatdagi",
        "qurolli",
        "kuchlardagi",
        "yaradorlar",
        "bemorlarning",
        "qismatlarini",
        "yengillashtirish",
        "risida"
      ],
      "summary": "VI BOB SANITARIYA TRANSPORTLARI",
      "url": "https://lex.uz/uz/docs/-2629153"
    },
    {
      "id": -2627590,
      "title": "Dengizdagi qurolli kuchlar tarkibidan bo‘lmish yaradorlar, bemorlar va kema halokatiga uchragan shaxslarning qismatlarini yengillashtirish to‘g‘risida",
      "date": "12.08.1949",
      "number": "",
      "keywords": [
        "dengizdagi",
        "qurolli",
        "kuchlar",
        "tarkibidan",
        "lmish",
        "yaradorlar",
        "bemorlar",
        "kema"
      ],
      "summary": "Shaxsiy guvohnoma shakli",
      "url": "https://lex.uz/uz/docs/-2627590"
    },
    {
      "id": -2627590,
      "title": "Dengizdagi qurolli kuchlar tarkibidan bo‘lmish yaradorlar, bemorlar va kema halokatiga uchragan shaxslarning qismatlarini yengillashtirish to‘g‘risida",
      "date": "12.08.1949",
      "number": "",
      "keywords": [
        "dengizdagi",
        "qurolli",
        "kuchlar",
        "tarkibidan",
        "lmish",
        "yaradorlar",
        "bemorlar",
        "kema"
      ],
      "summary": "V BOB. SANITARIYA TRANSPORTLARI",
      "url": "https://lex.uz/uz/docs/-2627590"
    },
    {
      "id": -7354720,
      "title": "Qochoqlar maqomi to‘g‘risida",
      "date": "28.07.1951",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomi",
        "risida"
      ],
      "summary": "27-modda. Shaxsiy guvohnoma",
      "url": "https://lex.uz/uz/docs/-7354720"
    },
    {
      "id": -7333398,
      "title": "Apatrid maqomi to‘g‘risida",
      "date": "28.09.1954",
      "number": "",
      "keywords": [
        "apatrid",
        "maqomi",
        "risida"
      ],
      "summary": "27-modda. Shaxsiy guvohnoma",
      "url": "https://lex.uz/uz/docs/-7333398"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "I modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "I-Bob. KONVENSIYAGA TUZATIShLAR",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "II modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "II-BOB. UNGA KIRITILGAN O‘ZGARTIShLAR BILAN KONVENSSIYANI QO‘LLASh ChEGARALARI",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "III modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "III-BOB. YAKUNIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "IV modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "IX modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "V modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "VI modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "VII modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "VIII modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "X modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XI modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XII modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XIII modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XIV modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XIX modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XV modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XVI modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XVII modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XVIII modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XX modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XXI modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XXII modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XXIII modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XXIV modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XXV modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XXVI modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2671799,
      "title": "Varshavada 1929-yil 12-oktabrda imzolangan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyaga kiritilgan o‘zgartishlar to‘g‘risida",
      "date": "28.09.1955",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "xalqaro",
        "havo",
        "transporti",
        "bilan",
        "qoidalarni"
      ],
      "summary": "XXVII modda",
      "url": "https://lex.uz/uz/docs/-2671799"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "10 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "11 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "12 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "13 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "14 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "15 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "16 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "17 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "18 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "2 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "3 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "4 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "5 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "6 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "7 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "8 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "9 modda",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2673440,
      "title": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "date": "18.09.1961",
      "number": "",
      "keywords": [
        "varshava",
        "konvensiyasiga",
        "shimcha",
        "ravishda",
        "shartnoma",
        "yicha",
        "tashuvchi",
        "lmagan"
      ],
      "summary": "Varshava konvensiyasiga qo‘shimcha ravishda, shartnoma bo‘yicha tashuvchi bo‘lmagan shaxs tomonidan amalga oshiriladigan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun",
      "url": "https://lex.uz/uz/docs/-2673440"
    },
    {
      "id": -2700645,
      "title": "Xalqaro avtomobilda tashishni amalga oshiruvchi transport vositalari ekipajlari ishiga daxldor",
      "date": "01.07.1970",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobilda",
        "tashishni",
        "amalga",
        "oshiruvchi",
        "transport",
        "vositalari",
        "ekipajlari"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2700645"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "I. BOB. KONVENSIYAGA TUZATIShLAR",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "II. BOB. KONVENSIYANING O‘ZGARTIRILGAN DOIRASI",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "III-modda",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "III. BOB. YAKUNIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "IV-modda",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "IX-modda",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "V-modda",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "VI-modda",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "VII-modda",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "VIII-modda",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "X-modda",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "XI-modda",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "XII-modda",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2674323,
      "title": "Varshavada 1929-yil 12-oktabrda Imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "varshavada",
        "oktabrda",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "XIII-modda",
      "url": "https://lex.uz/uz/docs/-2674323"
    },
    {
      "id": -2673724,
      "title": "1929-yil 12-oktabrda Varshavada imzolangan va 1975-yil 25-sentabrda monrealda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "oktabrda",
        "varshavada",
        "imzolangan",
        "sentabrda",
        "monrealda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "1929-yil 12-oktabrda varshavada imzolangan va 1975-yil 25-sentabrda monrealda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2673724"
    },
    {
      "id": -2673724,
      "title": "1929-yil 12-oktabrda Varshavada imzolangan va 1975-yil 25-sentabrda monrealda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "oktabrda",
        "varshavada",
        "imzolangan",
        "sentabrda",
        "monrealda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "I-BOB. KONVENSIYAGA TUZATIShLAR",
      "url": "https://lex.uz/uz/docs/-2673724"
    },
    {
      "id": -2673724,
      "title": "1929-yil 12-oktabrda Varshavada imzolangan va 1975-yil 25-sentabrda monrealda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "oktabrda",
        "varshavada",
        "imzolangan",
        "sentabrda",
        "monrealda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "II-BOB. KONVENSIYANING O‘ZGARTIRILGAN DOIRASI",
      "url": "https://lex.uz/uz/docs/-2673724"
    },
    {
      "id": -2673724,
      "title": "1929-yil 12-oktabrda Varshavada imzolangan va 1975-yil 25-sentabrda monrealda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "oktabrda",
        "varshavada",
        "imzolangan",
        "sentabrda",
        "monrealda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "III-BOB. UMUMIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-2673724"
    },
    {
      "id": -2640797,
      "title": "1929-yil 12-oktabrda Varshavada imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "oktabrda",
        "varshavada",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "1-BOB. KONVENSIYAGA KIRITILGAN O‘ZGARTIShLAR",
      "url": "https://lex.uz/uz/docs/-2640797"
    },
    {
      "id": -2640797,
      "title": "1929-yil 12-oktabrda Varshavada imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "oktabrda",
        "varshavada",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "1929-yil 12-oktabrda Varshavada imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyani o‘zgartirish to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2640797"
    },
    {
      "id": -2640797,
      "title": "1929-yil 12-oktabrda Varshavada imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "oktabrda",
        "varshavada",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "II-BOB. KONVENSIYANING O‘ZGARTIRILGAN DOIRASI",
      "url": "https://lex.uz/uz/docs/-2640797"
    },
    {
      "id": -2640797,
      "title": "1929-yil 12-oktabrda Varshavada imzolangan va Gaagada 1955-yil 28-sentabrda tuzilgan protokol bilan o‘zgartirilgan xalqaro havo transporti bilan bog‘liq ayrim qoidalarni birlashtirish uchun Konvensiyani o‘zgartirish to‘g‘risida",
      "date": "25.09.1975",
      "number": "",
      "keywords": [
        "oktabrda",
        "varshavada",
        "imzolangan",
        "gaagada",
        "sentabrda",
        "tuzilgan",
        "protokol",
        "bilan"
      ],
      "summary": "III-BOB. YAKUNIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-2640797"
    },
    {
      "id": -2698725,
      "title": "Xalqaro bo‘lmagan tusdagi qurolli mojarolar qurbonlarini himoya qilishga taalluqli 1949-yil 12-avgustda qabul qilingan Jeneva konvensiyalariga doir (II Protokol)",
      "date": "08.06.1977",
      "number": "",
      "keywords": [
        "xalqaro",
        "lmagan",
        "tusdagi",
        "qurolli",
        "mojarolar",
        "qurbonlarini",
        "himoya",
        "qilishga"
      ],
      "summary": "11-modda — Tibbiyot tuzilmalari va sanitariya-transport vositalari himoyasi",
      "url": "https://lex.uz/uz/docs/-2698725"
    },
    {
      "id": -2674804,
      "title": "Xalqaro qurolli mojarolar qurbonlarini himoya qilishga taalluqli 1949-yil 12-avgustda qabul qilingan Jeneva konvensiyalariga doir (I protokol)",
      "date": "08.06.1977",
      "number": "",
      "keywords": [
        "xalqaro",
        "qurolli",
        "mojarolar",
        "qurbonlarini",
        "himoya",
        "qilishga",
        "taalluqli",
        "avgustda"
      ],
      "summary": "14-modda — Shaxsiy guvohnoma",
      "url": "https://lex.uz/uz/docs/-2674804"
    },
    {
      "id": -2674804,
      "title": "Xalqaro qurolli mojarolar qurbonlarini himoya qilishga taalluqli 1949-yil 12-avgustda qabul qilingan Jeneva konvensiyalariga doir (I protokol)",
      "date": "08.06.1977",
      "number": "",
      "keywords": [
        "xalqaro",
        "qurolli",
        "mojarolar",
        "qurbonlarini",
        "himoya",
        "qilishga",
        "taalluqli",
        "avgustda"
      ],
      "summary": "I BOB. SHAXSIY GUVOHNOMA",
      "url": "https://lex.uz/uz/docs/-2674804"
    },
    {
      "id": -2674804,
      "title": "Xalqaro qurolli mojarolar qurbonlarini himoya qilishga taalluqli 1949-yil 12-avgustda qabul qilingan Jeneva konvensiyalariga doir (I protokol)",
      "date": "08.06.1977",
      "number": "",
      "keywords": [
        "xalqaro",
        "qurolli",
        "mojarolar",
        "qurbonlarini",
        "himoya",
        "qilishga",
        "taalluqli",
        "avgustda"
      ],
      "summary": "XATARLI XIZMAT SAFARIDAGI JURNALISTNING GUVOHNOMASI",
      "url": "https://lex.uz/uz/docs/-2674804"
    },
    {
      "id": -1024733,
      "title": "Avtomototransport vositalarini xarid  qilish-sotish, almashtirish va hadya etish bitimlarini  rasmiylashtirish tartibi to‘g‘risida",
      "date": "16.09.1991",
      "number": "233",
      "keywords": [
        "avtomototransport",
        "vositalarini",
        "xarid",
        "qilish",
        "sotish",
        "almashtirish",
        "hadya",
        "etish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-1024733"
    },
    {
      "id": -2739706,
      "title": "Transport sohasidagi prinsiplar va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "30.12.1991",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "prinsiplar",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2739706"
    },
    {
      "id": -2896302,
      "title": "Mustaqil Davlatlar Hamdo‘stligida temir yo‘l transportini muvofiqlashtiruvchi organlar haqida",
      "date": "14.02.1992",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligida",
        "temir",
        "transportini",
        "muvofiqlashtiruvchi",
        "organlar"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2896302"
    },
    {
      "id": -795761,
      "title": "O‘zbekiston Respublikasi hududida joylashgan havo-desant qo‘shinlari, harbiy-transport aviatsiyasi, razvedka va ta’minot qismlari to‘g‘risida",
      "date": "18.05.1992",
      "number": "PF-402",
      "keywords": [
        "zbekiston",
        "hududida",
        "joylashgan",
        "havo",
        "desant",
        "shinlari",
        "harbiy",
        "transport"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-795761"
    },
    {
      "id": -167367,
      "title": "O‘zbekiston Respublikasi havo transportining xavfsizligini ta’minlash choralari to‘g‘risida",
      "date": "28.08.1992",
      "number": "PF-464",
      "keywords": [
        "zbekiston",
        "havo",
        "transportining",
        "xavfsizligini",
        "minlash",
        "choralari",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-167367"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "15-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "17-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "18-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "19-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "20-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2605317,
      "title": "Havo transporti to‘g‘risida",
      "date": "16.12.1992",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "risida"
      ],
      "summary": "Havo transporti to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2605317"
    },
    {
      "id": -2653421,
      "title": "Temir yo‘l transporti sohasidagi hamkorlik to‘g‘risida",
      "date": "20.02.1993",
      "number": "",
      "keywords": [
        "temir",
        "transporti",
        "sohasidagi",
        "hamkorlik",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2653421"
    },
    {
      "id": -2651416,
      "title": "Transportda tashish sohasida hamkorlik to‘g‘risida",
      "date": "20.02.1993",
      "number": "",
      "keywords": [
        "transportda",
        "tashish",
        "sohasida",
        "hamkorlik",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2651416"
    },
    {
      "id": -2604692,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "20.02.1993",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2604692"
    },
    {
      "id": -2638558,
      "title": "Xalqaro avtomobil qatnovi to‘g‘risida",
      "date": "20.02.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "qatnovi",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2638558"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2738502,
      "title": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "date": "19.03.1993",
      "number": "",
      "keywords": [
        "transport",
        "sohasidagi",
        "hamkorlik",
        "prinsiplari",
        "zaro",
        "munosabatlarning",
        "shart",
        "sharoitlari"
      ],
      "summary": "Transport sohasidagi hamkorlik prinsiplari va o‘zaro munosabatlarning shart-sharoitlari to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2738502"
    },
    {
      "id": -2891260,
      "title": "Transport va aloqa sohasidagi munosabatlarning asosiy tamoyillari xaqida",
      "date": "14.04.1993",
      "number": "",
      "keywords": [
        "transport",
        "aloqa",
        "sohasidagi",
        "munosabatlarning",
        "asosiy",
        "tamoyillari",
        "xaqida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2891260"
    },
    {
      "id": -12328,
      "title": "Suv va suvdan foydalanish to‘g‘risida",
      "date": "06.05.1993",
      "number": "837-XII",
      "keywords": [
        "suvdan",
        "foydalanish",
        "risida"
      ],
      "summary": "XVIII bob. SUV OBYEKTLARIDAN SUV TRANSPORTI EHTIYOJLARI UCHUN FOYDALANISH",
      "url": "https://lex.uz/uz/docs/-12328"
    },
    {
      "id": -55594,
      "title": "O‘zbekiston Respublikasining Havo kodeksi",
      "date": "07.05.1993",
      "number": "",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "havo",
        "kodeksi"
      ],
      "summary": "IV BO‘LIM. HAVO TRANSPORTIDA TASHISH VA AVIATSIYA ISHLARI",
      "url": "https://lex.uz/uz/docs/-55594"
    },
    {
      "id": -55594,
      "title": "O‘zbekiston Respublikasining Havo kodeksi",
      "date": "07.05.1993",
      "number": "",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "havo",
        "kodeksi"
      ],
      "summary": "VII bob. HAVO TRANSPORTI QATNOVI",
      "url": "https://lex.uz/uz/docs/-55594"
    },
    {
      "id": -55594,
      "title": "O‘zbekiston Respublikasining Havo kodeksi",
      "date": "07.05.1993",
      "number": "",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "havo",
        "kodeksi"
      ],
      "summary": "XIV bob. HAVO TRANSPORTIDA TASHISH",
      "url": "https://lex.uz/uz/docs/-55594"
    },
    {
      "id": -1191118,
      "title": "Yo‘lovchi transportidan foydalanish samaradorligini oshirish to‘g‘risida",
      "date": "16.06.1993",
      "number": "289",
      "keywords": [
        "lovchi",
        "transportidan",
        "foydalanish",
        "samaradorligini",
        "oshirish",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-1191118"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "15-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "17-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "18-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2655062,
      "title": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "date": "18.10.1993",
      "number": "",
      "keywords": [
        "xalqaro",
        "avtomobil",
        "aloqasi",
        "risida"
      ],
      "summary": "Xalqaro avtomobil aloqasi to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2655062"
    },
    {
      "id": -2736381,
      "title": "Havo transporti sohasida hamkorlik to‘g‘risida",
      "date": "26.04.1994",
      "number": "",
      "keywords": [
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2736381"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "15-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "17-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "18-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "19-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "20-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "21-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "22-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "23-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2488958,
      "title": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "date": "25.05.1994",
      "number": "",
      "keywords": [
        "havo",
        "qatnovi",
        "havo",
        "transporti",
        "sohasida",
        "hamkorlik",
        "qilish",
        "risida"
      ],
      "summary": "Havo qatnovi va havo transporti sohasida hamkorlik qilish to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2488958"
    },
    {
      "id": -2901474,
      "title": "O‘zbekiston Respublikasi bilan Turkiya Jumhuriyati o‘rtasida Konsullik Konvensiyasi",
      "date": "23.06.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "turkiya",
        "jumhuriyati",
        "rtasida",
        "konsullik",
        "konvensiyasi"
      ],
      "summary": "10-modda Shaxsiy guvohnoma",
      "url": "https://lex.uz/uz/docs/-2901474"
    },
    {
      "id": -2901474,
      "title": "O‘zbekiston Respublikasi bilan Turkiya Jumhuriyati o‘rtasida Konsullik Konvensiyasi",
      "date": "23.06.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "turkiya",
        "jumhuriyati",
        "rtasida",
        "konsullik",
        "konvensiyasi"
      ],
      "summary": "31-modda Transport vositalarini sug‘urta qilish",
      "url": "https://lex.uz/uz/docs/-2901474"
    }
  ],
  "ijtimoiy": [
    {
      "id": -7719729,
      "title": "Islohotlarni huquqiy jihatdan ta’minlash samaradorligini oshirish hamda ijtimoiy munosabatlarni tartibga solishda vazirlik va idoralarning mas’uliyati va tashabbuskorligini kuchaytirish chora-tadbirlari to‘g‘risida",
      "date": "08.09.2025",
      "number": "PF-161",
      "keywords": [
        "islohotlarni",
        "huquqiy",
        "jihatdan",
        "minlash",
        "samaradorligini",
        "oshirish",
        "hamda",
        "ijtimoiy"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7719729"
    },
    {
      "id": -7691109,
      "title": "“Ijtimoiy ish to‘g‘risida”gi QL-104-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "28.07.2025",
      "number": "1138-V",
      "keywords": [
        "ijtimoiy",
        "risida",
        "sonli",
        "zbekiston",
        "qonuni",
        "loyihasi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7691109"
    },
    {
      "id": -7695691,
      "title": "“Ijtimoiy ish to‘g‘risida”gi QL-104-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "29.07.2025",
      "number": "1149-V",
      "keywords": [
        "ijtimoiy",
        "risida",
        "sonli",
        "zbekiston",
        "qonuni",
        "loyihasi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7695691"
    },
    {
      "id": 7663158,
      "title": "Payariq tumanini kompleks ijtimoiy-iqtisodiy rivojlantirish dasturi ijrosini taminlash yuzasidan amalga oshirilgan ishlar yuzasidan tuman hokimining birinchi o‘rinbosari Sh. Eshonqulovning hisoboti to‘g‘risida",
      "date": "29.07.2025",
      "number": "VII-10-90-7-100-K/25",
      "keywords": [
        "payariq",
        "tumanini",
        "kompleks",
        "ijtimoiy",
        "iqtisodiy",
        "rivojlantirish",
        "dasturi",
        "ijrosini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7663158"
    },
    {
      "id": -7675843,
      "title": "Samarqand viloyatini 2030-yilga qadar ijtimoiy-iqtisodiy rivojlantirish chora-tadbirlari to‘g‘risida",
      "date": "07.08.2025",
      "number": "PQ-244",
      "keywords": [
        "samarqand",
        "viloyatini",
        "yilga",
        "qadar",
        "ijtimoiy",
        "iqtisodiy",
        "rivojlantirish",
        "chora"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7675843"
    },
    {
      "id": -7685398,
      "title": "Qoraqalpog‘iston Respublikasini ijtimoiy-iqtisodiy rivojlantirishga qaratilgan chora-tadbirlarni yanada jadallashtirish to‘g‘risida",
      "date": "14.08.2025",
      "number": "PQ-248",
      "keywords": [
        "qoraqalpog",
        "iston",
        "respublikasini",
        "ijtimoiy",
        "iqtisodiy",
        "rivojlantirishga",
        "qaratilgan",
        "chora"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7685398"
    },
    {
      "id": -7689718,
      "title": "“Ozodlikdan mahrum etishga hukm qilingan, narkologik kasallikka (surunkali alkogolizm, giyohvandlik, zaharvandlik) yo‘liqqan shaxslarga nisbatan tibbiy yo‘sindagi majburlov choralarini qo‘llash tartibi to‘g‘risidagi nizomni tasdiqlash haqida”gi buyruqqa o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida",
      "date": "18.08.2025",
      "number": "2591-3",
      "keywords": [
        "ozodlikdan",
        "mahrum",
        "etishga",
        "hukm",
        "qilingan",
        "narkologik",
        "kasallikka",
        "surunkali"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7689718"
    },
    {
      "id": -7695683,
      "title": "Yaponiya xalqaro hamkorlik agentligi (JICA) ishtirokidagi “Respublika ixtisoslashtirilgan nevrologiya va insult ilmiy-amaliy tibbiyot markazini tashkil etish” loyihasini amalga oshirish chora-tadbirlari to‘g‘risida",
      "date": "19.08.2025",
      "number": "PQ-254",
      "keywords": [
        "yaponiya",
        "xalqaro",
        "hamkorlik",
        "agentligi",
        "jica",
        "ishtirokidagi",
        "respublika",
        "ixtisoslashtirilgan"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7695683"
    },
    {
      "id": -7697210,
      "title": "Dori vositalari va tibbiy jihozlar muomalasini tartibga solishga doir qo‘shimcha chora-tadbirlar to‘g‘risida",
      "date": "19.08.2025",
      "number": "PF-137",
      "keywords": [
        "dori",
        "vositalari",
        "tibbiy",
        "jihozlar",
        "muomalasini",
        "tartibga",
        "solishga",
        "doir"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7697210"
    },
    {
      "id": 7635024,
      "title": "«Ijtimoiy ish to‘g‘risida»gi QL-104-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "23.06.2025",
      "number": "996-V",
      "keywords": [
        "ijtimoiy",
        "risida",
        "sonli",
        "zbekiston",
        "qonuni",
        "loyihasi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7635024"
    },
    {
      "id": 7635090,
      "title": "«Ijtimoiy ish to‘g‘risida»gi QL-104-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "23.06.2025",
      "number": "997-V",
      "keywords": [
        "ijtimoiy",
        "risida",
        "sonli",
        "zbekiston",
        "qonuni",
        "loyihasi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7635090"
    },
    {
      "id": 7635812,
      "title": "Deputatlarning saylov okruglaridagi ishlari samaradorligini yanada oshirish va hududlarni ijtimoiy-iqtisodiy jihatdan rivojlantirish borasida belgilangan ustuvor vazifalarning ijrosi ustidan ta’sirchan parlament nazoratini yanada kuchaytirish to‘g‘risida",
      "date": "23.06.2025",
      "number": "1000-V",
      "keywords": [
        "deputatlarning",
        "saylov",
        "okruglaridagi",
        "ishlari",
        "samaradorligini",
        "yanada",
        "oshirish",
        "hududlarni"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7635812"
    },
    {
      "id": 7635436,
      "title": "«Ijtimoiy ish to‘g‘risida»gi QL-104-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "24.06.2025",
      "number": "1003-V",
      "keywords": [
        "ijtimoiy",
        "risida",
        "sonli",
        "zbekiston",
        "qonuni",
        "loyihasi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7635436"
    },
    {
      "id": -2665470,
      "title": "Urush vaqtida fuqaro aholini himoya qilish to‘g‘risida",
      "date": "12.08.1949",
      "number": "",
      "keywords": [
        "urush",
        "vaqtida",
        "fuqaro",
        "aholini",
        "himoya",
        "qilish",
        "risida"
      ],
      "summary": "IV BOB. GIGIYENA VA TIBBIY YORDAM",
      "url": "https://lex.uz/uz/docs/-2665470"
    },
    {
      "id": -2660045,
      "title": "Harbiy asirlar bilan qilinadigan muomala to‘g‘risida",
      "date": "12.08.1949",
      "number": "",
      "keywords": [
        "harbiy",
        "asirlar",
        "bilan",
        "qilinadigan",
        "muomala",
        "risida"
      ],
      "summary": "III BOB. GIGIYENA VA TIBBIY YORDAM",
      "url": "https://lex.uz/uz/docs/-2660045"
    },
    {
      "id": -2660045,
      "title": "Harbiy asirlar bilan qilinadigan muomala to‘g‘risida",
      "date": "12.08.1949",
      "number": "",
      "keywords": [
        "harbiy",
        "asirlar",
        "bilan",
        "qilinadigan",
        "muomala",
        "risida"
      ],
      "summary": "QO‘SHMA TIBBIY KOMISSIYALAR TO‘G‘RISIDA NIZOM (112-moddaga qarang)",
      "url": "https://lex.uz/uz/docs/-2660045"
    },
    {
      "id": -7354720,
      "title": "Qochoqlar maqomi to‘g‘risida",
      "date": "28.07.1951",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomi",
        "risida"
      ],
      "summary": "IV BOB. IJTIMOIY TA’MINOT",
      "url": "https://lex.uz/uz/docs/-7354720"
    },
    {
      "id": -7333398,
      "title": "Apatrid maqomi to‘g‘risida",
      "date": "28.09.1954",
      "number": "",
      "keywords": [
        "apatrid",
        "maqomi",
        "risida"
      ],
      "summary": "IV BOB: IJTIMOIY TA’MINOT",
      "url": "https://lex.uz/uz/docs/-7333398"
    },
    {
      "id": -2686000,
      "title": "Iqtisodiy, ijtimoiy va madaniy huquqlar to‘g‘risida",
      "date": "16.12.1966",
      "number": "",
      "keywords": [
        "iqtisodiy",
        "ijtimoiy",
        "madaniy",
        "huquqlar",
        "risida"
      ],
      "summary": "I QISM",
      "url": "https://lex.uz/uz/docs/-2686000"
    },
    {
      "id": -2686000,
      "title": "Iqtisodiy, ijtimoiy va madaniy huquqlar to‘g‘risida",
      "date": "16.12.1966",
      "number": "",
      "keywords": [
        "iqtisodiy",
        "ijtimoiy",
        "madaniy",
        "huquqlar",
        "risida"
      ],
      "summary": "II QISM",
      "url": "https://lex.uz/uz/docs/-2686000"
    },
    {
      "id": -2686000,
      "title": "Iqtisodiy, ijtimoiy va madaniy huquqlar to‘g‘risida",
      "date": "16.12.1966",
      "number": "",
      "keywords": [
        "iqtisodiy",
        "ijtimoiy",
        "madaniy",
        "huquqlar",
        "risida"
      ],
      "summary": "III QISM",
      "url": "https://lex.uz/uz/docs/-2686000"
    },
    {
      "id": -2686000,
      "title": "Iqtisodiy, ijtimoiy va madaniy huquqlar to‘g‘risida",
      "date": "16.12.1966",
      "number": "",
      "keywords": [
        "iqtisodiy",
        "ijtimoiy",
        "madaniy",
        "huquqlar",
        "risida"
      ],
      "summary": "IV QISM",
      "url": "https://lex.uz/uz/docs/-2686000"
    },
    {
      "id": -2686000,
      "title": "Iqtisodiy, ijtimoiy va madaniy huquqlar to‘g‘risida",
      "date": "16.12.1966",
      "number": "",
      "keywords": [
        "iqtisodiy",
        "ijtimoiy",
        "madaniy",
        "huquqlar",
        "risida"
      ],
      "summary": "Iqtisodiy, ijtimoiy va madaniy huquqlar to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-2686000"
    },
    {
      "id": -2686000,
      "title": "Iqtisodiy, ijtimoiy va madaniy huquqlar to‘g‘risida",
      "date": "16.12.1966",
      "number": "",
      "keywords": [
        "iqtisodiy",
        "ijtimoiy",
        "madaniy",
        "huquqlar",
        "risida"
      ],
      "summary": "V QISM",
      "url": "https://lex.uz/uz/docs/-2686000"
    },
    {
      "id": -2698725,
      "title": "Xalqaro bo‘lmagan tusdagi qurolli mojarolar qurbonlarini himoya qilishga taalluqli 1949-yil 12-avgustda qabul qilingan Jeneva konvensiyalariga doir (II Protokol)",
      "date": "08.06.1977",
      "number": "",
      "keywords": [
        "xalqaro",
        "lmagan",
        "tusdagi",
        "qurolli",
        "mojarolar",
        "qurbonlarini",
        "himoya",
        "qilishga"
      ],
      "summary": "10-modda — Tibbiy faoliyat ko‘rsatayotgan shaxslarning umumiy himoyasi",
      "url": "https://lex.uz/uz/docs/-2698725"
    },
    {
      "id": -2674804,
      "title": "Xalqaro qurolli mojarolar qurbonlarini himoya qilishga taalluqli 1949-yil 12-avgustda qabul qilingan Jeneva konvensiyalariga doir (I protokol)",
      "date": "08.06.1977",
      "number": "",
      "keywords": [
        "xalqaro",
        "qurolli",
        "mojarolar",
        "qurbonlarini",
        "himoya",
        "qilishga",
        "taalluqli",
        "avgustda"
      ],
      "summary": "12-modda — Tibbiyot tuzilmalari himoyasi",
      "url": "https://lex.uz/uz/docs/-2674804"
    },
    {
      "id": -2674804,
      "title": "Xalqaro qurolli mojarolar qurbonlarini himoya qilishga taalluqli 1949-yil 12-avgustda qabul qilingan Jeneva konvensiyalariga doir (I protokol)",
      "date": "08.06.1977",
      "number": "",
      "keywords": [
        "xalqaro",
        "qurolli",
        "mojarolar",
        "qurbonlarini",
        "himoya",
        "qilishga",
        "taalluqli",
        "avgustda"
      ],
      "summary": "13-modda — Fuqaro tibbiyot tuzilmalari himoyasining to‘xtatilishi",
      "url": "https://lex.uz/uz/docs/-2674804"
    },
    {
      "id": -2674804,
      "title": "Xalqaro qurolli mojarolar qurbonlarini himoya qilishga taalluqli 1949-yil 12-avgustda qabul qilingan Jeneva konvensiyalariga doir (I protokol)",
      "date": "08.06.1977",
      "number": "",
      "keywords": [
        "xalqaro",
        "qurolli",
        "mojarolar",
        "qurbonlarini",
        "himoya",
        "qilishga",
        "taalluqli",
        "avgustda"
      ],
      "summary": "14-modda — Fuqaro tibbiyot tuzilmalarini rekvizitsiya qilishdagi cheklashlar",
      "url": "https://lex.uz/uz/docs/-2674804"
    },
    {
      "id": -2674804,
      "title": "Xalqaro qurolli mojarolar qurbonlarini himoya qilishga taalluqli 1949-yil 12-avgustda qabul qilingan Jeneva konvensiyalariga doir (I protokol)",
      "date": "08.06.1977",
      "number": "",
      "keywords": [
        "xalqaro",
        "qurolli",
        "mojarolar",
        "qurbonlarini",
        "himoya",
        "qilishga",
        "taalluqli",
        "avgustda"
      ],
      "summary": "16-modda — Tibbiy vazifalarni bajaruvchi shaxslarning umumiy himoyasi",
      "url": "https://lex.uz/uz/docs/-2674804"
    },
    {
      "id": -2658137,
      "title": "Chegaralarda yuklarni nazoratdan o‘tkazish shartlarini kelishish to‘g‘risida",
      "date": "21.10.1982",
      "number": "",
      "keywords": [
        "chegaralarda",
        "yuklarni",
        "nazoratdan",
        "tkazish",
        "shartlarini",
        "kelishish",
        "risida"
      ],
      "summary": "TIBBIY-SANITARIYA NAZORATI",
      "url": "https://lex.uz/uz/docs/-2658137"
    },
    {
      "id": -275854,
      "title": "Respublikada ijtimoiy-siyosiy vaziyatni barqarorlashtirishga doir choralar to‘g‘risida",
      "date": "21.10.1989",
      "number": "3578-XI",
      "keywords": [
        "respublikada",
        "ijtimoiy",
        "siyosiy",
        "vaziyatni",
        "barqarorlashtirishga",
        "doir",
        "choralar",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-275854"
    },
    {
      "id": -1031767,
      "title": "Toshkent pediatriya tibbiyot institutining Nukus filialini ochish to‘g‘risida",
      "date": "01.10.1991",
      "number": "251",
      "keywords": [
        "toshkent",
        "pediatriya",
        "tibbiyot",
        "institutining",
        "nukus",
        "filialini",
        "ochish",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-1031767"
    },
    {
      "id": -2896477,
      "title": "Pensiya ta’minoti sohasida Mustaqil Davlatlar Hamdo‘stligi qatnashchilari bo‘lgan davlatlarning - fuqarolari huquqlari kafolatlari to‘g‘risida",
      "date": "13.03.1992",
      "number": "",
      "keywords": [
        "pensiya",
        "minoti",
        "sohasida",
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligi",
        "qatnashchilari"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2896477"
    },
    {
      "id": -399485,
      "title": "Chernobil halokatidan ziyon ko‘rgan O‘zbekiston Respublikasida istiqomat qiluvchi fuqarolarni ijtimoiy himoyalash haqida",
      "date": "06.04.1992",
      "number": "170",
      "keywords": [
        "chernobil",
        "halokatidan",
        "ziyon",
        "rgan",
        "zbekiston",
        "respublikasida",
        "istiqomat",
        "qiluvchi"
      ],
      "summary": "IV. Bolalar va o‘smirlarni ijtimoiy himoya qilish, ularga tibbiy xizmat ko‘rsatish hamda sog‘lomlashtirish",
      "url": "https://lex.uz/uz/docs/-399485"
    },
    {
      "id": -4953674,
      "title": "Qoraqalpog‘iston Respublikasining Konstitutsiyasi",
      "date": "09.04.1993",
      "number": "",
      "keywords": [
        "qoraqalpog",
        "iston",
        "respublikasining",
        "konstitutsiyasi"
      ],
      "summary": "IX BOB. IQTISODIY VA IJTIMOIY HUQUQLAR",
      "url": "https://lex.uz/uz/docs/-4953674"
    },
    {
      "id": -128267,
      "title": "“Fuqarolarning davlat pensiya ta’minoti to‘g‘risida”gi O‘zbekiston Respublikasi Qonunini amalga kiritish tartibi haqida",
      "date": "03.09.1993",
      "number": "939-XII",
      "keywords": [
        "fuqarolarning",
        "davlat",
        "pensiya",
        "minoti",
        "risida",
        "zbekiston",
        "qonunini",
        "amalga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-128267"
    },
    {
      "id": -112314,
      "title": "Fuqarolarning davlat pensiya ta’minoti to‘g‘risida",
      "date": "03.09.1993",
      "number": "938-XII",
      "keywords": [
        "fuqarolarning",
        "davlat",
        "pensiya",
        "minoti",
        "risida"
      ],
      "summary": "Fuqarolarning davlat pensiya ta’minoti to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-112314"
    },
    {
      "id": -112314,
      "title": "Fuqarolarning davlat pensiya ta’minoti to‘g‘risida",
      "date": "03.09.1993",
      "number": "938-XII",
      "keywords": [
        "fuqarolarning",
        "davlat",
        "pensiya",
        "minoti",
        "risida"
      ],
      "summary": "I BOB. UMUMIY QOIDALAR",
      "url": "https://lex.uz/uz/docs/-112314"
    },
    {
      "id": -112314,
      "title": "Fuqarolarning davlat pensiya ta’minoti to‘g‘risida",
      "date": "03.09.1993",
      "number": "938-XII",
      "keywords": [
        "fuqarolarning",
        "davlat",
        "pensiya",
        "minoti",
        "risida"
      ],
      "summary": "II BOB. YOSHGA DOIR PENSIYALAR",
      "url": "https://lex.uz/uz/docs/-112314"
    },
    {
      "id": -112314,
      "title": "Fuqarolarning davlat pensiya ta’minoti to‘g‘risida",
      "date": "03.09.1993",
      "number": "938-XII",
      "keywords": [
        "fuqarolarning",
        "davlat",
        "pensiya",
        "minoti",
        "risida"
      ],
      "summary": "III BOB. NOGIRONLIK PENSIYALARI",
      "url": "https://lex.uz/uz/docs/-112314"
    },
    {
      "id": -112314,
      "title": "Fuqarolarning davlat pensiya ta’minoti to‘g‘risida",
      "date": "03.09.1993",
      "number": "938-XII",
      "keywords": [
        "fuqarolarning",
        "davlat",
        "pensiya",
        "minoti",
        "risida"
      ],
      "summary": "IV BOB. BOQUVCHISINI YO‘QOTGANLIK PENSIYALARI",
      "url": "https://lex.uz/uz/docs/-112314"
    },
    {
      "id": -112314,
      "title": "Fuqarolarning davlat pensiya ta’minoti to‘g‘risida",
      "date": "03.09.1993",
      "number": "938-XII",
      "keywords": [
        "fuqarolarning",
        "davlat",
        "pensiya",
        "minoti",
        "risida"
      ],
      "summary": "IX BOB. PENSIYALAR TO‘LASH",
      "url": "https://lex.uz/uz/docs/-112314"
    },
    {
      "id": -112314,
      "title": "Fuqarolarning davlat pensiya ta’minoti to‘g‘risida",
      "date": "03.09.1993",
      "number": "938-XII",
      "keywords": [
        "fuqarolarning",
        "davlat",
        "pensiya",
        "minoti",
        "risida"
      ],
      "summary": "VI BOB. ISH STAJINI HISOBLAB CHIQARISH",
      "url": "https://lex.uz/uz/docs/-112314"
    },
    {
      "id": -112314,
      "title": "Fuqarolarning davlat pensiya ta’minoti to‘g‘risida",
      "date": "03.09.1993",
      "number": "938-XII",
      "keywords": [
        "fuqarolarning",
        "davlat",
        "pensiya",
        "minoti",
        "risida"
      ],
      "summary": "VII BOB. PENSIYALAR TAYINLASH",
      "url": "https://lex.uz/uz/docs/-112314"
    },
    {
      "id": -112314,
      "title": "Fuqarolarning davlat pensiya ta’minoti to‘g‘risida",
      "date": "03.09.1993",
      "number": "938-XII",
      "keywords": [
        "fuqarolarning",
        "davlat",
        "pensiya",
        "minoti",
        "risida"
      ],
      "summary": "VIII BOB. PENSIYALARNI QAYTA HISOBLASH",
      "url": "https://lex.uz/uz/docs/-112314"
    },
    {
      "id": -4662480,
      "title": "O‘zbekiston Respublikasi bilan Qirg‘iziston Respublikasi mablag‘lari hisobiga barpo etilgan ijtimoiy soha obyektlariga egalik qilish huquqlarini o‘zaro tan olish",
      "date": "02.02.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "qirg",
        "iziston",
        "mablag",
        "lari",
        "hisobiga",
        "barpo"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-4662480"
    },
    {
      "id": -4662480,
      "title": "O‘zbekiston Respublikasi bilan Qirg‘iziston Respublikasi mablag‘lari hisobiga barpo etilgan ijtimoiy soha obyektlariga egalik qilish huquqlarini o‘zaro tan olish",
      "date": "02.02.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "qirg",
        "iziston",
        "mablag",
        "lari",
        "hisobiga",
        "barpo"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-4662480"
    },
    {
      "id": -4662480,
      "title": "O‘zbekiston Respublikasi bilan Qirg‘iziston Respublikasi mablag‘lari hisobiga barpo etilgan ijtimoiy soha obyektlariga egalik qilish huquqlarini o‘zaro tan olish",
      "date": "02.02.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "qirg",
        "iziston",
        "mablag",
        "lari",
        "hisobiga",
        "barpo"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-4662480"
    },
    {
      "id": -4662480,
      "title": "O‘zbekiston Respublikasi bilan Qirg‘iziston Respublikasi mablag‘lari hisobiga barpo etilgan ijtimoiy soha obyektlariga egalik qilish huquqlarini o‘zaro tan olish",
      "date": "02.02.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "qirg",
        "iziston",
        "mablag",
        "lari",
        "hisobiga",
        "barpo"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-4662480"
    },
    {
      "id": -4662480,
      "title": "O‘zbekiston Respublikasi bilan Qirg‘iziston Respublikasi mablag‘lari hisobiga barpo etilgan ijtimoiy soha obyektlariga egalik qilish huquqlarini o‘zaro tan olish",
      "date": "02.02.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "qirg",
        "iziston",
        "mablag",
        "lari",
        "hisobiga",
        "barpo"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-4662480"
    },
    {
      "id": -4662480,
      "title": "O‘zbekiston Respublikasi bilan Qirg‘iziston Respublikasi mablag‘lari hisobiga barpo etilgan ijtimoiy soha obyektlariga egalik qilish huquqlarini o‘zaro tan olish",
      "date": "02.02.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "qirg",
        "iziston",
        "mablag",
        "lari",
        "hisobiga",
        "barpo"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-4662480"
    },
    {
      "id": -4662480,
      "title": "O‘zbekiston Respublikasi bilan Qirg‘iziston Respublikasi mablag‘lari hisobiga barpo etilgan ijtimoiy soha obyektlariga egalik qilish huquqlarini o‘zaro tan olish",
      "date": "02.02.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "qirg",
        "iziston",
        "mablag",
        "lari",
        "hisobiga",
        "barpo"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-4662480"
    },
    {
      "id": -4662480,
      "title": "O‘zbekiston Respublikasi bilan Qirg‘iziston Respublikasi mablag‘lari hisobiga barpo etilgan ijtimoiy soha obyektlariga egalik qilish huquqlarini o‘zaro tan olish",
      "date": "02.02.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "qirg",
        "iziston",
        "mablag",
        "lari",
        "hisobiga",
        "barpo"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-4662480"
    },
    {
      "id": -4662480,
      "title": "O‘zbekiston Respublikasi bilan Qirg‘iziston Respublikasi mablag‘lari hisobiga barpo etilgan ijtimoiy soha obyektlariga egalik qilish huquqlarini o‘zaro tan olish",
      "date": "02.02.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "qirg",
        "iziston",
        "mablag",
        "lari",
        "hisobiga",
        "barpo"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-4662480"
    },
    {
      "id": -4662480,
      "title": "O‘zbekiston Respublikasi bilan Qirg‘iziston Respublikasi mablag‘lari hisobiga barpo etilgan ijtimoiy soha obyektlariga egalik qilish huquqlarini o‘zaro tan olish",
      "date": "02.02.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "qirg",
        "iziston",
        "mablag",
        "lari",
        "hisobiga",
        "barpo"
      ],
      "summary": "O‘zbekiston Respublikasi bilan Qirg‘iziston Respublikasi mablag‘lari hisobiga barpo etilgan ijtimoiy soha obyektlariga egalik qilish huquqlarini o‘zaro tan olish",
      "url": "https://lex.uz/uz/docs/-4662480"
    },
    {
      "id": -807155,
      "title": "O‘zbekiston Respublikasi Fanlar akademiyasi tarkibida tibbiyot fanlari bo‘limini tashkil etish to‘g‘risida",
      "date": "11.03.1994",
      "number": "134",
      "keywords": [
        "zbekiston",
        "fanlar",
        "akademiyasi",
        "tarkibida",
        "tibbiyot",
        "fanlari",
        "limini",
        "tashkil"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-807155"
    }
  ],
  "jinoyat": [
    {
      "id": -7685994,
      "title": "“O‘zbekiston Respublikasining ayrim qonun hujjatlariga jinoyat protsessida majburlov choralari instituti takomillashtirilayotganligi munosabati bilan qo‘shimcha va o‘zgartirishlar kiritish to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni haqida",
      "date": "28.05.2025",
      "number": "SQ-129-V",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "jinoyat",
        "protsessida",
        "majburlov",
        "choralari"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7685994"
    },
    {
      "id": -7697022,
      "title": "“Yoqilg‘i-energetika sohasidagi huquqbuzarliklarga qarshi kurashish choralari takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining Jinoyat kodeksiga hamda O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga o‘zgartirish va qo‘shimchalar kiritish haqida”gi QL-97-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida (“Yoqilg‘i-energetika sohasidagi huquqbuzarliklarga qarshi kurashish mexanizmlari takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining Jinoyat kodeksiga hamda O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga o‘zgartirish va qo‘shimchalar kiritish haqida”)",
      "date": "14.07.2025",
      "number": "1085-V",
      "keywords": [
        "yoqilg",
        "energetika",
        "sohasidagi",
        "huquqbuzarliklarga",
        "qarshi",
        "kurashish",
        "choralari",
        "takomillashtirilishi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7697022"
    },
    {
      "id": 7695217,
      "title": "«Mahallalarda xavfsiz muhitni yaratish va huquqbuzarliklarning barvaqt oldini olish tizimi hamda jamoat tartibini saqlash sohasidagi qonunchilik takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirishlar kiritish to‘g‘risida»gi QL-112-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "14.07.2025",
      "number": "1080-V",
      "keywords": [
        "mahallalarda",
        "xavfsiz",
        "muhitni",
        "yaratish",
        "huquqbuzarliklarning",
        "barvaqt",
        "oldini",
        "olish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7695217"
    },
    {
      "id": 7695242,
      "title": "«Mahallalarda xavfsiz muhitni yaratish va huquqbuzarliklarning barvaqt oldini olish tizimi hamda jamoat tartibini saqlash sohasidagi qonunchilik takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirishlar kiritish to‘g‘risida»gi QL-112-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "14.07.2025",
      "number": "1081-V",
      "keywords": [
        "mahallalarda",
        "xavfsiz",
        "muhitni",
        "yaratish",
        "huquqbuzarliklarning",
        "barvaqt",
        "oldini",
        "olish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7695242"
    },
    {
      "id": 7695614,
      "title": "«Sudning mustaqilligini va sudyalar daxlsizligini ta’minlash choralari yanada kuchaytirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida»gi QL-93-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "14.07.2025",
      "number": "1084-V",
      "keywords": [
        "sudning",
        "mustaqilligini",
        "sudyalar",
        "daxlsizligini",
        "minlash",
        "choralari",
        "yanada",
        "kuchaytirilishi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7695614"
    },
    {
      "id": -7688995,
      "title": "“Mahallalarda xavfsiz muhitni yaratish va huquqbuzarliklarning barvaqt oldini olish tizimi hamda jamoat tartibini saqlash sohasidagi qonunchilik takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirishlar kiritish to‘g‘risida”gi QL-112-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "15.07.2025",
      "number": "1105-V",
      "keywords": [
        "mahallalarda",
        "xavfsiz",
        "muhitni",
        "yaratish",
        "huquqbuzarliklarning",
        "barvaqt",
        "oldini",
        "olish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7688995"
    },
    {
      "id": -7684925,
      "title": "“Yoqilg‘i-energetika sohasidagi huquqbuzarliklarga qarshi kurashish choralari takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining Jinoyat kodeksiga hamda O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga o‘zgartirish va qo‘shimchalar kiritish haqida”gi O‘zbekiston Respublikasi Qonuni to‘g‘risida",
      "date": "15.07.2025",
      "number": "1097-V",
      "keywords": [
        "yoqilg",
        "energetika",
        "sohasidagi",
        "huquqbuzarliklarga",
        "qarshi",
        "kurashish",
        "choralari",
        "takomillashtirilishi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7684925"
    },
    {
      "id": -7684896,
      "title": "“Yoqilg‘i-energetika sohasidagi huquqbuzarliklarga qarshi kurashish choralari takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining Jinoyat kodeksiga hamda O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga o‘zgartirish va qo‘shimchalar kiritish haqida”gi QL-97-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida (“Yoqilg‘i-energetika sohasidagi huquqbuzarliklarga qarshi kurashish mexanizmlari takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining Jinoyat kodeksiga hamda O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga o‘zgartirish va qo‘shimchalar kiritish haqida”)",
      "date": "15.07.2025",
      "number": "1096-V",
      "keywords": [
        "yoqilg",
        "energetika",
        "sohasidagi",
        "huquqbuzarliklarga",
        "qarshi",
        "kurashish",
        "choralari",
        "takomillashtirilishi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7684896"
    },
    {
      "id": -7684761,
      "title": "“Sudning mustaqilligini va sudyalar daxlsizligini ta’minlash choralari yanada kuchaytirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida”gi QL-93-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "15.07.2025",
      "number": "1093-V",
      "keywords": [
        "sudning",
        "mustaqilligini",
        "sudyalar",
        "daxlsizligini",
        "minlash",
        "choralari",
        "yanada",
        "kuchaytirilishi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7684761"
    },
    {
      "id": -7694270,
      "title": "“Mahallalarda xavfsiz muhitni yaratish va huquqbuzarliklarning barvaqt oldini olish tizimi hamda jamoat tartibini saqlash sohasidagi qonunchilik takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida”gi QL-112-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida (“Mahallalarda xavfsiz muhitni yaratish va huquqbuzarliklarning barvaqt oldini olish tizimi hamda jamoat tartibini saqlash sohasidagi qonunchilik takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirishlar kiritish to‘g‘risida”)",
      "date": "21.07.2025",
      "number": "1115-V",
      "keywords": [
        "mahallalarda",
        "xavfsiz",
        "muhitni",
        "yaratish",
        "huquqbuzarliklarning",
        "barvaqt",
        "oldini",
        "olish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7694270"
    },
    {
      "id": -7690913,
      "title": "“Mahallalarda xavfsiz muhitni yaratish va huquqbuzarliklarning barvaqt oldini olish tizimi hamda jamoat tartibini saqlash sohasidagi qonunchilik takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida”gi QL-112-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida (“Mahallalarda xavfsiz muhitni yaratish va huquqbuzarliklarning barvaqt oldini olish tizimi hamda jamoat tartibini saqlash sohasidagi qonunchilik takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirishlar kiritish to‘g‘risida”)",
      "date": "22.07.2025",
      "number": "1123-V",
      "keywords": [
        "mahallalarda",
        "xavfsiz",
        "muhitni",
        "yaratish",
        "huquqbuzarliklarning",
        "barvaqt",
        "oldini",
        "olish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7690913"
    },
    {
      "id": -7685972,
      "title": "O‘zbekiston Respublikasining ayrim qonun hujjatlariga jinoyat protsessida majburlov choralari instituti takomillashtirilayotganligi munosabati bilan qo‘shimcha va o‘zgartirishlar kiritish to‘g‘risida",
      "date": "15.08.2025",
      "number": "O‘RQ-1081",
      "keywords": [
        "zbekiston",
        "respublikasining",
        "qonun",
        "hujjatlariga",
        "jinoyat",
        "protsessida",
        "majburlov",
        "choralari"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7685972"
    },
    {
      "id": -7690026,
      "title": "O‘zbekiston Respublikasi Prezidentining ayrim qarorlariga mahallalarda jinoyatchilikning barvaqt oldini olish tizimi natijadorligini yanada oshirishga qaratilgan o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida",
      "date": "18.08.2025",
      "number": "PQ-253",
      "keywords": [
        "zbekiston",
        "prezidentining",
        "qarorlariga",
        "mahallalarda",
        "jinoyatchilikning",
        "barvaqt",
        "oldini",
        "olish"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7690026"
    },
    {
      "id": -7696594,
      "title": "Odil sudlov sohasida yuqori malakali kadrlar tayyorlash tizimini tubdan takomillashtirish chora-tadbirlari to‘g‘risida",
      "date": "21.08.2025",
      "number": "PF-141",
      "keywords": [
        "odil",
        "sudlov",
        "sohasida",
        "yuqori",
        "malakali",
        "kadrlar",
        "tayyorlash",
        "tizimini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7696594"
    },
    {
      "id": -7638571,
      "title": "“Sudning mustaqilligini va sudyalar daxlsizligini ta’minlash choralari yanada kuchaytirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida”gi QL-93-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "09.06.2025",
      "number": "940-V",
      "keywords": [
        "sudning",
        "mustaqilligini",
        "sudyalar",
        "daxlsizligini",
        "minlash",
        "choralari",
        "yanada",
        "kuchaytirilishi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7638571"
    },
    {
      "id": -7638547,
      "title": "“Sudning mustaqilligini va sudyalar daxlsizligini ta’minlash choralari yanada kuchaytirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida”gi QL-93-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "09.06.2025",
      "number": "939-V",
      "keywords": [
        "sudning",
        "mustaqilligini",
        "sudyalar",
        "daxlsizligini",
        "minlash",
        "choralari",
        "yanada",
        "kuchaytirilishi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7638547"
    },
    {
      "id": -7636873,
      "title": "“Sudning mustaqilligini va sudyalar daxlsizligini ta’minlash choralari yanada kuchaytirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida”gi QL-93-sonli O‘zbekiston Respublikasi qonuni loyihasi haqida",
      "date": "10.06.2025",
      "number": "963-V",
      "keywords": [
        "sudning",
        "mustaqilligini",
        "sudyalar",
        "daxlsizligini",
        "minlash",
        "choralari",
        "yanada",
        "kuchaytirilishi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-7636873"
    },
    {
      "id": 7634853,
      "title": "«Yoqilg‘i-energetika sohasidagi huquqbuzarliklarga qarshi kurashish mexanizmlari takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining Jinoyat kodeksiga hamda O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga o‘zgartirish va qo‘shimchalar kiritish haqida»gi QL-97-sonli  O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "23.06.2025",
      "number": "992-V",
      "keywords": [
        "yoqilg",
        "energetika",
        "sohasidagi",
        "huquqbuzarliklarga",
        "qarshi",
        "kurashish",
        "mexanizmlari",
        "takomillashtirilishi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7634853"
    },
    {
      "id": 7635549,
      "title": "«Yoqilg‘i-energetika sohasidagi huquqbuzarliklarga qarshi kurashish mexanizmlari takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining Jinoyat kodeksiga hamda O‘zbekiston Respublikasining Ma’muriy javobgarlik to‘g‘risidagi kodeksiga o‘zgartirish va qo‘shimchalar kiritish haqida»gi QL-97-sonli O‘zbekiston Respublikasi qonuni loyihasi to‘g‘risida",
      "date": "24.06.2025",
      "number": "1005-V",
      "keywords": [
        "yoqilg",
        "energetika",
        "sohasidagi",
        "huquqbuzarliklarga",
        "qarshi",
        "kurashish",
        "mexanizmlari",
        "takomillashtirilishi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/7635549"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "I modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "II modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "III modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "IV modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "IX modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "V modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "VI modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "VII modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "VIII modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "X modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "XI modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "XII modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "XIII modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "XIV modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "XIX modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "XV modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "XVI modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "XVII modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -7354622,
      "title": "Genotsid jinoyatining oldini olish va uning uchun jazolash to‘g‘risida",
      "date": "09.12.1948",
      "number": "",
      "keywords": [
        "genotsid",
        "jinoyatining",
        "oldini",
        "olish",
        "uning",
        "uchun",
        "jazolash",
        "risida"
      ],
      "summary": "XVIII modda",
      "url": "https://lex.uz/uz/docs/-7354622"
    },
    {
      "id": -2660045,
      "title": "Harbiy asirlar bilan qilinadigan muomala to‘g‘risida",
      "date": "12.08.1949",
      "number": "",
      "keywords": [
        "harbiy",
        "asirlar",
        "bilan",
        "qilinadigan",
        "muomala",
        "risida"
      ],
      "summary": "III. SUDLOV HARAKATLARI",
      "url": "https://lex.uz/uz/docs/-2660045"
    },
    {
      "id": -7354720,
      "title": "Qochoqlar maqomi to‘g‘risida",
      "date": "28.07.1951",
      "number": "",
      "keywords": [
        "qochoqlar",
        "maqomi",
        "risida"
      ],
      "summary": "16-modda. Sudga murojaat qilish huquqi",
      "url": "https://lex.uz/uz/docs/-7354720"
    },
    {
      "id": -7333398,
      "title": "Apatrid maqomi to‘g‘risida",
      "date": "28.09.1954",
      "number": "",
      "keywords": [
        "apatrid",
        "maqomi",
        "risida"
      ],
      "summary": "16-modda. Sudga murojaat qilish huquqi",
      "url": "https://lex.uz/uz/docs/-7333398"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "1-bob. Konvensiyaning qo‘llanilishi",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "12-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "13-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "14-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "15-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "16-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "17-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "18-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "19-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "20-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "21-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "22-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "23-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "24-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "25-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "26-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "II-bob. Yurisdiksiya",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "III-bob. Havo kemasi komandirining vakolati",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "IV-bob. Havo kemasini noqonuniy olib qo‘yish",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "V-bob. Davlatning huquq va majburiyatlari",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "VI-bob. Boshqa qoidalar",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -2656932,
      "title": "Havo kemasining bortida sodir etiladigan jinoyatlar va boshqa harakatlar haqida",
      "date": "14.09.1963",
      "number": "",
      "keywords": [
        "havo",
        "kemasining",
        "bortida",
        "sodir",
        "etiladigan",
        "jinoyatlar",
        "boshqa",
        "harakatlar"
      ],
      "summary": "VII-bob. Yakuniy qoidalar",
      "url": "https://lex.uz/uz/docs/-2656932"
    },
    {
      "id": -1310607,
      "title": "Adabiy va badiiy asarlarni muhofaza qilish to‘g‘risida",
      "date": "24.07.1971",
      "number": "",
      "keywords": [
        "adabiy",
        "badiiy",
        "asarlarni",
        "muhofaza",
        "qilish",
        "risida"
      ],
      "summary": "33-modda Baxslar: 1. Xalqaro sud yurisdiksiyasi; 2. Shunday yurisdiksiyaga nisbatan eslatma; 3. Eslatmaning chiqarib olinishi",
      "url": "https://lex.uz/uz/docs/-1310607"
    },
    {
      "id": -2694961,
      "title": "Xalqaro himoyadan foydalanuvchi shaxslarga, shu jumladan diplomatiya agentlariga qarshi jinoyatlarning oldini olish va bunday jinoyatlar uchun jazolash to‘g‘risida",
      "date": "14.12.1973",
      "number": "",
      "keywords": [
        "xalqaro",
        "himoyadan",
        "foydalanuvchi",
        "shaxslarga",
        "jumladan",
        "diplomatiya",
        "agentlariga",
        "qarshi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2694961"
    },
    {
      "id": -2698725,
      "title": "Xalqaro bo‘lmagan tusdagi qurolli mojarolar qurbonlarini himoya qilishga taalluqli 1949-yil 12-avgustda qabul qilingan Jeneva konvensiyalariga doir (II Protokol)",
      "date": "08.06.1977",
      "number": "",
      "keywords": [
        "xalqaro",
        "lmagan",
        "tusdagi",
        "qurolli",
        "mojarolar",
        "qurbonlarini",
        "himoya",
        "qilishga"
      ],
      "summary": "6-modda — Jinoyatni jazolash jarayoni",
      "url": "https://lex.uz/uz/docs/-2698725"
    },
    {
      "id": -2655293,
      "title": "Qiynoqlarga hamda muomala va jazolashning boshqa shafqatsiz, g‘ayriinsoniy yoki qadr-qimmatni kamsitadigan turlariga qarshi",
      "date": "10.12.1984",
      "number": "",
      "keywords": [
        "qiynoqlarga",
        "hamda",
        "muomala",
        "jazolashning",
        "boshqa",
        "shafqatsiz",
        "ayriinsoniy",
        "yoki"
      ],
      "summary": "I QISM",
      "url": "https://lex.uz/uz/docs/-2655293"
    },
    {
      "id": -2655293,
      "title": "Qiynoqlarga hamda muomala va jazolashning boshqa shafqatsiz, g‘ayriinsoniy yoki qadr-qimmatni kamsitadigan turlariga qarshi",
      "date": "10.12.1984",
      "number": "",
      "keywords": [
        "qiynoqlarga",
        "hamda",
        "muomala",
        "jazolashning",
        "boshqa",
        "shafqatsiz",
        "ayriinsoniy",
        "yoki"
      ],
      "summary": "II QISM",
      "url": "https://lex.uz/uz/docs/-2655293"
    },
    {
      "id": -2655293,
      "title": "Qiynoqlarga hamda muomala va jazolashning boshqa shafqatsiz, g‘ayriinsoniy yoki qadr-qimmatni kamsitadigan turlariga qarshi",
      "date": "10.12.1984",
      "number": "",
      "keywords": [
        "qiynoqlarga",
        "hamda",
        "muomala",
        "jazolashning",
        "boshqa",
        "shafqatsiz",
        "ayriinsoniy",
        "yoki"
      ],
      "summary": "Qiynoqlarga hamda muomala va jazolashning boshqa shafqatsiz, g‘ayriinsoniy yoki qadr-qimmatni kamsitadigan turlariga qarshi",
      "url": "https://lex.uz/uz/docs/-2655293"
    },
    {
      "id": -2655293,
      "title": "Qiynoqlarga hamda muomala va jazolashning boshqa shafqatsiz, g‘ayriinsoniy yoki qadr-qimmatni kamsitadigan turlariga qarshi",
      "date": "10.12.1984",
      "number": "",
      "keywords": [
        "qiynoqlarga",
        "hamda",
        "muomala",
        "jazolashning",
        "boshqa",
        "shafqatsiz",
        "ayriinsoniy",
        "yoki"
      ],
      "summary": "Sh QISM",
      "url": "https://lex.uz/uz/docs/-2655293"
    },
    {
      "id": -7348254,
      "title": "Sud organlari mustaqilligining asosiy prinsiplari",
      "date": "29.11.1985",
      "number": "",
      "keywords": [
        "organlari",
        "mustaqilligining",
        "asosiy",
        "prinsiplari"
      ],
      "summary": "Jazolash, lavozimdan chetlatish va bo‘shatish",
      "url": "https://lex.uz/uz/docs/-7348254"
    },
    {
      "id": -7348254,
      "title": "Sud organlari mustaqilligining asosiy prinsiplari",
      "date": "29.11.1985",
      "number": "",
      "keywords": [
        "organlari",
        "mustaqilligining",
        "asosiy",
        "prinsiplari"
      ],
      "summary": "Kasbiy sir va daxlsizlik huquqi",
      "url": "https://lex.uz/uz/docs/-7348254"
    },
    {
      "id": -7348254,
      "title": "Sud organlari mustaqilligining asosiy prinsiplari",
      "date": "29.11.1985",
      "number": "",
      "keywords": [
        "organlari",
        "mustaqilligining",
        "asosiy",
        "prinsiplari"
      ],
      "summary": "Lavozim shartlari va vakolat muddatlari",
      "url": "https://lex.uz/uz/docs/-7348254"
    },
    {
      "id": -7348254,
      "title": "Sud organlari mustaqilligining asosiy prinsiplari",
      "date": "29.11.1985",
      "number": "",
      "keywords": [
        "organlari",
        "mustaqilligining",
        "asosiy",
        "prinsiplari"
      ],
      "summary": "Malaka, tanlov va tayyorgarlik",
      "url": "https://lex.uz/uz/docs/-7348254"
    },
    {
      "id": -7348254,
      "title": "Sud organlari mustaqilligining asosiy prinsiplari",
      "date": "29.11.1985",
      "number": "",
      "keywords": [
        "organlari",
        "mustaqilligining",
        "asosiy",
        "prinsiplari"
      ],
      "summary": "Sud organlari mustaqilligining asosiy prinsiplari",
      "url": "https://lex.uz/uz/docs/-7348254"
    },
    {
      "id": -2694907,
      "title": "Yollanma jinoyatchilarni yollash, ulardan foydalanish, moliyaviy ta’minlash va o‘qitishga qarshi kurash to‘g‘risida",
      "date": "04.12.1989",
      "number": "",
      "keywords": [
        "yollanma",
        "jinoyatchilarni",
        "yollash",
        "ulardan",
        "foydalanish",
        "moliyaviy",
        "minlash",
        "qitishga"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2694907"
    },
    {
      "id": -1583864,
      "title": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktga o‘lim jazosini bekor qilishga yo‘naltirilgan",
      "date": "15.12.1989",
      "number": "",
      "keywords": [
        "fuqaroviy",
        "siyosiy",
        "huquqlar",
        "risidagi",
        "xalqaro",
        "paktga",
        "jazosini",
        "bekor"
      ],
      "summary": "1-modda",
      "url": "https://lex.uz/uz/docs/-1583864"
    },
    {
      "id": -1583864,
      "title": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktga o‘lim jazosini bekor qilishga yo‘naltirilgan",
      "date": "15.12.1989",
      "number": "",
      "keywords": [
        "fuqaroviy",
        "siyosiy",
        "huquqlar",
        "risidagi",
        "xalqaro",
        "paktga",
        "jazosini",
        "bekor"
      ],
      "summary": "10-modda",
      "url": "https://lex.uz/uz/docs/-1583864"
    },
    {
      "id": -1583864,
      "title": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktga o‘lim jazosini bekor qilishga yo‘naltirilgan",
      "date": "15.12.1989",
      "number": "",
      "keywords": [
        "fuqaroviy",
        "siyosiy",
        "huquqlar",
        "risidagi",
        "xalqaro",
        "paktga",
        "jazosini",
        "bekor"
      ],
      "summary": "11-modda",
      "url": "https://lex.uz/uz/docs/-1583864"
    },
    {
      "id": -1583864,
      "title": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktga o‘lim jazosini bekor qilishga yo‘naltirilgan",
      "date": "15.12.1989",
      "number": "",
      "keywords": [
        "fuqaroviy",
        "siyosiy",
        "huquqlar",
        "risidagi",
        "xalqaro",
        "paktga",
        "jazosini",
        "bekor"
      ],
      "summary": "2-modda",
      "url": "https://lex.uz/uz/docs/-1583864"
    },
    {
      "id": -1583864,
      "title": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktga o‘lim jazosini bekor qilishga yo‘naltirilgan",
      "date": "15.12.1989",
      "number": "",
      "keywords": [
        "fuqaroviy",
        "siyosiy",
        "huquqlar",
        "risidagi",
        "xalqaro",
        "paktga",
        "jazosini",
        "bekor"
      ],
      "summary": "3-modda",
      "url": "https://lex.uz/uz/docs/-1583864"
    },
    {
      "id": -1583864,
      "title": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktga o‘lim jazosini bekor qilishga yo‘naltirilgan",
      "date": "15.12.1989",
      "number": "",
      "keywords": [
        "fuqaroviy",
        "siyosiy",
        "huquqlar",
        "risidagi",
        "xalqaro",
        "paktga",
        "jazosini",
        "bekor"
      ],
      "summary": "4-modda",
      "url": "https://lex.uz/uz/docs/-1583864"
    },
    {
      "id": -1583864,
      "title": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktga o‘lim jazosini bekor qilishga yo‘naltirilgan",
      "date": "15.12.1989",
      "number": "",
      "keywords": [
        "fuqaroviy",
        "siyosiy",
        "huquqlar",
        "risidagi",
        "xalqaro",
        "paktga",
        "jazosini",
        "bekor"
      ],
      "summary": "5-modda",
      "url": "https://lex.uz/uz/docs/-1583864"
    },
    {
      "id": -1583864,
      "title": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktga o‘lim jazosini bekor qilishga yo‘naltirilgan",
      "date": "15.12.1989",
      "number": "",
      "keywords": [
        "fuqaroviy",
        "siyosiy",
        "huquqlar",
        "risidagi",
        "xalqaro",
        "paktga",
        "jazosini",
        "bekor"
      ],
      "summary": "6-modda",
      "url": "https://lex.uz/uz/docs/-1583864"
    },
    {
      "id": -1583864,
      "title": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktga o‘lim jazosini bekor qilishga yo‘naltirilgan",
      "date": "15.12.1989",
      "number": "",
      "keywords": [
        "fuqaroviy",
        "siyosiy",
        "huquqlar",
        "risidagi",
        "xalqaro",
        "paktga",
        "jazosini",
        "bekor"
      ],
      "summary": "7-modda",
      "url": "https://lex.uz/uz/docs/-1583864"
    },
    {
      "id": -1583864,
      "title": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktga o‘lim jazosini bekor qilishga yo‘naltirilgan",
      "date": "15.12.1989",
      "number": "",
      "keywords": [
        "fuqaroviy",
        "siyosiy",
        "huquqlar",
        "risidagi",
        "xalqaro",
        "paktga",
        "jazosini",
        "bekor"
      ],
      "summary": "8-modda",
      "url": "https://lex.uz/uz/docs/-1583864"
    },
    {
      "id": -1583864,
      "title": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktga o‘lim jazosini bekor qilishga yo‘naltirilgan",
      "date": "15.12.1989",
      "number": "",
      "keywords": [
        "fuqaroviy",
        "siyosiy",
        "huquqlar",
        "risidagi",
        "xalqaro",
        "paktga",
        "jazosini",
        "bekor"
      ],
      "summary": "9-modda",
      "url": "https://lex.uz/uz/docs/-1583864"
    },
    {
      "id": -1583864,
      "title": "Fuqaroviy va siyosiy huquqlar to‘g‘risidagi xalqaro paktga o‘lim jazosini bekor qilishga yo‘naltirilgan",
      "date": "15.12.1989",
      "number": "",
      "keywords": [
        "fuqaroviy",
        "siyosiy",
        "huquqlar",
        "risidagi",
        "xalqaro",
        "paktga",
        "jazosini",
        "bekor"
      ],
      "summary": "FUQAROVIY VA SIYOSIY HUQUQLAR TO‘G‘RISIDAGI XALQARO PAKTGA O‘LIM JAZOSINI BEKOR QILISHGA YO‘NALTIRILGAN",
      "url": "https://lex.uz/uz/docs/-1583864"
    },
    {
      "id": -7348427,
      "title": "Yuristlarning roliga oid asosiy prinsiplar",
      "date": "07.09.1990",
      "number": "",
      "keywords": [
        "yuristlarning",
        "roliga",
        "asosiy",
        "prinsiplar"
      ],
      "summary": "Odil sudlov masalalaridagi maxsus kafolatlar",
      "url": "https://lex.uz/uz/docs/-7348427"
    },
    {
      "id": -7347915,
      "title": "Sud ta’qibini amalga oshiruvchi shaxslarning roliga taalluqli rahbariy prinsiplar",
      "date": "07.09.1990",
      "number": "",
      "keywords": [
        "qibini",
        "amalga",
        "oshiruvchi",
        "shaxslarning",
        "roliga",
        "taalluqli",
        "rahbariy",
        "prinsiplar"
      ],
      "summary": "Boshqa hukumat organlari yoki muassasalari bilan aloqalar",
      "url": "https://lex.uz/uz/docs/-7347915"
    },
    {
      "id": -7347915,
      "title": "Sud ta’qibini amalga oshiruvchi shaxslarning roliga taalluqli rahbariy prinsiplar",
      "date": "07.09.1990",
      "number": "",
      "keywords": [
        "qibini",
        "amalga",
        "oshiruvchi",
        "shaxslarning",
        "roliga",
        "taalluqli",
        "rahbariy",
        "prinsiplar"
      ],
      "summary": "Intizomiy jazolar",
      "url": "https://lex.uz/uz/docs/-7347915"
    },
    {
      "id": -7347915,
      "title": "Sud ta’qibini amalga oshiruvchi shaxslarning roliga taalluqli rahbariy prinsiplar",
      "date": "07.09.1990",
      "number": "",
      "keywords": [
        "qibini",
        "amalga",
        "oshiruvchi",
        "shaxslarning",
        "roliga",
        "taalluqli",
        "rahbariy",
        "prinsiplar"
      ],
      "summary": "Ixtiyoriy vazifalar",
      "url": "https://lex.uz/uz/docs/-7347915"
    },
    {
      "id": -7347915,
      "title": "Sud ta’qibini amalga oshiruvchi shaxslarning roliga taalluqli rahbariy prinsiplar",
      "date": "07.09.1990",
      "number": "",
      "keywords": [
        "qibini",
        "amalga",
        "oshiruvchi",
        "shaxslarning",
        "roliga",
        "taalluqli",
        "rahbariy",
        "prinsiplar"
      ],
      "summary": "Jinoyat muhokamasidagi roli",
      "url": "https://lex.uz/uz/docs/-7347915"
    },
    {
      "id": -7347915,
      "title": "Sud ta’qibini amalga oshiruvchi shaxslarning roliga taalluqli rahbariy prinsiplar",
      "date": "07.09.1990",
      "number": "",
      "keywords": [
        "qibini",
        "amalga",
        "oshiruvchi",
        "shaxslarning",
        "roliga",
        "taalluqli",
        "rahbariy",
        "prinsiplar"
      ],
      "summary": "Malaka, tanlab olish va kasbiy tayyorgarlik",
      "url": "https://lex.uz/uz/docs/-7347915"
    },
    {
      "id": -7347915,
      "title": "Sud ta’qibini amalga oshiruvchi shaxslarning roliga taalluqli rahbariy prinsiplar",
      "date": "07.09.1990",
      "number": "",
      "keywords": [
        "qibini",
        "amalga",
        "oshiruvchi",
        "shaxslarning",
        "roliga",
        "taalluqli",
        "rahbariy",
        "prinsiplar"
      ],
      "summary": "Rahbariy prinsiplarga rioya etish",
      "url": "https://lex.uz/uz/docs/-7347915"
    },
    {
      "id": -7347915,
      "title": "Sud ta’qibini amalga oshiruvchi shaxslarning roliga taalluqli rahbariy prinsiplar",
      "date": "07.09.1990",
      "number": "",
      "keywords": [
        "qibini",
        "amalga",
        "oshiruvchi",
        "shaxslarning",
        "roliga",
        "taalluqli",
        "rahbariy",
        "prinsiplar"
      ],
      "summary": "Sud ta’qibiga muqobil usullar",
      "url": "https://lex.uz/uz/docs/-7347915"
    },
    {
      "id": -7347915,
      "title": "Sud ta’qibini amalga oshiruvchi shaxslarning roliga taalluqli rahbariy prinsiplar",
      "date": "07.09.1990",
      "number": "",
      "keywords": [
        "qibini",
        "amalga",
        "oshiruvchi",
        "shaxslarning",
        "roliga",
        "taalluqli",
        "rahbariy",
        "prinsiplar"
      ],
      "summary": "Sud ta’qibini amalga oshiruvchi shaxslarning roliga taalluqli rahbariy prinsiplar",
      "url": "https://lex.uz/uz/docs/-7347915"
    },
    {
      "id": -7347915,
      "title": "Sud ta’qibini amalga oshiruvchi shaxslarning roliga taalluqli rahbariy prinsiplar",
      "date": "07.09.1990",
      "number": "",
      "keywords": [
        "qibini",
        "amalga",
        "oshiruvchi",
        "shaxslarning",
        "roliga",
        "taalluqli",
        "rahbariy",
        "prinsiplar"
      ],
      "summary": "Xizmat maqomi va shartlari",
      "url": "https://lex.uz/uz/docs/-7347915"
    },
    {
      "id": -141101,
      "title": "Ekologik huquqbuzarlik uchun javobgarlik kuchaytirilishi munosabati bilan O‘zbekiston Respublikasining ayrim Qonun hujjatlariga o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida",
      "date": "20.11.1991",
      "number": "440-XII",
      "keywords": [
        "ekologik",
        "huquqbuzarlik",
        "uchun",
        "javobgarlik",
        "kuchaytirilishi",
        "munosabati",
        "bilan",
        "zbekiston"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-141101"
    },
    {
      "id": -1437927,
      "title": "Yuridik ahamiyatga ega bo‘lgan faktlarni aniqlash haqidagi ishlar bo‘yicha sud amaliyoti to‘g‘risida",
      "date": "20.12.1991",
      "number": "5",
      "keywords": [
        "yuridik",
        "ahamiyatga",
        "lgan",
        "faktlarni",
        "aniqlash",
        "haqidagi",
        "ishlar",
        "yicha"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-1437927"
    },
    {
      "id": -147159,
      "title": "O‘zbekiston Respublikasi prokuraturasi organlari to‘g‘risida",
      "date": "08.01.1992",
      "number": "PF-313",
      "keywords": [
        "zbekiston",
        "prokuraturasi",
        "organlari",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-147159"
    },
    {
      "id": -795416,
      "title": "Harbiy tribunallar va harbiy prokuratura organlari to‘g‘risida",
      "date": "28.02.1992",
      "number": "PF-355",
      "keywords": [
        "harbiy",
        "tribunallar",
        "harbiy",
        "prokuratura",
        "organlari",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-795416"
    },
    {
      "id": -2599246,
      "title": "Mustaqil davlatlar hamdo‘stligi Iqtisodiy Sudi maqomi to‘g‘risida",
      "date": "06.07.1992",
      "number": "",
      "keywords": [
        "mustaqil",
        "davlatlar",
        "hamdo",
        "stligi",
        "iqtisodiy",
        "sudi",
        "maqomi",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-2599246"
    },
    {
      "id": -1439854,
      "title": "Fuqarolik holati dalolatnomalari yozuvlaridagi xatoliklarni belgilashni tartibga soluvchi qonunchilikni sudlar tomonidan qo‘llanishi haqida",
      "date": "13.11.1992",
      "number": "5а",
      "keywords": [
        "fuqarolik",
        "holati",
        "dalolatnomalari",
        "yozuvlaridagi",
        "xatoliklarni",
        "belgilashni",
        "tartibga",
        "soluvchi"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-1439854"
    },
    {
      "id": -127745,
      "title": "“Prokuratura to‘g‘risida”gi O‘zbekiston Respublikasi Qonunini amalga kiritish to‘g‘risida",
      "date": "09.12.1992",
      "number": "747-XII",
      "keywords": [
        "prokuratura",
        "risida",
        "zbekiston",
        "qonunini",
        "amalga",
        "risida"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-127745"
    },
    {
      "id": -560847,
      "title": "O‘zbekiston Respublikasi Harbiy prokuraturalari va harbiy sudlarining zobit kadrlar tarkibini to‘ldirish to‘g‘risida",
      "date": "08.02.1993",
      "number": "66",
      "keywords": [
        "zbekiston",
        "harbiy",
        "prokuraturalari",
        "harbiy",
        "sudlarining",
        "zobit",
        "kadrlar",
        "tarkibini"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-560847"
    },
    {
      "id": -4953674,
      "title": "Qoraqalpog‘iston Respublikasining Konstitutsiyasi",
      "date": "09.04.1993",
      "number": "",
      "keywords": [
        "qoraqalpog",
        "iston",
        "respublikasining",
        "konstitutsiyasi"
      ],
      "summary": "XXII BOB. QORAQALPOG‘ISTON RESPUBLIKASINING SUD HOKIMIYATI",
      "url": "https://lex.uz/uz/docs/-4953674"
    },
    {
      "id": -4953674,
      "title": "Qoraqalpog‘iston Respublikasining Konstitutsiyasi",
      "date": "09.04.1993",
      "number": "",
      "keywords": [
        "qoraqalpog",
        "iston",
        "respublikasining",
        "konstitutsiyasi"
      ],
      "summary": "XXV BOB. PROKURATURA",
      "url": "https://lex.uz/uz/docs/-4953674"
    },
    {
      "id": -627675,
      "title": "O‘zbekiston Respublikasi adliya organlari va sudlari faoliyatini tashkil etish masalalari to‘g‘risida",
      "date": "19.01.1994",
      "number": "18",
      "keywords": [
        "zbekiston",
        "adliya",
        "organlari",
        "sudlari",
        "faoliyatini",
        "tashkil",
        "etish",
        "masalalari"
      ],
      "summary": "",
      "url": "https://lex.uz/uz/docs/-627675"
    },
    {
      "id": -2499373,
      "title": "O‘zbekiston Respublikasi bilan Rossiya Federatsiyasi o‘rtasida Konsullik Konvensiyasi",
      "date": "02.03.1994",
      "number": "",
      "keywords": [
        "zbekiston",
        "bilan",
        "rossiya",
        "federatsiyasi",
        "rtasida",
        "konsullik",
        "konvensiyasi"
      ],
      "summary": "39-modda Hibsga olish va sudda ishni ko‘rish borasidagi vazifalar",
      "url": "https://lex.uz/uz/docs/-2499373"
    }
  ]
};

// ── Qidirish funksiyasi ──
function searchDatabase(query) {
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/).filter(w => w.length > 2);
  
  let bestMatch = null;
  let bestScore = 0;

  for (const [catId, laws] of Object.entries(LAWS_BY_CATEGORY)) {
    for (const law of laws) {
      let score = 0;
      const titleLower = law.title.toLowerCase();
      const summaryLower = (law.summary || '').toLowerCase();
      
      for (const word of words) {
        if (titleLower.includes(word)) score += 3;
        if (summaryLower.includes(word)) score += 1;
        if ((law.keywords || []).includes(word)) score += 2;
      }
      
      if (score > bestScore) {
        bestScore = score;
        const cat = CATEGORIES.find(c => c.id === catId);
        bestMatch = {
          ...law,
          category: cat?.name || catId,
          icon: cat?.icon || '📄',
          query_formal: law.title,
          sources: [
            { name: 'lex.uz — ' + law.title.substring(0, 50), url: law.url }
          ],
          answer: law.summary || law.title,
          warn: "Batafsil ma'lumot uchun lex.uz saytiga o'ting yoki mutaxassisga murojaat qiling."
        };
      }
    }
  }

  return bestScore >= 2 ? bestMatch : null;
}

// ── Kategoriya bo'yicha qidirish ──
function getLawsByCategory(catId, limit = 10) {
  return (LAWS_BY_CATEGORY[catId] || []).slice(0, limit);
}

// ── Statistika ──
const DB_STATS = {
  total: 1144,
  source: 'lex.uz',
  lang: "O'zbek (lotin)",
  updated: '2026-04-10'
};
