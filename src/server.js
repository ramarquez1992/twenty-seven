const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config.json');
const logger = require('./util/logger.js');

// configure server
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// define endpoints and controllers
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

// start the server
var server = app.listen(config.NODE_PORT, function() {
  logger.info(`Express listening on port ${config.NODE_PORT}`);
});

