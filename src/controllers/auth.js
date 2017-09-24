const express = require('express');
const config = require('../../config.json');
const logger = require('../util/logger.js');

var GoogleAuth = require('google-auth-library');
var auth = new GoogleAuth;
var client = new auth.OAuth2(config.GOOGLE_CLIENT_ID, '', '');


module.exports = {

  verify: function (req, res) {
    try {
      const idToken = req.body.idToken;

      client.verifyIdToken(
        idToken,
        config.GOOGLE_CLIENT_ID,
        function (err, login) {
          if (err) {
            res.send(false);
            return;
          }

          var payload = login.getPayload();
          var userid = payload['sub'];

          // TODO: check userid is in db
          // if not register
          // if register fails send false and return

          res.send(true);
        });

    } catch (err) {
      logger.info('Failed to login w/ idToken: ' + idToken);
      res.send(false);
    }
  }

};

