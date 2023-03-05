import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Movie } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    private authService: AuthService,
  ) {}

  async add(movie): Promise<Movie[]> {
    const { movieId, userId } = movie;
    const existMovie = await this.movieRepository.findOne({
      where: { movieId, userId },
    });
    if (existMovie) {
      throw new HttpException('Movie already exist', HttpStatus.BAD_REQUEST);
    }
    return await this.movieRepository.save(movie);
  }

  async remove(ids, request): Promise<any> {
    const user = await this.authService.getuserId(request);
    const movieIds = ids.movieIds;
    const userId = user.id;
    await this.movieRepository
      .createQueryBuilder()
      .delete()
      .where('userId = :userId', { userId })
      .andWhere('movieId IN (:...movieIds)', { movieIds })
      .execute();
  }

  async get(request): Promise<Movie[]> {
    const user = await this.authService.getuserId(request);
    const movies = await this.movieRepository.find({
      where: { userId: user.id },
    });
    return movies;
  }
}
