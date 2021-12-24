import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from '@modules/users/typeorm/entities/User';

@Entity('users_social_medias')
export default class UserSocialMedia {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  user_id: string;

  @Column()
  prop: string;

  @Column()
  value: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  /// Relations

  @ManyToOne(() => User, user => user.social_medias)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
