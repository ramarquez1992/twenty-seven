const express = require('express');
const router = express.Router();

const sql = require('../services/sql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  sql.prepped('select * from "Sessions"')
      .then(data => {
        res.send(data);
      });
});

module.exports = router;
