var express = require('express');
var app = express();
var db = require('./database.js');
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

module.exports = app;