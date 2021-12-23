import isCommand from '@botModules/commands/middlewares/isCommand';
import { Client, Message, MessageOptions } from 'discord.js';
import PrepareCommand from '@bot/modules/commands/services/PrepareCommand';
import { Handler } from '@bot/@types/discord';
import Router from '@botShared/http/router/Router';
import Response from '@botShared/http/router/Response';
import AppErrorBot from '@botShared/errors/AppErrorBot';

export default (bot: Client): void => {
  bot.on('messageCreate', async (message: Message): Promise<void> => {
    if (await isCommand(message)) {
      await reactCommand(message);
      return;
    }

    await reactMessage(message);
  });
};

async function reactCommand(message: Message): Promise<void> {
  const command = PrepareCommand(message);

  try {
    const handler: Handler = Router.getHandlerForCommand(command);
    const controllerResponse: Response = await handler(command);
    const discordMessage: MessageOptions = controllerResponse.resolve();
    await message.channel.send(discordMessage);
  } catch (error) {
    if (error instanceof AppErrorBot) {
      message.channel.send(error.message);
      return;
    }

    new AppErrorBot(`Error trying to get command response - ${error}`);
  }
}

async function reactMessage(message: Message): Promise<void> {
  return;
}
