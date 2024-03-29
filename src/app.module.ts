/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppResolver, AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ComponentsModule } from './components.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.env',
    }),
    DatabaseModule,
    GraphQLModule.forRoot({
      playground: process.env.NODE_ENV === 'dev' ? true : false,
      debug: process.env.NODE_ENV === 'dev' ? true : false,
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    ComponentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule { 
  constructor() {
    console.log(process.env.NODE_ENV);
    
  }
}
//5.13.43