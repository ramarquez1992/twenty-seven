const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const errorHandler = require('./services/errorHandler');
const jwt = require('./services/jwt');
const apiRouter = require('./routes/api');
const loginRouter = require('./routes/login');


const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use('/login', loginRouter);
app.use('/api', jwt.middleware, apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.use(errorHandler);

module.exports = app;
