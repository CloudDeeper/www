var express = require('express');
var routes = require('./routes/route');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
var port = process.env.PORT || 8080;

app.listen(port);
console.log('Magic happens on port ' + port);

