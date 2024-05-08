import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject('CONFIG') private config: { port: number },
  ) {}
  getHello(): string {
    return `Hello World! I am figuring out Nesjs from ${this.devConfigService.getDBHOST()} and port = ${this.config.port}`;
  }
}
