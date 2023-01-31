import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(20000, { message: 'Price must be less than $20,000' })
  @Min(1500, { message: 'Price must be greater than $1,500' })
  monthlyPrice: number;

  @Field((type) => Int)
  @Max(1000, { message: 'Daily price cannot be more than $1000' })
  @Min(10, { message: 'Daily price must be at least 10' })
  dailyPrice: number;

  @Field()
  milage: string;

  @Field()
  gas: string;

  @Field()
  gearType: string;

  @Field()
  thumbnailUrl: string;
}
