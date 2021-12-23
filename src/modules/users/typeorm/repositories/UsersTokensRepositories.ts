import { EntityRepository, Repository } from 'typeorm';
import UserToken from '@modules/users/typeorm/entities/UserToken';

@EntityRepository(UserToken)
export class UserTokensRepositories extends Repository<UserToken> {
  public async findByToken(token: string): Promise<UserToken | undefined> {
    return await this.findOne({ where: { token: token } });
  }

  public async findByUserId(user_id: string): Promise<UserToken | undefined> {
    return await this.findOne({ where: { user_id } });
  }

  public async generate(user_id: string): Promise<UserToken> {
    const token = (Math.floor(Math.random() * 99999999) + 10000000).toString();
    const userToken = await this.create({
      user_id,
      token,
    });

    await this.save(userToken);

    return userToken;
  }
}
