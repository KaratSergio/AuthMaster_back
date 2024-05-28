import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role-dto';

import { Body, Controller, Get, Param, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';

import { Role } from './roles.model';

@ApiTags('Roles (admin panel)')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 201, type: Role })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: 'Get role by type' })
  @ApiResponse({ status: 200, type: Role })
  // @ApiResponse({ status: 404, description: 'Role not found' })
  @HttpCode(HttpStatus.OK)
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
