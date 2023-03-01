import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
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
  userId: number;

  @ManyToOne(() => User, (user) => user.movies)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user: User;
}
