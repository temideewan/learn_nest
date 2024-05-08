import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from '../common/constants/connection';

@Controller('songs')
export class SongsController {
  constructor(
    private readonly songService: SongsService,
    @Inject('CONNECTION') private connection: Connection,
  ) {
    console.log(connection);
  }
  @Post()
  createSong(@Body() createSongDTO: CreateSongDTO) {
    return this.songService.create(createSongDTO);
  }
  @Get()
  findAll() {
    try {
      return this.songService.findAll();
    } catch (e) {
      throw new HttpException(
        'Server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: e,
        },
      );
    }
  }
  @Get(':id')
  findOneSong(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `fetch song based on id: ${id}`;
  }
  @Put(':id')
  updateSong() {
    return 'update song based on id';
  }
  @Delete(':id')
  deleteSong() {
    return 'delete song based on id';
  }
}
