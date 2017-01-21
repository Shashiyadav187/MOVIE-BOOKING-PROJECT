
var logger = require('morgan');
var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('cookie-session');
// var session = require('express-session');

var routes = require('./routes/movie-crud');
var theatre = require('./routes/theatre-crud');
var city = require('./routes/city-crud');
var time = require('./routes/time-crud');
var assign=require('./routes/assignmovies-crud');
var authin = require('./routes/auth');


var bodyParser=require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/movie', routes)
app.use('/theatre', theatre);
app.use('/city', city);
app.use('/time', time);
app.use('/assign', assign);
app.use('/', authin);

var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});

// app.use(logger('dev'));
// app.use(session({keys: ['secretkey1' , 'secretkey2', '...']}));
// app.use(session({
//     secret: 'secret',
//     saveUninitialized: true,
//     resave: true
// }));

app.use(passport.initialize());
app.use(passport.session());

// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}



var server = app.listen(8000, function () {
  console.log('listening on port 8000');
});
