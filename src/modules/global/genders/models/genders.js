const { DataTypes } = require('sequelize');
const sequelize = require('./../../../../config/database'); // Conexión a la BD

const Genders = sequelize.define('Genders',{
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
},{
  tableName: 'genders',
  timestamps: false,
});

module.exports = Genders;