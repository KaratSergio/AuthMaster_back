// import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.model';
import { Column, DataType, Table, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { PostCreationAttrs } from '../common/interfaces/interfaces';

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @Column({ type: DataType.STRING })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
