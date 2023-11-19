import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateUser, ILoadUser } from 'src/types/user';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<ILoadUser[]> {
    return this.userRepository.find();
  }

  async create(@Body() userToCreate: ICreateUser): Promise<void> {
    this.userRepository.save(userToCreate);
  }

  async load(@Body() userToLoad: ILoadUser): Promise<void> {
    this.userRepository.save(userToLoad);
  }

  async update(id: string, userToUpdate: ICreateUser): Promise<void> {
    this.userRepository.update(id, userToUpdate);
  }

  async delete(id: string): Promise<void> {
    this.userRepository.delete(id);
  }
}
