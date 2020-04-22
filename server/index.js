const express = require('express');
const app = express();
const path = require('path');
const db = require('../database');
const PORT = 3000 || process.env.PORT;

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());

app.get('/movies', (req, res) => {
  db.query(`SELECT * FROM movies`, (err, results) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  })
})

app.post('/movies', (req, res) => {
  let queryString =  `INSERT INTO movies (title) VALUES (?)`;
  //INSERT INTO movies (movie) VALUES("spiderman");
  db.query(queryString, [req.body.movie], (err, results) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  })
})


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
