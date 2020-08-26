const { Sequelize, DataTypes, Model } = require('sequelize');


const database = require("../../database/connection");


class User extends Model { }

User.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
    sequelize: database, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
User === database.models.User
module.exports = User
