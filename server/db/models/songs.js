import Sequelize from 'sequelize';
import db from '../_db';

module.exports = db.define('song', {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	artist: {
		type: Sequelize.ARRAY(Sequelize.TEXT),
	},
	lyrics: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
});
