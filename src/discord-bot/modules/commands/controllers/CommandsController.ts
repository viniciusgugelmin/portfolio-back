import ICommand from '@botModules/commands/interfaces/ICommand';
import Response from '@botShared/http/router/Response';
import ListCommandsService from '@botModules/commands/services/ListCommandsService';

export default class CommandsController {
  static async index(command: ICommand): Promise<Response> {
    const listCommandsService = new ListCommandsService();
    const commands = listCommandsService.execute();

    return new Response(commands);
  }
}
