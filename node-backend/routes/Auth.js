const express = require('express');
const { createUser, loginUser, checkAuth } = require('../controller/Auth');
const passport = require('passport');

const router = express.Router();

router.post('/signup', createUser)
      .post('/login', passport.authenticate('local'), loginUser)
      .get('/check',passport.authenticate('jwt'), checkAuth);//change in rontend 8:14:22

exports.router = router;
