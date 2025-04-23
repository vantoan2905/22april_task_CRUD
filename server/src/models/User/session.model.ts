import { Table, Column, Model } from "sequelize-typescript";


@Table
export class Session extends Model<Session> {
    @Column
    token: string;
}