const express = require('express');
const router = express.Router();
const jwt = require('../services/jwt');
const sql = require('../services/sql');

router.get('/sessions', jwt, function(req, res, next) {
  sql.prepped('select * from "Sessions"')
      .then(data => {
        res.send(data);
      });
});

router.post('/login', function(req, res, next) {
  sql.prepped('INSERT INTO public."Sessions" VALUES ($1, $2, $3) ON CONFLICT DO NOTHING',
      [
        req.body.sessionToken,
        req.body.expiresAt,
        req.body.profile.googleId
      ])
      .then(data => {
        res.send(data);
      });
});

router.post('/logout', function(req, res, next) {
  sql.prepped('UPDATE public."Sessions" SET "expiresAt" = now() WHERE token = $1',
      [
        req.body.sessionToken
      ])
      .then(data => {
        res.send(data);
      });
});

module.exports = router;
