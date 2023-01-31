import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  public async getCars(): Promise<Car[]> {
    try {
      return await this.carRepository.find();
    } catch (error) {
      console.log('Error in getCars');
      console.log({ error });
      throw new InternalServerErrorException(error);
    }
  }

  public async addNewCar(newCarData: NewCarInput): Promise<Car> {
    const newCar = this.carRepository.create(newCarData);
    try {
      await this.carRepository.save(newCar);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return newCar;
  }
}
