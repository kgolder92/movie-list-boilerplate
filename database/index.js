const mysql = require('mysql');

const connection = mysql.createConnection ({
  host: 'localhost',
  user:'student',
  password: 'student',
  database: 'movies'
})
connection.connect(err => {
  if(err) console.log(':(')
  else console.log('connection successful! :)')
})

module.exports = connection;