import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.model';
import { Column, DataType, Table, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { PostCreationAttrs } from '../common/interfaces/interfaces';

@Table({ tableName: 'posts' })
export class UserPost extends Model<UserPost, PostCreationAttrs> {
  @ApiProperty({ example: 2, description: 'post id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Team work', description: 'post title' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({ example: 'Communication, cooperation, trust, responsibility, support.', description: 'content' })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: 'Office picture', description: 'post image' })
  @Column({ type: DataType.STRING })
  image: string;

  @ApiProperty({ example: 7, description: 'user id' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
