import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'movieId',
    nullable: false,
    default: '',
  })
  movieId: string;

  @Column({
    name: 'name',
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    name: 'userId',
    nullable: false,
  })
  userId: string;

  @ManyToOne(() => User, (user) => user.movies)
  user: User;
}
