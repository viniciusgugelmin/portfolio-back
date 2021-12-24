import User from '@modules/users/typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '@modules/users/typeorm/repositories/UsersRepositories';
import AppError from '@shared/errors/AppError';

interface IRequest {
  slug: string;
}

export default class ShowUserService {
  public async execute({ slug }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepositories);
    const user = await usersRepository.findBySlug(slug);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}
