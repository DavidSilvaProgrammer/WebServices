const Game = require('../models/gameModel');

// Função para criar um novo game
exports.criarGame = async (req, res) => {
  try {
    // Cria um novo game com base nos dados enviados pelo cliente
    const novoGame = new Game(req.body);
    // Salva o game no banco de dados
    await novoGame.save();
    // Retorna o game criado com o status de sucesso
    res.status(201).json(novoGame);
  } catch (error) {
    // Retorna um erro caso não seja possível criar o game
    res.status(400).json({ message: error.message });
  }
};

// Função para listar todos os games
exports.listarGames = async (req, res) => {
  try {
    // Busca todos os games no banco de dados
    const games = await Game.find();
    // Retorna os games encontrados com o status de sucesso
    res.status(200).json(games);
  } catch (error) {
    // Retorna um erro caso não seja possível listar os games
    res.status(404).json({ message: error.message });
  }
};

// Função para buscar um game pelo ID
exports.buscarGamePorId = async (req, res) => {
  try {
    // Busca um game pelo ID no banco de dados
    const game = await Game.findById(req.params.id);
    // Retorna o game encontrado com o status de sucesso
    res.status(200).json(game);
  } catch (error) {
    // Retorna um erro caso não seja possível encontrar o game
    res.status(404).json({ message: error.message });
  }
};

// Função para atualizar um game pelo ID
exports.atualizarGame = async (req, res) => {
  try {
    // Busca e atualiza um game pelo ID no banco de dados
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    // Retorna o game atualizado com o status de sucesso
    res.status(200).json(game);
  } catch (error) {
    // Retorna um erro caso não seja possível atualizar o game
    res.status(400).json({ message: error.message });
  }
};

// Função para deletar um game pelo ID
exports.deletarGame = async (req, res) => {
  try {
    // Busca e deleta um game pelo ID no banco de dados
    const game = await Game.findByIdAndDelete(req.params.id);
    // Retorna o game deletado com o status de sucesso
    res.status(200).json(game);
  } catch (error) {
    // Retorna um erro caso não seja possível deletar o game
    res.status(400).json({ message: error.message });
  }
};
