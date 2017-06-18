const express = require('express');
const routerApi =  express.Router();

const usersController = require('./controllers/UserController.js');
const pageController = require('./controllers/PageController.js');

routerApi.get('/', pageController.index);
routerApi.get('/update_main', pageController.update_main);
routerApi.post('/register', usersController.register);
routerApi.post('/auth', usersController.auth);
routerApi.post('/exit', usersController.exit);

module.exports = routerApi;
