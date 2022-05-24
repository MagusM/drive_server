/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV == 'dev' ? '.dev.env' : '.env',
    }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }