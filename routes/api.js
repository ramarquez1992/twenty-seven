const express = require('express');
const router = express.Router();
const sql = require('../services/sql');

router.get('/users', function (req, res, next) {
  sql.prepped('select * from "Users"')
      .then(data => {
        res.send(data);
      });
});

router.post('/logout', function (req, res, next) {
  sql.prepped('UPDATE public."Sessions" SET "expiresAt" = now() WHERE token = $1',
      [
        req.body.sessionToken
      ])
      .then(data => {
        res.send(data);
      });
});

module.exports = router;
