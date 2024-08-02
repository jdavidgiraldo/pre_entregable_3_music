const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Genre = sequelize.define('genre', {
    campo1: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Genre;