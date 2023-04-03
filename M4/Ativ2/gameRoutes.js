const express = require('express');
const gameController = require('../controllers/gameController');

// Cria um router para as rotas de games
const router = express.Router();

// Rota para criar um novo game
router.post('/', gameController.criar
