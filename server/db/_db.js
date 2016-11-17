// import path from 'path';
// import Sequelize from 'sequelize';


// const env = require(path.join(__dirname, '../env'));
// const db = new Sequelize('postgres://localhost:5432/musetherapy', { logging: env.LOGGING }).sync({ force: true });

// export default db;

var path = require('path');
var Sequelize = require('sequelize');

var env = require(path.join(__dirname, '../env'));
var db = new Sequelize('postgres://localhost:5432/musetherapy', { logging: env.LOGGING });

module.exports = db;
