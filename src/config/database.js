const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database/db.sqlite'), // Ruta de la base de datos
  logging: console.log,
});




module.exports = sequelize;



