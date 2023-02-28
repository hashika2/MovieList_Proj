import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { userDTO } from './auth.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async signUp(userDto: userDTO): Promise<any> {
    const { password, email } = userDto;
    //check the email
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      throw new HttpException('User already exist', 400);
    }
    userDto.password = await bcrypt.hash(password, 10);
    return await this.usersRepository.save(userDto);
  }
}
