import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Resolver()
export class AppResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
