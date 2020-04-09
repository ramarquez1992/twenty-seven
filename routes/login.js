const express = require('express');
const router = express.Router();
const sql = require('../services/sql');
const jwt = require('../services/jwt');

router.post('/', function(req, res, next) {
  jwt.authenticate(req.body.token)
      .then(user => {
        sql.prepped('INSERT INTO public."Users" VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO UPDATE SET "email"=$2, "firstName"=$3, "lastName"=$4, "picture"=$5',
            [
              user.sub,
              user.email,
              user.given_name,
              user.family_name,
              user.picture
            ])
            .then(data => {
              res.send(JSON.stringify(user));
            });
      });

});

module.exports = router;
