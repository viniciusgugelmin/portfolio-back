import ICommand from '@botModules/commands/interfaces/ICommand';
import Response from '@botShared/http/router/Response';
import CreateUserService from '@modules/users/services/CreateUserService';
import UserRequest from '@botModules/users/requests/UserRequest';
import IBaseRequest from '@bot/requests/IBaseRequest';
import AppError from '@shared/errors/AppErorr';

export default class UserController {
  static async post(command: ICommand): Promise<Response> {
    const { params }: ICommand = command;
    const userRequest: UserRequest = new UserRequest('POST', params);
    const validation: IBaseRequest = userRequest.validate();

    if (!validation.statusOkay) {
      return new Response({ validation });
    }

    const [name, lastname, email, password, rootPassword] = params;

    const createUser = new CreateUserService();
    const user = await createUser.execute({
      name,
      lastname,
      email,
      password,
      rootPassword,
    });

    return new Response(user);
  }
}
