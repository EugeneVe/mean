var express = require('express');
var router = express.Router();
var usersSchema = require('../models/usersSchema');

// users
router.get('/user', function (req, res) {
    usersSchema.find(function (err, users) {
        if (err) return console.error(err);
        console.log(users);
        res.send (users);
    });
});

router.post('/user', function (req, res) {
    usersSchema(req.body).save(function (err) {
        if (err) return console.error(err);
        console.log('Added new User ' + req.body.login);
        res.send('Added new User ' + req.body.login);
    });
});

router.put('/user', function(req, res, next) {
    usersSchema.findByIdAndUpdate(req.params.id, req.body, function (err, users) {
        if (err) return next(err);
        res.json(users);
    });
});

router.delete('/user', function (req, res) {
    usersSchema.find(req.body).remove(function (err) {
        if (err) return console.error(err);
        console.log('User ' + req.body.login + 'was removed');
        res.send('User ' + req.body.login + ' was removed');
    });
});

module.exports = router;