import _ from 'lodash';
import Sequelize from 'sequelize';
import crypto from 'crypto';
import db from '../_db';

// db.define('user', {
// 	email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true,
//    },
// 	password: {
// 		type: Sequelize.STRING,
//   },
//   salt: {
// 		type: Sequelize.STRING,
//   },
// 	spotify_id: {
// 		type: Sequelize.STRING,
//   },
// }, {
// 	instanceMethods: {
//       sanitize: () => _.omit(this.toJSON(), ['password', 'salt']),

//       correctPassword: candidatePassword => this.Model.encryptPassword(
// 																						candidatePassword, this.salt) === this.password,
//     },
// 	classMethods: {
// 		generateSalt: () => crypto.randomBytes(16).toString('base64'),

// 		encryptPassword: (plainText, salt) => {
// 			const hash = crypto.createHash('sha');
// 			hash.update(plainText);
// 			hash.update(salt);
// 			return hash.digest('hex');
// 		},
// 	},
// 	hooks: {
//     beforeValidate: (user) => {
// 			if (user.changed('password')) {
//         user.salt = user.Model.generateSalt();
// 				user.password = user.Model.encryptPassword(user.password, user.salt);
//       }
//     },
//   },
// });
// export default db;
module.exports = db.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING
    },
    firstName : {
        type : Sequelize.STRING,
        allowNull: false,
        defaultValue : 'Kobe'
    },
    lastName : {
        type : Sequelize.STRING,
        allowNull: false,
        defaultValue : 'Shaq'
    },
    defaultDashboard : {
        type : Sequelize.INTEGER
    },
    salt: {
        type: Sequelize.STRING
    },
    google_id: {
        type: Sequelize.STRING
    }
}, {
    instanceMethods: {
        sanitize: function () {
            return _.omit(this.toJSON(), ['password', 'salt']);
        },
        correctPassword: function (candidatePassword) {
            return this.Model.encryptPassword(candidatePassword, this.salt) === this.password;
        }
    },
    classMethods: {
        generateSalt: function () {
            return crypto.randomBytes(16).toString('base64');
        },
        encryptPassword: function (plainText, salt) {
            var hash = crypto.createHash('sha1');
            hash.update(plainText);
            hash.update(salt);
            return hash.digest('hex');
        }
    },
    hooks: {
        beforeValidate: function (user) {
            if (user.changed('password')) {
                user.salt = user.Model.generateSalt();
                user.password = user.Model.encryptPassword(user.password, user.salt);
            }
        }
    }
});

