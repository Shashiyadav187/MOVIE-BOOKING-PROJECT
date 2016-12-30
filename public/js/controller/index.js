'use strict';

var app = require('angular').module('movieApp');

app.controller('BookingController', require('./bookingController'));
app.controller('CancellationController', require('./cancellationController'));
app.controller('HomeController', require('./homeController'));
app.controller('TheatreController',require('./theatreController'));
app.controller('CityController',require('./cityController'));
app.controller('UserController',require('./userController'));
app.controller('AdminController',require('./adminController'));
app.controller('TimeController',require('./timeController'));
app.controller('AssignMoviesController', require('./assignMoviesController'));
app.controller('SeatsController', require('./seatsController'));
