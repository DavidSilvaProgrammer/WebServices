const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Array de animais
const animais = [
  {
    "nome": "Girafa",
    "especie": "Giraffa camelopardalis",
    "idade": 8
  },
  {
    "nome": "Elefante",
    "especie": "Loxodonta africana",
    "idade": 15
  },
  {
    "nome": "Tigre",
    "especie": "Panthera tigris",
    "idade": 7
  },
  {
    "nome": "Urso polar",
    "especie": "Ursus maritimus",
    "idade": 10
  }
];

// Rota para listar todos os animais
app.get('/animais', (req, res) => {
  res.status(200).json(animais);
});

// Rota para cadastrar um novo animal
app.post('/animais', (req, res) => {
  const novoAnimal = req.body;

  if (!novoAnimal.nome || !novoAnimal.especie || !novoAnimal.idade) {
    return res.status(400).json({ mensagem: 'Por favor, preencha todos os campos.' });
  }

  // Adiciona o novo animal ao array
  animais.push(novoAnimal);

  // Retorna o novo animal cadastrado
  res.status(201).json(novoAnimal);
});

// Inicia o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
