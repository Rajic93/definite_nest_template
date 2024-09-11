import { Injectable } from '@nestjs/common';

@Injectable()
class ConfigService {
  static get swaggerSetup() {
    return {
      title: 'Definite Nest template',
      description:
        'This template is meant to save you time and get to work in no time',
      version: '1.0',
      tags: [],
      path: '/api',
    };
  }
}

export default ConfigService;
