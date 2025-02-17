const express = require('express')
const routerAlbum = require('./album.router')
const routerArtist = require('./artist.router')
const routerGenre = require('./genre.router')
const routerSong = require('./song.router')
const router = express.Router()

// colocar las rutas aquí
router.use('/albums', routerAlbum)
router.use('/artists', routerArtist)
router.use('/genres', routerGenre)
router.use('/songs', routerSong)

module.exports = router
