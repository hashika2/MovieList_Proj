import { Body, Controller, Delete, Post } from '@nestjs/common';
import { MoviewDTO } from './movie.model';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Post('/add')
  async add(@Body() movie: MoviewDTO): Promise<any> {
    return this.movieService.add(movie);
  }

  @Delete('/remove')
  async remove(@Body() movie: MoviewDTO): Promise<any> {
    return this.movieService.add(movie);
  }
}
