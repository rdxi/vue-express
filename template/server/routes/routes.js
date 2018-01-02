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

// TODO move db and api to api module
// TODO move db and api to api module
var db = require('../database/database.js');
var moment = require('moment');


app.get('/posts', function (req, res) {
  var data = db.get('posts').value();
  res.send(data);
});

app.post('/posts', function (req, res) {
  var newPost = {
    text: req.body.text,
    id: new Date().getTime(),
    date: moment().format('MMM Do, HH:mm')
  };

  if (req.body.text) {
    db.get('posts').push(newPost).write();
    res.send(newPost);
  } else {
    res.status(400).send(newPost);
  }
});


app.delete('/posts/:id', function (req, res) {
  var deleteResult = db.get('posts').remove({ id: parseInt(req.params.id, 10) }).write();

  if (deleteResult.length) {
    res.status(200).send(deleteResult);
  } else {
    res.status(400).send(deleteResult);
  }
});

app.get('*', function (req, res) {
  res.status(404).render('404.ejs', {title: '404'});
});


module.exports = app;
