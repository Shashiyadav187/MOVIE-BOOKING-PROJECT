
var logger = require('morgan');
var express = require('express');
var routes = require('./routes/movie-crud');
var theatre = require('./routes/theatre-crud');
var city = require('./routes/city-crud');


var bodyParser=require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/movie', routes)
app.use('/theatre', theatre);
app.use('/city', city);
var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});


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
