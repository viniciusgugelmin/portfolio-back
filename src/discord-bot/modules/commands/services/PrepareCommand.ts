import ICommand from '@bot/modules/commands/interfaces/ICommand';
import { Message } from 'discord.js';

export default (message: Message): ICommand => {
  const [command, ...params] = message.content.split(' ');

  return {
    command,
    params,
  };
};
