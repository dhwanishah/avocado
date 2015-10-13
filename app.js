var express = require('express');
var path = require('path');
var app = express();

/* Routes require */
var root_route = require('./routes/index');

app.set("views", './views');
app.set("view engine", 'jade');

app.use("/", root_route);

app.listen(3000);

module.exports = app;

