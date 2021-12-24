import User from '@modules/users/typeorm/entities/User';
import JsonResource from '@botResources/JsonResource';
import UserSocialMedia from '../typeorm/entities/UserSocialMedia';

interface IUser {
  name: string;
  slug: string;
  email: string;
  avatar: string;
  social_medias: UserSocialMedia;
}

export default class UserResource extends JsonResource {
  toObject(entity: User): IUser {
    return {
      name: `${entity.name} ${entity.lastname}`,
      slug: entity.slug,
      email: entity.email,
      avatar: entity.avatar,
      social_medias: entity.social_medias,
    };
  }
}
