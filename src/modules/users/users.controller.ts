import { Body, Controller, Get, Post } from '@nestjs/common';
import { ICreateUser, ILoadUser } from 'src/types/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<ILoadUser[]> {
    return this.usersService.findAll();
  }

  @Post('load')
  async load(@Body() loadUser: ILoadUser) {
    return this.usersService.load(loadUser);
  }

  @Post('create')
  async create(@Body() userToCreate: ICreateUser): Promise<void> {
    this.usersService.create(userToCreate);
  }
}
