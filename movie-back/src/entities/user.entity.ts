import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({
    name: 'isActive',
    nullable: false,
    default: false,
  })
  isActive: boolean;
}
