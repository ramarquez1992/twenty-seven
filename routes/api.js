const express = require('express');
const router = express.Router();
const sql = require('../services/sql');

router.get('/users', function (req, res, next) {
  sql.prepped('select * from "Users"')
      .then(data => {
        res.send(data);
      });
});

module.exports = router;
