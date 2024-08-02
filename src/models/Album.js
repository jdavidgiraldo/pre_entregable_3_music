const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Album = sequelize.define('album', {
    campo1: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Album;