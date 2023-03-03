import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { Movie } from 'src/entities';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), AuthModule],
  providers: [MovieService],
  controllers: [MovieController],
  exports: [TypeOrmModule],
})
export class MovieModule {}
