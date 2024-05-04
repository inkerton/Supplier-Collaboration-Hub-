const { User } = require("../model/User");
const crypto = require('crypto');
const { sanitizeUser } = require('../services/common');
const SECRET_KEY = 'SECRET_KEY';
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res)=> {
    try {
        const crypto = require('crypto');
        const { sanitizeUser } = require('../services/common');
        const SECRET_KEY = 'SECRET_KEY';
        const jwt = require('jsonwebtoken');   
    }catch(err) {
            res.status(400).json(err);
    }
};

exports.loginUser = async (req, res)=> {
    res.json(req.user);
};

exports.checkUser = async (req, res) => {
  res.json({status:'success',user: req.user});
};
// change in frontend 8:16:00 and 8:21:45 and 8:56:00
