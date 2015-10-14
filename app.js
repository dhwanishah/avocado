var express = require('express');
var path = require('path');
var app = express();

/* Routes require */
var root_route = require('./routes/index');

/* Views setup */
app.set("views", './views');
app.set("view engine", 'jade');


/* Main routing paths setup */
app.use("/", root_route);


/* Static files path setup */
app.use(express.static('./public'));

app.listen(80);

module.exports = app;

