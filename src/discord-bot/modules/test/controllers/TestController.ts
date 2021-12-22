import ICommand from '@botModules/commands/interfaces/ICommand';
import Response from '@botShared/http/router/Response';

export default class TestController {
  static async get(command: ICommand): Promise<Response> {
    return new Response(command);
  }
}
