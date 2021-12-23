import { Handler } from '@bot/@types/discord';
import ICommand from '@botModules/commands/interfaces/ICommand';

export default class Router {
  private static routeFunctionRecord: Record<string, Handler | void> = {};

  static get(): Record<string, Handler | void> {
    return this.routeFunctionRecord;
  }

  static make(endpoint: string, callback: Handler | void): void {
    this.routeFunctionRecord[endpoint] = callback;
  }

  static getHandlerForCommand(command: ICommand): Handler {
    const controllerCallback: Handler | void =
      Router.routeFunctionRecord[command.command];
    if (controllerCallback) {
      return controllerCallback;
    }

    throw new Error(`Unknown route to process the command ${command.command}`);
  }
}
