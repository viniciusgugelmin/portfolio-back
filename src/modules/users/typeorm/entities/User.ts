import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import UserSocialMedia from './UserSocialMedia';
import UserToken from '@modules/users/typeorm/entities/UserToken';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  slug: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  /// Relations

  @OneToMany(() => UserSocialMedia, userSocialMedia => userSocialMedia.user)
  social_medias: UserSocialMedia[];

  @OneToMany(() => UserToken, userToken => userToken.user)
  tokens: UserToken[];
}
