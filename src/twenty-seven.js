const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config.json');
const logger = require('./util/logger.js');
const auth = require('./controllers/auth.js');


// configure server
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// define endpoints and controllers
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/profile', function(req, res) {
  res.sendFile(__dirname + '/public/profile.html');
});

app.get('/error', function(req, res) {
  res.sendFile(__dirname + '/public/error.html');
});

app.post('/auth/verify', auth.verify);

// start the server
var server = app.listen(config.NODE_PORT, function() {
  logger.info(`Express listening on port ${config.NODE_PORT}`);
});

