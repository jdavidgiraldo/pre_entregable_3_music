const {
  getAll,
  create,
  getOne,
  remove,
  update,
  setArtist,
} = require('../controllers/song.controllers')
const express = require('express')

const routerSong = express.Router()

routerSong.route('/').get(getAll).post(create)

routerSong.route('/:id/artists').post(setArtist)

routerSong.route('/:id').get(getOne).delete(remove).put(update)

module.exports = routerSong
