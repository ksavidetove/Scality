var createError = require('http-errors');
var express = require('express');

var booksRouter = require('./routes/books');

var app = express();

app.use('/api/books', booksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
