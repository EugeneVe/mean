var express = require('express');
var router = express.Router();
var User = require('../models/usersSchema');

//post users
exports.post = saveUser = function (req, res) {
    User(req.body).save(function (err) {
        if (err) return console.error(err);
        console.log('Added new User ' + req.body.login);
        res.send('Added new User ' + req.body.login);
    });
};