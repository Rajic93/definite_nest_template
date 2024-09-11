import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [ConfigModule.forRoot(), UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
