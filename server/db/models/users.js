const {Sequelize, DataTypes, Model} = require('sequelize');
const database = require('./db');

class Users extends Model {}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING
  },
  restaurant: {
    type: DataTypes.STRING
  }
}, {
  database, 
  modelName: 'Users' 
});

module.exports = Users;
