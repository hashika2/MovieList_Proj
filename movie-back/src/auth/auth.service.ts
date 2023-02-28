import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async signUp(user) {
    const user1 = new User();
    user1.firstName = 'Timber';
    user1.lastName = 'Saw';
    user1.email = 'hashi@gmail.com';
    user1.password = '123456';
    return await this.usersRepository.save(user);
  }
}
