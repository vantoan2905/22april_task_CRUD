import { Sequelize } from 'sequelize';
import { dbConfig } from '../config/db.config';

import { User } from '@/models/User/user.Model';






const sequelize = new Sequelize(
  dbConfig.database || '',
  dbConfig.user || '',
  dbConfig.password || '',
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'mariadb',
    logging: false,
  }
);

export default sequelize;


export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

 
