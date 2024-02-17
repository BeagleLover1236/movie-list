const mysql = require('mysql2')

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'moviesList'
})

dbConnection.connect((err) => {
  if(err) {
    throw (err)
  } else {
    console.log('Connected!')
  }
})

module.exports = dbConnection