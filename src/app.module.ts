import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';

import { User } from './users/user.model';
import { UsersModule } from './users/users.module';
import { UserRoles } from './roles/user-roles-model';

import { Role } from './roles/roles.model';
import { RolesModule } from './roles/roles.module';

import { UserPost } from './posts/post.model';
import { PostsModule } from './posts/posts.module';

import * as path from 'path';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, UserPost],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule,
  ],
})
export class AppModule {}
