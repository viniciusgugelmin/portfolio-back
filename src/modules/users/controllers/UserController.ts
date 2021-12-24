import ListUserService from '@modules/users/services/ListUserService';
import { Request, Response } from 'express';
import UsersResource from '@modules/users/resources/UsersResource';
import ShowUserService from '@modules/users/services/ShowUserService';
import UserResource from '@modules/users/resources/UserResource';

export default class UserController {
  static async index(request: Request, response: Response): Promise<Response> {
    const listUserService = new ListUserService();
    const users = await listUserService.execute();

    return response.json(new UsersResource(users).preFormat());
  }

  static async get(request: Request, response: Response): Promise<Response> {
    const showUserService = new ShowUserService();
    const { slug } = request.params;
    const user = await showUserService.execute({ slug });

    return response.json(new UserResource(user).preFormat());
  }
}
