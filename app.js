var express = require('express');
var engine = require('ejs-mate');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var connect = require('connect');
var errorhandler = require('errorhandler');
var routes = require('./routes/index');
var users = require('./routes/users');
var mongoose = require('mongoose');
var usersSchema = require('models/usersSchema');
var friendschat = require('models/friendsSchema');

var app = express();

// view engine setup
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/chatdb');{

// users
app.get('/user', function (req, res, next) {
    usersSchema.find(function (err, users) {
        if (err) return console.error(err);
        console.log(users);
        res.send (users);
    });
});

app.post('/user', function (req, res, next) {
    usersSchema(req.body).save(function (err) {
        if (err) return console.error(err);
        console.log('Added new User ' + req.body.login);
        res.send('Added new User ' + req.body.login);
    });
});

app.delete('/user', function (req, res, next) {
    usersSchema.find(req.body).remove(function (err) {
        if (err) return console.error(err);
        console.log('User ' + req.body.login + 'was removed');
        res.send('User ' + req.body.login + ' was removed');
    });
});

// friends
app.get('/friends', function (req, res, next) {
    friendschat.find(function (err, users) {
        if (err) return console.error(err);
        console.log(users);
        res.send (users);
    });
});

app.post('/friends', function (req, res, next) {
    friendschat(req.body).save(function (err) {
        if (err) return console.error(err);
        console.log('Added new User ' + req.body.name);
        res.send('Added new User ' + req.body.name);
    });
});

app.delete('/friends', function (req, res, next) {
    friendschat.find(req.body).remove(function (err) {
        if (err) return console.error(err);
        console.log('User ' + req.body.name + 'was removed');
        res.send('User ' + req.body.name + ' was removed');
    });
});
}

app.get('/',function(req, res, next){
    res.render("index", {
    });
});

    /*app.use('/users', users);*/

// catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

// error handlers
// development error handler
// will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

// production error handler
// no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

module.exports = app;


//old do not use it
/*var userSchema = new mongoose.Schema (
 {
 name: String,
 lastName: String,
 birthday: Date,
 friends: String
 },
 {
 versionKey: false
 });*/
/*var chat = mongoose.model('users', userSchema);*/