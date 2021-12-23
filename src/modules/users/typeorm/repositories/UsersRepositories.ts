import { EntityRepository, Repository } from 'typeorm';
import User from '@modules/users/typeorm/entities/User';
import { hash } from 'bcryptjs';
import RemoveMessageDiacritics from '@botModules/messages/services/RemoveMessageDiacritics';

@EntityRepository(User)
export class UsersRepositories extends Repository<User> {
  public async findBySlug(slug: string): Promise<User | undefined> {
    return await this.findOne({ where: { slug } });
  }

  public async findByName(name: string): Promise<User | undefined> {
    return await this.findOne({ where: { name } });
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return await this.findOne({ where: { email } });
  }

  public async generatePassword(password: string): Promise<string> {
    return await hash(password, 8);
  }

  public generateSlug(name: string, lastname: string): string {
    const newName = RemoveMessageDiacritics(name).toLocaleLowerCase();
    const newLastname = RemoveMessageDiacritics(lastname).toLocaleLowerCase();

    const mergeName = `${newName}-${newLastname}`;
    const randonNumber = Math.floor(Math.random() * 1000) + 100;

    return `${mergeName}-${randonNumber}`;
  }
}
