var express = require('express');
var router = express.Router();
var User = require('../models/usersSchema');


//update users
exports.put = changeUser = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err) return next(err);
        user.friends = req.body.friends;
        user.name = req.body.name;
        user.lastName = req.body.lastName;
        user.save(function (err, user) {
            if (err) return next(err);
            res.send(user);
        });
    });
};