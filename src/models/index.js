const Artist = require('./Artist')
const Genre = require('./Genre')
const Album = require('./Album')
const Song = require('./Song')

//! Relación de Artistas con géneros
Genre.belongsToMany(Artist, { through: 'genresArtists' })
Artist.belongsToMany(Genre, { through: 'genresArtists' })

Album.belongsTo(Artist)
Artist.hasMany(Album)

Song.belongsTo(Album)
Album.hasMany(Song)

Song.belongsToMany(Artist, { through: 'songsArtists' })
Artist.belongsToMany(Song, { through: 'songsArtists' })

Song.belongsToMany(Genre, { through: 'songsGenres' })
Genre.belongsToMany(Song, { through: 'songsGenres' })