import ICommand from '@botModules/commands/interfaces/ICommand';
import Response from '@botShared/http/router/Response';
import CreateUserService from '@modules/users/services/CreateUserService';
import UserRequest from '@botModules/users/requests/UserRequest';
import IBaseRequest from '@bot/requests/interfaces/IBaseRequest';
import ListUserService from '@modules/users/services/ListUserService';

export default class UserController {
  static async index(command: ICommand): Promise<Response> {
    const listUserService = new ListUserService();
    const users = await listUserService.execute();

    return new Response(users);
  }

  static async post(command: ICommand): Promise<Response> {
    const { params }: ICommand = command;
    const userRequest: UserRequest = new UserRequest('POST', params);
    const validation: IBaseRequest = userRequest.validate();

    if (!validation.statusOkay) {
      return new Response({ validation });
    }

    const [name, lastname, email, password, rootPassword] = params;

    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      lastname,
      email,
      password,
      rootPassword,
    });

    return new Response(user);
  }
}
