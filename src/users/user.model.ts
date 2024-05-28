import { ApiProperty } from '@nestjs/swagger';
import { UserCreationAttrs } from '../common/interfaces/interfaces';
import { Column, DataType, Table, Model, BelongsToMany, HasMany } from 'sequelize-typescript';

import { UserPost } from '../posts/post.model';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles-model';

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '915323451', description: 'unique id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'karat@gmail.ua', description: 'user email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: '3345651', description: 'user password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'true', description: 'user bunned or not' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'spam', description: 'reason for blocking' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => UserPost)
  posts: UserPost[];
}
