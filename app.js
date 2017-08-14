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
  response.render('users', users);
})

app.get('/:username', (request, response) => {
  // Access username via: req.params.username
  let usersData = users.users;
  let userInfo = {};
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].username === request.params.username) {
      console.log('win', request.params.username);
      userInfo = usersData[i];
    }
  }
  response.render('user', {userInfo: userInfo});
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
