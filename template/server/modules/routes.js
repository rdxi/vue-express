var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, '../views'));

app.get('/', function (req, res) {
  res.render('index.ejs', { title: 'vue-express starter' });
});

app.get('/example-server-route', function (req, res) {
  res.render('example-server-route.ejs', { title: 'example server route', message: 'hello!' });
});

app.get('*', function (req, res) {
  res.status(404).render('404.ejs', {title: '404'});
});

module.exports = app;