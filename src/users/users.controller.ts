import { Controller, Body, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: createUserDto) {
    return this.usersService.createUser(userDto);
  }
  @Get()
  getAll() {
    return this.usersService.getAllUser();
  }
}
