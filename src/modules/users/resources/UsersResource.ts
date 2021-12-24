import JsonResourceCollection from '@botResources/JsonResourceCollection';
import User from '@modules/users/typeorm/entities/User';

interface IUser {
  name: string;
  slug: string;
  avatar: string;
}

export default class UsersResource extends JsonResourceCollection {
  toObject(entity: User): IUser {
    return {
      name: `${entity.name} ${entity.lastname}`,
      slug: entity.slug,
      avatar: entity.avatar,
    };
  }
}
