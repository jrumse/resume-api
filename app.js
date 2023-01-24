var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var prefix = '/api/v1';
var cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();

// Cors Configuration
var corsOptions = {
  origin: process.env.CLIENT,
  optionsSuccessStatus: 200
}

// Connect to mongodb database
mongoose.set('strictQuery', false);
mongoose.connect(
  "mongodb+srv://" + process.env.MONGO_ID + ":" + process.env.MONGO_PASS + "@resume-db.vieuhpw.mongodb.net/resume-db?retryWrites=true&w=majority"
);

// Routers
var indexRouter = require('./routes/index');
var contactRouter = require('./routes/contact');
var contentRouter = require('./routes/content');
var postRouter = require('./routes/post');

var app = express();
app.use(cors(corsOptions));

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
app.use(prefix + '/contact', contactRouter);
app.use(prefix + '/content', contentRouter);
app.use(prefix + '/post', postRouter);

// catch 404
app.use(function(req, res, next) {
  res.status(404).json({code: '404', status: "Not Found"});
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
