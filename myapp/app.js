var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//Set up mongoose connection
//Import the mongoose module
require('dotenv').config();

var mongoose = require('mongoose');

//Set up default mongoose connection
//var dev_db_url = 'mongodb+srv://@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true'
var dev_db_url = "mongodb+srv://<username>:<password>@cluster0.0zrog.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
console.log(mongoDB);
//mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
mongoose.Promise = global.Promise;
var db = mongoose.connection;
//Tip: If you need to create additional connections you can use mongoose.createConnection().
//This takes the same form of database URI (with host, database, port, options etc.) as connect()
//and returns a Connection object).
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//serve css: gitpod.io/stylesheets/style.css
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log('HALIHÓ');
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log('error handler');
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
