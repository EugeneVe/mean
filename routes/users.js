var express = require('express');
var router = express.Router();
var User = require('../models/usersSchema');
var get = require('../controller/get');
var post = require('../controller/post');
var put = require('../controller/put');
var drop = require('../controller/delete');

// users routes
router
    .get('/', showUsers)
    .get('/user/:userId', getUserById)
    .get('/user/:userId/friends', userFriends)
    .get('/user/:userId/addfriend/:friendId', addFriend)
    .post('/', saveUser)
    .put('/user/:userId', changeUser)
    .delete('/', dropUser);


module.exports = router;