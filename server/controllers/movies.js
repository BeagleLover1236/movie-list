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
    models.message.create(parameters, (err, results) => {
      if(err) {
        console.log('ERROR:', err)
        res.sendStatus(500)
      } else {
        res.sendStatus(201)
      }
    })
  }
}