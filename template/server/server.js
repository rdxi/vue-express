var port = process.env.PORT || 3000;
var http = require('http');
var express = require('express');
var compression = require('compression');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./modules/routes.js');
var api = require('./modules/api.js');

var app = express();

app.set('view engine', 'ejs');
app.use(compression());
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(api);
app.use(routes); // routes should be below api, to catch undeclared routes and render page 404

var server = http.createServer(app);
server.listen(port);
console.log('Server is running at localhost:' + port);