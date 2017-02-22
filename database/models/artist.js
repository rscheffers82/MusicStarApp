// Todo: Create Artist Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlbumSchema = require('./album');

const Artist = new Schema({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  Albums: [AlbumSchema]
});

const ArtistModel = mongoose.model('artist', Artist);

module.exports = ArtistModel;
