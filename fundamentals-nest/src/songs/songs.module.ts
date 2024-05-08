import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { connection } from '../common/constants/connection';
import { SongsService } from './songs.service';

// const MockingService = {
//   findAll() {
//     return [{ id: 1, title: "Worshipper's heart", arists: 'Dunsin Oyekan' }];
//   },
// };
@Module({
  controllers: [SongsController],
  providers: [
    // regular provider
    SongsService,
    // class provider
    // {
    //   provide: SongsService,
    //   useClass: SongsService,
    // },
    // value provider
    // {
    //   provide: SongsService,
    //   useValue: MockingService,
    // },
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongsModule {}
