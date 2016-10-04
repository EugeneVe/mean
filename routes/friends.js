var express = require('express');
var router = express.Router();
var friendschat = require('../models/friendsSchema');

// friends
router.get('/friends', function (req, res) {
    friendschat.find(function (err, users) {
        if (err) return console.error(err);
        console.log(users);
        res.send (users);
    });
});

router.post('/friends', function (req, res) {
    friendschat(req.body).save(function (err) {
        if (err) return console.error(err);
        console.log('Added new User ' + req.body.login);
        res.send('Added new User ' + req.body.login);
    });
});

router.delete('/friends', function (req, res) {
    friendschat.find(req.body).remove(function (err) {
        if (err) return console.error(err);
        console.log('User ' + req.body.login + 'was removed');
        res.send('User ' + req.body.login + ' was removed');
    });
});

module.exports = router;