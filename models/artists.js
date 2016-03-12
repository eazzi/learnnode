
//Module Dependencies
var mongoose = require ('mongoose');

//Schema
var ArtistSchema = new mongoose.Schema({
  name: {type:String, required: true},
  slug: {type:String, required: true}

});

//return Model
module.exports = mongoose.model('Artist', ArtistSchema)
