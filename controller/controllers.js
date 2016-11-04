var express = require('express');
var router = express.Router();
var User = require('../models/usersSchema');

//get users
exports.get = showUsers = function (req, res) {
    User.find(function (err, users) {
        if (err) return console.error(err);
        console.log(users);
        res.send(users);
    });
};

exports.get = getUserById = function (req, res) {
    User.findById(req.params.userId)
        .populate('friends')
        .exec(function (err, users) {
            if (err) return console.error(err);
            console.log(users);
            res.send(users);
        });
};

exports.get = userFriends = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err) return console.error(err);
        console.log(user);
        res.send(user.friends);
    });
};

exports.get = addFriend = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err) return console.error(err);
        User.findById(req.params.friendId, function (err, user2) {
            console.log(user, user2);
            user.friends.push(user2);
            user.save(function (err, user) {
                if (err) return next(err);
                res.send(user);
            });
        });
    });
};

//post users
exports.post = saveUser = function (req, res) {
    User(req.body).save(function (err) {
        if (err) return console.error(err);
        console.log('Added new User ' + req.body.login);
        res.send('Added new User ' + req.body.login);
    });
};

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

// delete users
exports.drop = dropUser = function (req, res) {
    User.find(req.body).remove(function (err) {
        if (err) return console.error(err);
        console.log('User ' + req.body.login + 'was removed');
        res.send('User ' + req.body.login + ' was removed');
    });
};