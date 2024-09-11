import { Injectable } from '@nestjs/common';
import { isNil, parseBoolean, parseInt, split } from './helpers';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

type MigrationTransactionMode = 'all' | 'none' | 'each';

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

  static get dbConnection(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.DN_HOST,
      port: parseInt(process.env.DN_PORT),
      username: process.env.DN_USERNAME,
      password: process.env.DN_PASSWORD,
      database: process.env.DN_DATABASE,
      schema: process.env.DN_SCHEMA || 'public',
      autoLoadEntities: true,
      synchronize: false,
      logging: process.env.NODE_ENV === 'development',
      migrationsTableName: process.env.DB_MIGRATIONS_TABLE_NAME || 'migrations',
      migrations: split(process.env.DB_MIGRATIONS_URLS, ','),
      migrationsTransactionMode: ['all', 'none', 'each'].includes(
        process.env.DB_MIGRATIONS_TRANSACTION_MODE,
      )
        ? (process.env
            .DB_MIGRATIONS_TRANSACTION_MODE as MigrationTransactionMode)
        : 'all',
    };
  }
}

export default ConfigService;
