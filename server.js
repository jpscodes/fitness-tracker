var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Added ability to track users session with passport
var session = require('express-session');
// Added passport to track users session
const passport = require('passport');
// Added Method override to my project
var methodOverride = require('method-override');

// Loaded "secrets" in the .env file to be accessed 
require('dotenv').config();
// Connected to the MongoDB database through the database folder relating to the .env file database url
require('./config/database');
// requiring passport
require('./config/passport');

var indexRouter = require('./routes/index');
var serverRouter = require('./routes/server');
var workoutsRouter = require('./routes/workouts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Added method override and called it after installing using npm i method-override in terminal
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Adding session middleware ensuring user is logged in
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
// mounted passport twice
app.use(passport.initialize());
app.use(passport.session());
// Added 
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use('/', indexRouter);
app.use('/server', serverRouter);
app.use('/workouts', workoutsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
