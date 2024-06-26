import { User } from './user.model';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';

import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';

import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@ApiTags('Users (admin panel)')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Add role' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: 'Ban user' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/ban')
  ban(@Body() dto: BanUserDto) {
    return this.usersService.ban(dto);
  }
}
