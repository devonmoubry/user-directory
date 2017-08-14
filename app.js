const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const fs = require('fs');
const users = require('./users');
// const user = require('./user');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/public', express.static('public'));

app.get('/', (request, response) => {
  console.log(users);
  response.render('users', users);
})

app.get('/users/:username/', function (req, res) {
  // Access username via: req.params.username
  console.log(req.params.username);
  response.render('users', users);
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
