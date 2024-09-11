import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UtilsModule } from './utils/utils.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ConfigService from './utils/config.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UtilsModule,
    TypeOrmModule.forRoot(ConfigService.dbConnection),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
