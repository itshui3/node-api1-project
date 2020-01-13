// implement your API here
const express = require('express');
const db = require('./data/db');

const server = express();
const port = 5000;

server.get('/', (req, res) => {
  res.status(200).send('Users web API');
})

server.get('/users', (req, res) => {
  db.find()
    .then( resolve => {
      res.status(200).json(resolve)
    })
    .catch( err => {
      res.status(500).send('Internal server error code 500')
    })
})

server.get('/users/:id', (req, res) => {
  const id = req.params.id;

  db.findById(id)
    .then( user => {
      res.status(200).json(user)
    })
    .catch( err => {
      res.status(500).send('Internal server error code 500')
    })
})

server.listen(port, () => {
  console.log(`app listening on port ${port}`);
})