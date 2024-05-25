import { User } from './user.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Role } from '../roles/roles.model';
import { RolesModule } from '../roles/roles.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [SequelizeModule.forFeature([User, Role]), RolesModule],
})
export class UsersModule {}
