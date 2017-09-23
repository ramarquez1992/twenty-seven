const winston = require('winston');
const config = require('../../config.json');

const logger = new (winston.Logger) ({
  level: 'silly',
  transports: [
    new winston.transports.Console({
      name: 'console',
      timestamp: Date.now
    }),
    new winston.transports.File({
      name: 'info-file',
      filename: `${config.LOG_FILE_LOCATION}${config.LOG_FILE_NAME}`,
      maxsize: 5000000,
      maxFiles: 1,
      json: false,
      timestamp: Date.now
    }),
    new winston.transports.File({
      name: 'error-file',
      filename: `${config.LOG_FILE_LOCATION}${config.ERROR_FILE_NAME}`,
      maxsize: 5000000,
      maxFiles: 1,
      json: false,
      timestamp: Date.now
    })
  ],
  exitOnError: false
});

module.exports = logger;