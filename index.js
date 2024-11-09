const TelegramBot = require('node-telegram-bot-api');

const token = '7789757454:AAGIPYflgtHjx7ZnpSt0GzFJn80CEaNyC8E';

const bot = new TelegramBot(token, {polling: true});

    const webUrl = 'https://1d344b663be6bf6c1bc9ccd80761b0e6.serveo.net/';

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId,'Открыть приложение', {
            reply_markup: { 
                inline_keyboard: [
                    [{ text: 'Открыть приложение', web_app: { url: webUrl } }],
                ]
            }
        });
    }
});