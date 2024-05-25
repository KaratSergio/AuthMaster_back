import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, BelongsToMany } from 'sequelize-typescript';

import { User } from '../users/user.model';
import { UserRoles } from './user-roles-model';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '915323451', description: 'unique id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Admin', description: 'unique user role' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({ example: 'Administrator', description: 'user role' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
