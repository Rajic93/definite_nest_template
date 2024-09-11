import { Injectable } from '@nestjs/common';
import ConfigService from './utils/config.service';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    console.log(this.configService.testValues);
    return 'Hello World!';
  }
}
