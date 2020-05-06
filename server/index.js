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
  db.query(queryString, [req.body.title], (err, results) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  })
})

/*
app.get('/movies', (req, res) => {
  db.query('select * from movies', (err, results) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.send(results)
    }
  })
})


app.post('/movies', (req, res) => {
  db.query('INSSERT INTO movies (title) VALUES (?)', [req.body.title], (err, results) => {
    if(err) {
      res.stattus(500).send(err)
    } else {
      res.send(results);
    }

  })
})
*/

app.put('/movie/:id', (req, res) => { //shoul dit be patched?
  // let putQuery = `UPDATE movies SET watched = 1`
  console.log( 'hit put!!!', [req.body.watched])
  console.log('req.pparam', req.params)
  let watched = req.body.watched === true ? 1 : 0;
  let putQuery = `UPDATE movies SET watched = ? WHERE id = ?`
  db.query(putQuery, [watched, req.params.id], (err, result) => {
    if(err) {
      console.log(err)
      res.status(500).send(err);
    } else {
      res.send(result)
    }
  })

  console.log([req.query])
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
