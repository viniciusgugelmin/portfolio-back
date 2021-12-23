import UserController from '@bot/modules/users/controllers/UserController';
import CommandsController from '@botModules/commands/controllers/CommandsController';
import Response from '@botShared/http/router/Response';
import ICommand from '@botModules/commands/interfaces/ICommand';

export default (): (
  | string
  | ((command: ICommand) => Promise<Response>)
)[][] => [
  ['/info', CommandsController.index, 'list all commands'],
  ['/users/get', UserController.index, 'list all users'],
  ['/users/post', UserController.post, 'create a user'],
];
