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
    // fetch all songs from the database
    // Error happens while data is coming back from DB
    throw new Error('Error while fetching songs');
    return this.songs;
  }
}
