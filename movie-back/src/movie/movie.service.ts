import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) { }

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

  async remove(params): Promise<any> {
    return await this.movieRepository.delete({
      userId: params.userId,
      movieId: params.movieId,
    });
  }
}
