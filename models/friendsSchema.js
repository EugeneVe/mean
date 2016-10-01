var mongoose = require('mongoose');
var friendsSchema = new mongoose.Schema (
    {
        login: {
            type: String,
            unique: true
        }
    },
    {
        versionKey: false
    });
var friendschat = mongoose.model('friends', friendsSchema);
module.exports = friendschat;