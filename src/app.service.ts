import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World! from app resolver';
  }
}
@Injectable()
export class AppService {
  constructor(private appResolver: AppResolver) {}

  getHello(): string {
    return this.appResolver.sayHello();
  }
}
