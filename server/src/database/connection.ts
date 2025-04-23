import { Sequelize } from 'sequelize-typescript';
import { dbConfig } from '../config/db.config';

import { User } from '../models/User/user.Model';
import { Session } from '../models/User/session.model';
const sequelize = new Sequelize({
  database: dbConfig.database || '',
  username: dbConfig.user || '',
  password: dbConfig.password || '',
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: 'mariadb',
  logging: false,
  models: [User, Session], 
});

export default sequelize;

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(' Database connection established successfully.');

    await sequelize.sync({ alter: true }); 
    console.log(' All models were synchronized successfully.');
  } catch (error) {
    console.error(' Unable to connect to the database:', error);
  }
};
