const express = require('express');
const routerApi =  express.Router();

const usersController = require('./controllers/UserController.js');
const pageController = require('./controllers/PageController.js');

routerApi.get('/', usersController.show_reg);
routerApi.post('/r', usersController.register);
routerApi.post('/auth', usersController.auth);

module.exports = routerApi;
