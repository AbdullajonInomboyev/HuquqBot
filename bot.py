"""
HuquqBot — Telegram Bot Backend
Tokenni .env faylga soling, bu yerga yozmang!
"""

import os
import logging
from telegram import Update, WebAppInfo, InlineKeyboardButton, InlineKeyboardMarkup, MenuButtonWebApp
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

# ── Logging ──
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# ── Config ──
# .env fayldan o'qing yoki to'g'ridan-to'g'ri kiriting (faqat test uchun)
BOT_TOKEN = os.getenv("BOT_TOKEN", "8775636869:AAH8Ogha8XrI61aUOAxODYlkhL4PUND9UYQ")
WEBAPP_URL = os.getenv("WEBAPP_URL", "https://monumental-kitsune-bb8bac.netlify.app")  # GitHub Pages yoki Netlify URL


# ── /start handler ──
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    first_name = user.first_name if user else "Foydalanuvchi"

    keyboard = InlineKeyboardMarkup([
        [InlineKeyboardButton(
            text="⚖️ HuquqBot ni ochish",
            web_app=WebAppInfo(url=WEBAPP_URL)
        )]
    ])

    await update.message.reply_text(
        f"Salom, {first_name}! 👋\n\n"
        f"Men *HuquqBot* — rasmiy O'zbekiston qonunchiligidan sodda javob beraman.\n\n"
        f"🔍 lex.uz, my.gov.uz, soliq.uz manbalaridan qidiraman\n"
        f"📋 Oddiy so'zlar bilan tushuntiraman\n"
        f"⚡ Bir necha soniyada javob beraman\n\n"
        f"Quyidagi tugmani bosing:",
        parse_mode="Markdown",
        reply_markup=keyboard
    )


# ── /help handler ──
async def help_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "📌 *Qanday foydalanish:*\n\n"
        "1️⃣ «HuquqBot ni ochish» tugmasini bosing\n"
        "2️⃣ Savolingizni oddiy o'zbek tilida yozing\n"
        "3️⃣ AI tahlil qilib, rasmiy manbadan javob beradi\n\n"
        "💡 *Misol savollar:*\n"
        "• Mehnat ta'tili necha kun?\n"
        "• YaTT ochish uchun nima kerak?\n"
        "• Uy sotib olsam qanday soliq to'layman?\n\n"
        "⚠️ Bu ma'lumotlar umumiy ma'lumot uchun. "
        "Muhim masalalar uchun mutaxassisga murojaat qiling.",
        parse_mode="Markdown"
    )


# ── Oddiy xabar kelsa ──
async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = InlineKeyboardMarkup([
        [InlineKeyboardButton(
            text="⚖️ HuquqBot ni ochish",
            web_app=WebAppInfo(url=WEBAPP_URL)
        )]
    ])
    await update.message.reply_text(
        "Savolingizni HuquqBot ilovasida bering 👇",
        reply_markup=keyboard
    )


# ── Bot menyusini o'rnatish ──
async def post_init(application: Application):
    await application.bot.set_chat_menu_button(
        menu_button=MenuButtonWebApp(
            text="⚖️ Yuridik yordam",
            web_app=WebAppInfo(url=WEBAPP_URL)
        )
    )
    logger.info("Menu button o'rnatildi")


# ── Main ──
def main():
    app = (
        Application.builder()
        .token(BOT_TOKEN)
        .post_init(post_init)
        .build()
    )

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_cmd))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    logger.info("HuquqBot ishga tushdi...")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
