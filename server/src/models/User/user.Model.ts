import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  username: string;  // Sửa 'updatesername' thành 'username'

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
}

export interface IUser {
  username: string;
  password: string;
  email: string;
}
