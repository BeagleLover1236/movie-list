var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/movies', controller.movies.get);
router.post('/movies', controller.movies.post);



module.exports = router;