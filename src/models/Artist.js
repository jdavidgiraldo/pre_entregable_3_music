const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Artist = sequelize.define('artist', {
    campo1: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Artist;