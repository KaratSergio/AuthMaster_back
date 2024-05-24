import { Column, DataType, Table, Model } from 'sequelize-typescript';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  // prettier-ignore
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true, })
    id: number;
  // prettier-ignore
  @Column({ type: DataType.STRING, unique: true, allowNull: false, })
    email: string;
  // prettier-ignore
  @Column({ type: DataType.STRING, allowNull: false, })
    password: string;
  // prettier-ignore
  @Column({ type: DataType.BOOLEAN, defaultValue: false, })
    banned: boolean;
  // prettier-ignore
  @Column({ type: DataType.BOOLEAN, allowNull: true, })
    banReason: string;
}
