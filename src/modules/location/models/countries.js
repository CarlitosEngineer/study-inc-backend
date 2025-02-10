const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database'); // Conexión a la BD

const Country = sequelize.define('Country', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  iso3166_2: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [2, 2], // Debe ser de 2 caracteres
    },
  },
  iso3166_3: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [3, 3], // Debe ser de 3 caracteres
    },
  },
  num_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [3, 3], // Debe ser de 3 caracteres
    },
  },
  phone_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [1, 4], // Entre 1 y 4 caracteres
    },
  },
}, {
  tableName: 'countries',
  timestamps: false, // No agregamos `createdAt` y `updatedAt`
});

module.exports = Country;
