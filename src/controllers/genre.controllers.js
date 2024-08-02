const catchError = require('../utils/catchError')
const Genre = require('../models/Genre')

const getAll = catchError(async (req, res) => {
  const results = await Genre.findAll()
  return res.json(results)
})

const create = catchError(async (req, res) => {
  const result = await Genre.create(req.body)
  return res.status(201).json(result)
})

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Genre.findByPk(id)
  if (!result) return res.sendStatus(404)
  return res.json(result)
})

const remove = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Genre.destroy({ where: { id } })
  if (!result) return res.sendStatus(404)
  return res.sendStatus(204)
})

const update = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Genre.update(req.body, {
    where: { id },
    returning: true,
  })
  if (result[0] === 0) return res.sendStatus(404)
  return res.json(result[1][0])
})

//?/genres/:id/songs
const setSongs = catchError(async (req, res) => {
  //identificar la canción
  const { id } = req.params
  const genre = await Genre.findByPk(id)

  //seteo las canciones a los géneros
  await genre.setSongs(req.body)

  //Obtener lo que se setea
  const songs = await genre.getSongs()

  return res.json(songs)
})

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  setSongs,
}
