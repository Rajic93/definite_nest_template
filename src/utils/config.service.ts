import { Injectable } from '@nestjs/common';

@Injectable()
class ConfigService {
  get testValues() {
    return {
      TEST_VALUE: process.env.TEST_VALUE,
    };
  }
}

export default ConfigService;
