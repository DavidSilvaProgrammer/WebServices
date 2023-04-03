const mongoose = require('mongoose');

// Definindo o esquema do model de games
const gameSchema = mongoose.Schema({
  titulo: String,
  genero: String,
  desenvolvedora: String,
  lancamento: Number
});

// Exportando o model de games
module.exports = mongoose.model('Game', gameSchema);
