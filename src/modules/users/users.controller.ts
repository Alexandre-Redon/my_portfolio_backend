import { Controller, Get } from '@nestjs/common';
import { ILoadUser } from 'src/types/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(): Promise<ILoadUser[]> {
    return this.userService.findAll();
  }
}
