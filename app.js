var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var prefix = '/api/v1';
const mongoose = require("mongoose");
require('dotenv').config();

// Connect to mongodb database
mongoose.set('strictQuery', false);
mongoose.connect(
  "mongodb+srv://" + process.env.MONGO_ID + ":" + process.env.MONGO_PASS + "@resume-db.vieuhpw.mongodb.net/?retryWrites=true&w=majority"
);

// Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(prefix, indexRouter);
app.use(prefix + '/users', usersRouter);

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
