import { IUser } from 'src/types/user';
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('user')
export class User extends Timestamp implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: false })
  isAdmin: boolean;
}
