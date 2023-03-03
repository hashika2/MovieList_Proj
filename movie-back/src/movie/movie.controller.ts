import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { MoviewDTO } from './movie.model';
import { MovieService } from './movie.service';
import { Request } from 'express';

@UseGuards(JwtAuthGuard)
@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get('/')
  async get(@Req() request: Request): Promise<any> {
    return this.movieService.get(request);
  }

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
