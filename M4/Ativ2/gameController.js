const Game = require('../models/gameModel');

module.exports = {
  async index(req, res) {
    try {
      const games = await Game.find({});
      return res.json(games);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Erro ao listar os jogos' });
    }
  },

  async show(req, res) {
    try {
      const game = await Game.findById(req.params.id);
      return res.json(game);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Erro ao exibir o jogo' });
    }
  },

  async store(req, res) {
    try {
      const game = await Game.create(req.body);
      return res.json(game);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Erro ao criar um jogo' });
    }
  },

  async update(req, res) {
    try {
      const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.json(game);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Erro ao atualizar o jogo' });
    }
  },

  async delete(req, res) {
    try {
      await Game.findByIdAndRemove(req.params.id);
      return res.send();
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Erro ao deletar o jogo' });
    }
  },
};
