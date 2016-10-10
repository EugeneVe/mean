var express = require('express');
var router = express.Router();
var usersSchema = require('../models/usersSchema');

// friends
router
    .get('/', function (req, res) {
        usersSchema.find(function (err, users) {
            if (err) return console.error(err);
            console.log(users);
            res.send(users);
        });
    });

module.exports = router;