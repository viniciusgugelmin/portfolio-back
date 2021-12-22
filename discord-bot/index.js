'use strict';

const { BOT_TOKEN } = require('./config.json');
const { SERVER_ERROR } = require('./src/assets/console_return_messages.json');
const { Client, Intents } = require('discord.js');

const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

bot.on('ready', () => {});

bot.login(BOT_TOKEN).catch(() => {
  console.log({
    Code: SERVER_ERROR.CODE,
    Message: SERVER_ERROR.MSG,
    Error: 'error trying to connect bot',
  });
});
