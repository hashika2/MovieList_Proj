import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import { JwtService } from '@nestjs/jwt/dist';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'movie',
      entities: entities,
      synchronize: true,
    }),
    AuthModule,
    MovieModule,
  ],
  controllers: [AppController, AuthController, MovieController],
  providers: [AppService, AuthService, JwtService, MovieService],
})
export class AppModule {}
