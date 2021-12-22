import { Message } from 'discord.js';
import GetConfigFile from '@botConfig/services/GetConfigFile';

export default async (message: Message): Promise<boolean> => {
  const config = await GetConfigFile();
  // @ts-ignore
  const messageStartsWithPrefix = message.content.startsWith(config.PREFIX);
  const botIsNotMessageAuthor = !message.author.bot;

  if (messageStartsWithPrefix && botIsNotMessageAuthor) return true;

  return false;
};
