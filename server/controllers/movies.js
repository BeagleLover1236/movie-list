const models = require('../models');

module.exports = {
  get: function (req, res) {
    models.movies.getAll((err, results) => {
      if(err) {
        console.log('ERROR:', err)
        res.sendStatus(500)
      } else {
        res.send(results)
      }
    })
  },
  post: function (req, res) {
    const parameters = [req.body.title];
    models.movies.create(parameters, (err, results) => {
      if(err) {
        console.log('ERROR:', err)
        res.sendStatus(500)
      } else {
        res.sendStatus(201)
      }
    })
  },
  put: function (req, res) {
    const parameters = [req.body.hasWatched, req.params.ID]

    models.movies.update(parameters, (err, results) => {
      if(err) {
        console.log('ERROR:', err)
        res.sendStatus(500)
      } else {
        res.status(200).send('Value has been updated in Databse')
      }
    })
  }
}