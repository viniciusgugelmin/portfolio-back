import ICommand from '@bot/modules/commands/interfaces/ICommand';
import { Message } from 'discord.js';

export default (message: Message): ICommand => {
  const [command, ...params] = message.content.split(' ');
  const response = {
    command: command.slice(1, command.length),
    params,
  };

  return response;
};
