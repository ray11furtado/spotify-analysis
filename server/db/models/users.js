import Sequelize from 'sequelize';
import db from '../_db';

db.define('user', {
	spotify_id: {
		type: Sequelize.STRING,
  },
	});
export default db;

