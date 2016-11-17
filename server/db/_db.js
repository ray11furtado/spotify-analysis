import path from 'path';
import Sequelize from 'sequelize';


const env = require(path.join(__dirname, '../env'));
const db = new Sequelize(env.DATABASE_URI, { logging: env.LOGGING });
export default db;
