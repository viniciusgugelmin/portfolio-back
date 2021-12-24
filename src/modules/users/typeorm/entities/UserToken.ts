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

@Entity('users_tokens')
class UserToken {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  token: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, user => user.tokens)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default UserToken;
