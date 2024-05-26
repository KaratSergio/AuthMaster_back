import { User } from './user.model';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUser();
  }
}
