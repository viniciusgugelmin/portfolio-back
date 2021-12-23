import { EntityRepository, Repository } from 'typeorm';
import UserSocialMedia from '@modules/users/typeorm/entities/UserSocialMedia';

@EntityRepository(UserSocialMedia)
export class UsersSocialMediasRepositories extends Repository<UserSocialMedia> {
  public async findByUserId(user_id: string): Promise<UserSocialMedia[] | []> {
    return await this.find({ where: { user_id } });
  }

  public async findByProp(prop: string): Promise<UserSocialMedia[] | []> {
    return await this.find({ where: { prop } });
  }
}
