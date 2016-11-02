var express = require('express');
var router = express.Router();
var User = require('../models/usersSchema');


// delete users
exports.drop = dropUser = function (req, res) {
    User.find(req.body).remove(function (err) {
        if (err) return console.error(err);
        console.log('User ' + req.body.login + 'was removed');
        res.send('User ' + req.body.login + ' was removed');
    });
};