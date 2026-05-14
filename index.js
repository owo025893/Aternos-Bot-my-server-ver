const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
    host: 'Youtube-ng80.aternos.me',
    port: 19132,
    username: 'bot',
    version: false
})
bot.on('spawn', () => console.log('OK'))
bot.on('end', () => process.exit())

