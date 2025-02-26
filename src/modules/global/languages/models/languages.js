const { DataTypes } = require('sequelize');
const sequelize = require('./../../../../config/database'); // Conexión a la BD

const Lang = sequelize.define('Languages',{
      id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // Enables auto-increment
      primaryKey: true,    // Sets it as the primary key
      allowNull: false,    // Ensures it cannot be null
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,    // Ensures name is required
      },
      iso639_1: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
      len: [2, 2], // Debe ser de 2 caracteres
      },   
      },
      iso639_2 : {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
      len: [3, 3], // Debe ser de 3 caracteres
      },
      }   
},{
    tableName:'languages',
    timestamps:false,
});

module.exports = Lang;