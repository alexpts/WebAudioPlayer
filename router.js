const express = require('express');
const routerApi =  express.Router();

const usersController = require('./controllers/UserController.js');
const pageController = require('./controllers/PageController.js');

routerApi.get('/', pageController.show_index);
routerApi.post('/register', usersController.register);
routerApi.post('/auth', usersController.auth);

module.exports = routerApi;
