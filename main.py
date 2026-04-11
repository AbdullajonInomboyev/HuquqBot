"""
main.py — HuquqBot: Flask + Telegram Bot
"""
import os
import threading
import logging
from dotenv import load_dotenv

load_dotenv()
logging.basicConfig(format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO)
logger = logging.getLogger(__name__)

def run_flask():
    from search_api import app
    port = int(os.getenv("PORT", 5000))
    logger.info(f"🌐 Flask → port {port}")
    app.run(host="0.0.0.0", port=port, debug=False, use_reloader=False)

def run_bot():
    from telegram import Update, WebAppInfo, InlineKeyboardButton, InlineKeyboardMarkup, MenuButtonWebApp
    from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

    BOT_TOKEN  = os.getenv("BOT_TOKEN", "")
    WEBAPP_URL = os.getenv("WEBAPP_URL", "")

    if not BOT_TOKEN:
        logger.error("❌ BOT_TOKEN topilmadi!")
        return

    async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
        user = update.effective_user
        name = user.first_name if user else "Foydalanuvchi"
        kb = InlineKeyboardMarkup([[InlineKeyboardButton(
            text="⚖️ HuquqBot ni ochish", web_app=WebAppInfo(url=WEBAPP_URL)
        )]])
        await update.message.reply_text(
            f"Salom, {name}! 👋\n\n"
            f"Men *HuquqBot* — O'zbekiston qonunchiligidan AI yordamida javob beraman.\n\n"
            f"🔍 50,000+ rasmiy qonun hujjati\n"
            f"🤖 Groq AI tahlili\n"
            f"🇺🇿🇷🇺 O'zbek va Rus tillarida\n"
            f"📄 PDF/Word hujjat tahlili\n\n"
            f"Bosing 👇",
            parse_mode="Markdown", reply_markup=kb
        )

    async def help_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
        kb = InlineKeyboardMarkup([[InlineKeyboardButton(
            text="⚖️ HuquqBot ni ochish", web_app=WebAppInfo(url=WEBAPP_URL)
        )]])
        await update.message.reply_text(
            "📌 *HuquqBot haqida:*\n\n"
            "• O'zbek yoki Rus tilida savol bering\n"
            "• AI rasmiy qonunlardan javob beradi\n"
            "• PDF/Word hujjat yuklash mumkin\n"
            "• Chat tarixi saqlanadi\n\n"
            "⚠️ Ma'lumotlar tanishish uchun. Muhim masalalar uchun yuristga murojaat qiling.",
            parse_mode="Markdown", reply_markup=kb
        )

    async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
        kb = InlineKeyboardMarkup([[InlineKeyboardButton(
            text="⚖️ HuquqBot ni ochish", web_app=WebAppInfo(url=WEBAPP_URL)
        )]])
        await update.message.reply_text("Savolingizni HuquqBot da bering 👇", reply_markup=kb)

    async def post_init(application: Application):
        if WEBAPP_URL:
            await application.bot.set_chat_menu_button(
                menu_button=MenuButtonWebApp(text="⚖️ Yuridik yordam", web_app=WebAppInfo(url=WEBAPP_URL))
            )
            logger.info("✅ Menu button o'rnatildi")

    bot_app = Application.builder().token(BOT_TOKEN).post_init(post_init).build()
    bot_app.add_handler(CommandHandler("start", start))
    bot_app.add_handler(CommandHandler("help", help_cmd))
    bot_app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    logger.info("🤖 Telegram bot ishga tushdi")
    bot_app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    flask_thread = threading.Thread(target=run_flask, daemon=True)
    flask_thread.start()
    run_bot()
