var mongoose = require('mongoose');
var ObjectId = require('mongoose').Schema.ObjectId;
var usersSchema = new mongoose.Schema (
    {
        login: {
            type: String,
            unique: true
        },
        name: String,
        lastName: String,
        birthday: {
            type: Date
        },
        friends: [{ type: ObjectId, ref: 'User' }]
    },
    {
        versionKey: false
    });
var User = mongoose.model('User', usersSchema);

module.exports = User;
