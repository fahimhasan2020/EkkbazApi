var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv/config');
const cors = require("cors");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var businessRouter = require('./routes/business');

var app = express();

// view engine setup
const viewsPath = path.join(__dirname, '../views') 
app.set('views', viewsPath);
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECT);
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/business', businessRouter);
app.use((req, res, next)=> {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
