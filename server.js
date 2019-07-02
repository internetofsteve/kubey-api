const express = require('express');
const app = express();


app.get('/cowboyNames', (req, res) => {
  res.json({
    cowboyNames: [
      'Arthur',
      'Dutch',
      'Sean',
      'Lenny',
      'Bill'
    ]
  })
});

module.exports = app;