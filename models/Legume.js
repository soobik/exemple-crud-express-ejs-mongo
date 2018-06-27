var mongoose = require('mongoose');

var LegumeSchema = new mongoose.Schema({
    nom: String,
    prix: Number,
});

module.exports = mongoose.model("Legume", LegumeSchema);