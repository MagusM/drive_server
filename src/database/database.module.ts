/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
    imports: [TypeOrmModule.forRoot()],
    exports: [TypeOrmModule],
})
export class DatabaseModule {
    constructor(connection: Connection) {
        if (connection.isInitialized) {
            console.log("DB Initialized Successfully!");
        }
    }
}
