const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({

  artist_name: {
    type:String,
    required: true,
    trim: true,
  },

  bio: {
    type: String,
    required: true,
    trim: true,
  },

  gallery:{
    type: String,
    required: true,

  },

});

module.exports = mongoose.model('Artist', artistSchema);