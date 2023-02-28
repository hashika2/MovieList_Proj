import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { userProviders } from './auth/user.providers';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [AppController, AuthController],
  providers: [AppService, ...userProviders, AuthService],
})
export class AppModule {}
