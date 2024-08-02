const Artist = require('./Artist')
const Genre = require('./Genre')
const Album = require('./Album')
const Song = require('./Song')

//! Relación de Artistas con géneros
Genre.belongsToMany(Artist, { through: 'genresArtists' })
Artist.belongsToMany(Genre, { through: 'artistsGenres' })

Album.belongsTo(Artist)
Artist.hasMany(Album)

