const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/games', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = mongoose;
