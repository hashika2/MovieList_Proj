import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
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
  @ApiQuery({
    name: 'userId',
    required: true,
    type: String,
  })
  @ApiQuery({
    name: 'movieId',
    required: true,
    type: String,
  })
  async remove(@Query() params: any): Promise<any> {
    return this.movieService.remove(params);
  }
}
