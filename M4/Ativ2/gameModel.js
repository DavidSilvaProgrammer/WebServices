const mongoose = require('../database');

const GameSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  desenvolvedora: {
    type: String,
    required: true,
  },
  anoLancamento: {
    type: Number,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  plataforma: {
    type: String,
    required: true,
  },
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
