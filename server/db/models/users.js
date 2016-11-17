import _ from 'lodash';
import Sequelize from 'sequelize';
import db from '../_db';
import crypto from 'crypto';


export default db.define('user', {
	email: {
    type: Sequelize.STRING,
    allowNull: false,
     unique: true,
   },
	password: {
		type: Sequelize.STRING,
  },
  salt: {
		type: Sequelize.STRING,
  },
	spotify_id: {
		type: Sequelize.STRING,
  },
}, {
	instanceMethods: {
      sanitize: () => _.omit(this.toJSON(), ['password', 'salt']),

      correctPassword: candidatePassword => this.Model.encryptPassword(
																						candidatePassword, this.salt) === this.password,
    },
	classMethods: {
		generateSalt: () => crypto.randomBytes(16).toString('base64'),

		encryptPassword: (plainText, salt) => {
			const hash = crypto.createHash('sha');
			hash.update(plainText);
			hash.update(salt);
			return hash.digest('hex');
		},
	},
	hooks: {
    beforeValidate: (user) => {
			if (user.changed('password')) {
        user.salt = user.Model.generateSalt();
				user.password = user.Model.encryptPassword(user.password, user.salt);
      }
    },
  },
});
