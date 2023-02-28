import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO, userDTO } from './auth.model';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() user: userDTO): Promise<any> {
    return this.authService.signUp(user);
  }

  @Post('signin')
  async login(@Body() loginDTO: LoginDTO): Promise<any> {
    return this.authService.findAll();
  }
}
