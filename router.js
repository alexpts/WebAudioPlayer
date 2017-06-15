const express = require('express');
const routerApi =  express.Router();

const usersController = require('./controllers/UserController.js');
const pageController = require('./controllers/PageController.js');
routerApi.get('/', pageController.show_index);
routerApi.get('/r', usersController.show_reg);
routerApi.post('/r', usersController.register);
routerApi.post('/a', usersController.auth);
routerApi.get('/u', usersController.get);

module.exports = routerApi;
