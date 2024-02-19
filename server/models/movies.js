var db = require('../db');

module.exports = {
  getAll: function(callback) {
    var queryString = 'SELECT * FROM movies';

    db.query(queryString, (err, results) => {
      if(err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  create: function(parameters, callback) {
    var queryString = 'INSERT INTO movies (title) VALUE (?)';

    db.query(queryString, parameters, (err, results) => {
      if(err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  update: function(parameters, callback) {
    var queryString = 'UPDATE movies SET hasWatched = ? WHERE ID = ?';

    db.query(queryString, parameters, (err, results) => {
      if(err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
}