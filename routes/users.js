var express = require('express');
var router = express.Router();
var usersSchema = require('../models/usersSchema');

// users
router
    .get('/', function (req, res) {
        usersSchema.find(function (err, users) {
            if (err) return console.error(err);
            console.log(users);
            res.send (users);
        });
    })

    .post('/', function (req, res) {
        usersSchema(req.body).save(function (err) {
            if (err) return console.error(err);
            console.log('Added new User ' + req.body.login);
            res.send('Added new User ' + req.body.login);
        });
    })

    .get('/:userId', function (req, res) {
        usersSchema.findById(req.params.userId, function (err, users) {
            if (err) return console.error(err);
            console.log(users);
            res.send (users);
        });
    })

    .put('/:userId',function(req, res) {
        usersSchema.findById(req.params.userId, function (err, users) {
            if (err) return next(err);
            users.name = req.body.name;
            users.lastName = req.body.lastName;
            users.birthday = req.body.birthday;
            users.friends = req.body.friends;
            users.save(function (err) {
                if (err) return next(err);
                res.send (users);
            });
        });
    })

    .delete('/', function (req, res) {
        usersSchema.find(req.body).remove(function (err) {
            if (err) return console.error(err);
            console.log('User ' + req.body.login + 'was removed');
            res.send('User ' + req.body.login + ' was removed');
        });
    });

module.exports = router;