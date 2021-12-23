import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}
