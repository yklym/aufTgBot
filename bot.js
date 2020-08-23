const Telegraf = require("telegraf");
const token = require("./configs/env").botToken;
const bot = new Telegraf(token)

bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log('Response time: %sms', ms)
})

bot.on('text', (ctx) => ctx.reply('Hello World'))
bot.launch().catch(err => console.log(err))