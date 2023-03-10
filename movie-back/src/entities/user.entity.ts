import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Movie } from './movie.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'firstName',
    nullable: false,
    default: '',
  })
  firstName: string;

  @Column({
    name: 'lastName',
    nullable: false,
    default: '',
  })
  lastName: string;

  @Column({
    name: 'email',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    name: 'password',
    nullable: false,
    default: '',
  })
  password: string;

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @Column({
    name: 'isActive',
    nullable: false,
    default: false,
  })
  isActive: boolean;

  @OneToMany(() => Movie, (movie) => movie.user)
  movies: Movie[];
}
