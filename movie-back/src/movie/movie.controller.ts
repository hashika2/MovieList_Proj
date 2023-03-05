import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Request } from 'express';
import { MovieIdsDTO, MoviewDTO } from './movie.model';
import { MovieService } from './movie.service';

@UseGuards(JwtAuthGuard)
@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) { }

  @Get('/')
  async get(@Req() request: Request) {
    return this.movieService.get(request);
  }

  @Post('/add')
  async add(@Body() movie: MoviewDTO) {
    return this.movieService.add(movie);
  }

  @Delete('/remove')
  async remove(@Body() movieIds: MovieIdsDTO, @Req() request: Request) {
    return this.movieService.remove(movieIds, request);
  }
}
