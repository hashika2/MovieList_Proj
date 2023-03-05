import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { LoginDTO, userDTO } from './auth.model';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/signup')
  async signUp(@Body() user: userDTO) {
    return this.authService.signUp(user);
  }

  @Post('signin')
  async login(@Body() loginDTO: LoginDTO) {
    return this.authService.login(loginDTO);
  }

  @Get('/user')
  @UseGuards(JwtAuthGuard)
  async userId(@Req() request: Request) {
    return this.authService.getuserId(request);
  }
}
