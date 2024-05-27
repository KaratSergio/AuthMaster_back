import { User } from './user.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Role } from '../roles/roles.model';
import { RolesModule } from '../roles/roles.module';
import { UserRoles } from 'src/roles/user-roles-model';

import { AuthModule } from 'src/auth/auth.module';
import { Post } from '../posts/post.model';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [SequelizeModule.forFeature([User, Role, UserRoles, Post]), RolesModule, forwardRef(() => AuthModule)],
  exports: [UsersService],
})
export class UsersModule {}
