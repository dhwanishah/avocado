var express = require('express');
var app = express();

/* Routes require */
var root_route = require('./routes/index');

app.use("/", root_route);

app.listen(3000);

module.exports = app;

