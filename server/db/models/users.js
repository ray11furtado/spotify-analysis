import Sequelize from 'sequelize';
import db from '../_db';

module.exports = db.define('user', {
	google_id: {
		type: Sequelize.STRING,
	},
	spotify_id: {
		type: Sequelize.STRING,
  },
  access_token: {
    type: Sequelize.TEXT,
  },
  refresh_token: {
    type: Sequelize.TEXT,
	},
}).sync({ force: true });
