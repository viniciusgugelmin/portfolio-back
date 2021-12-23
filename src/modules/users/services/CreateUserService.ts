import User from '@modules/users/typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '@modules/users/typeorm/repositories/UsersRepositories';
import getConfigFile from '@botConfig/services/GetConfigFile';
import AppErrorBot from '@botShared/errors/AppErrorBot';

interface IRequest {
  name: string;
  lastname: string;
  email: string;
  password: string;
  rootPassword: string;
}

export default class CreateUserService {
  public async execute({
    name,
    lastname,
    email,
    password,
    rootPassword,
  }: IRequest): Promise<User> {
    const config = await getConfigFile();

    // @ts-ignore
    if (rootPassword !== config.ROOT_PASSWORD) {
      throw new AppErrorBot('Root password is invalid');
    }

    const usersRepository = getCustomRepository(UsersRepositories);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppErrorBot(`Email address ${email} already used`);
    }

    const slug = await usersRepository.generateSlug(name, lastname);
    const hashedPassword = await usersRepository.generatePassword(password);

    const user = usersRepository.create({
      name,
      slug,
      lastname,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}
