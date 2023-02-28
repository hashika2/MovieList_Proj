import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { LoginDTO, userDTO } from './auth.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constant';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async signUp(userDto: userDTO): Promise<any> {
    const { password, email } = userDto;
    //check the email
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }
    userDto.password = await bcrypt.hash(password, 10);
    return await this.usersRepository.save(userDto);
  }

  async login(loginDTO: LoginDTO): Promise<any> {
    const { password, email } = loginDTO;
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new HttpException(
        'Invalid email or password',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (await bcrypt.compare(password, user.password)) {
      const payload = { sub: user.id };
      return {
        access_token: this.jwtService.sign(payload, {
          secret: jwtConstants.secret,
        }),
        type: 'Bearer',
        expiresIn: '7200s',
      };
    } else {
      throw new HttpException(
        'Invalid email or password',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
