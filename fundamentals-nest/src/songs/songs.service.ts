import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';

@Injectable()
export class SongsService {
  // local array
  private readonly songs = [];

  create(song: CreateSongDTO) {
    // put a new song in the database
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    return this.songs;
  }
}
