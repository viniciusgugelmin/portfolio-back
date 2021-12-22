'use strict';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import allowBot from '@botConfig/AllowBot.ts';
import 'reflect-metadata';
import { readFile } from 'fs/promises';
import { Client, Intents } from 'discord.js';
import path from 'path';

async function serve() {
  const { SERVER_ERROR } = JSON.parse(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await readFile(
      path.resolve(__dirname, '..', 'assets', 'console_return_messages.json'),
    ),
  );

  const { BOT_TOKEN } = JSON.parse(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await readFile(path.resolve(__dirname, 'config.json')),
  );

  const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });

  bot.on('ready', () => {
    console.log(allowBot());
  });

  bot.login(BOT_TOKEN).catch(() => {
    console.log({
      Code: SERVER_ERROR.CODE,
      Message: SERVER_ERROR.MSG,
      Error: 'error trying to connect bot',
    });
  });
}

serve().then(() => {
  console.log('Discord bot started!');
});
