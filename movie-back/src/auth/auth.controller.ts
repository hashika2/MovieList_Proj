import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() user: any): Promise<any> {
    console.log('222222222222');
    return this.authService.signUp(user);
  }

  @Post('login')
  async login(@Body() loginDTO: any): Promise<any> {
    return this.authService.findAll();
  }
}
