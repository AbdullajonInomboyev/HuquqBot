"""
main.py — HuquqBot: Flask (search_api) + Telegram Bot birgalikda
"""

import os
import threading
import logging
from dotenv import load_dotenv

load_dotenv()

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO
)
logger = logging.getLogger(__name__)


# ── Flask serverni thread da ishlatish ───────────────────────────────────────
def run_flask():
    from search_api import app
    port = int(os.getenv("PORT", 5000))
    logger.info(f"🌐 Flask server ishga tushmoqda → port {port}")
    app.run(host="0.0.0.0", port=port, debug=False, use_reloader=False)


# ── Telegram bot ──────────────────────────────────────────────────────────────
def run_bot():
    import asyncio
    from telegram import Update, WebAppInfo, InlineKeyboardButton, InlineKeyboardMarkup, MenuButtonWebApp
    from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

    BOT_TOKEN  = os.getenv("BOT_TOKEN", "")
    WEBAPP_URL = os.getenv("WEBAPP_URL", "")

    if not BOT_TOKEN:
        logger.error("❌ BOT_TOKEN topilmadi!")
        return

    async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
        user = update.effective_user
        first_name = user.first_name if user else "Foydalanuvchi"
        keyboard = InlineKeyboardMarkup([[
            InlineKeyboardButton(
                text="⚖️ HuquqBot ni ochish",
                web_app=WebAppInfo(url=WEBAPP_URL)
            )
        ]])
        await update.message.reply_text(
            f"Salom, {first_name}! 👋\n\n"
            f"Men *HuquqBot* — rasmiy O'zbekiston qonunchiligidan sodda javob beraman.\n\n"
            f"🔍 50,000+ qonun ichidan AI yordamida qidiraman\n"
            f"📋 Oddiy so'zlar bilan tushuntiraman\n"
            f"⚡ Bir necha soniyada javob beraman\n\n"
            f"Quyidagi tugmani bosing:",
            parse_mode="Markdown",
            reply_markup=keyboard
        )

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

    async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
        keyboard = InlineKeyboardMarkup([[
            InlineKeyboardButton(
                text="⚖️ HuquqBot ni ochish",
                web_app=WebAppInfo(url=WEBAPP_URL)
            )
        ]])
        await update.message.reply_text(
            "Savolingizni HuquqBot ilovasida bering 👇",
            reply_markup=keyboard
        )

    async def post_init(application: Application):
        if WEBAPP_URL:
            await application.bot.set_chat_menu_button(
                menu_button=MenuButtonWebApp(
                    text="⚖️ Yuridik yordam",
                    web_app=WebAppInfo(url=WEBAPP_URL)
                )
            )
            logger.info("Menu button o'rnatildi")

    app_bot = (
        Application.builder()
        .token(BOT_TOKEN)
        .post_init(post_init)
        .build()
    )
    app_bot.add_handler(CommandHandler("start", start))
    app_bot.add_handler(CommandHandler("help", help_cmd))
    app_bot.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    logger.info("🤖 Telegram bot ishga tushmoqda...")
    app_bot.run_polling(allowed_updates=Update.ALL_TYPES)


# ── Main ──────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    # Flask ni alohida threadda ishga tushiramiz
    flask_thread = threading.Thread(target=run_flask, daemon=True)
    flask_thread.start()

    # Bot asosiy threadda ishlaydi
    run_bot()