const express = require('express');
var db = require('./db');
const path = require('path');

//middleware
const morgan = require('morgan')
const cors = require('cors')

//router
const router = require('./routes.js');

const app = express();
module.exports.app = app

//set what we are listening on
app.set('port', 3000)

//logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//set up routes
app.use('/data', router)

//serve client files
app.use(express.static(path.join('client', 'dist')));


//if run directly, run server
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
