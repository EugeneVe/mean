var mongoose = require('mongoose');
var userSchema = new mongoose.Schema (
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
        friends: String
    },
    {
        versionKey: false
    });
var usersSchema = mongoose.model('users', userSchema);
module.exports = usersSchema;
