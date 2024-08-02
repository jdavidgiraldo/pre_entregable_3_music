const { DataTypes } = require('sequelize')
const sequelize = require('../utils/connection')

const Song = sequelize.define('song', {
  campo1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Song
