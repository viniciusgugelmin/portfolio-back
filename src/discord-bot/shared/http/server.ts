'use strict';

// @ts-ignore
import GetConfigFile from '@botConfig/services/GetConfigFile';
// @ts-ignore
import isAllowed from '@botModules/users/middlewares/isAllowed';
import 'reflect-metadata';
import { Client, Intents } from 'discord.js';
import AppErrorBot from '@botShared/errors/AppErrorBot';
import ReadCommand from '@botModules/commands/services/ReadCommand';
import routes from '@botShared/http/router/routes';

export default async function serveDiscordBot(): Promise<void> {
  console.log('starting Discord bot...');

  if (!isAllowed()) {
    throw new AppErrorBot('Discord bot cannot be started');
  }

  const config = await GetConfigFile();

  const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });

  bot.on('ready', () => {
    ReadCommand(bot);
  });

  bot
    // @ts-ignore
    .login(config.BOT_TOKEN)
    .then(() => console.log('Discord bot started!'))
    .catch(() => new AppErrorBot('Error trying to connect Discord bot', 401));

  routes();
}
