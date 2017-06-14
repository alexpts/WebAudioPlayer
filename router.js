const express = require('express');
const routerApi =  express.Router();

const usersController = require('./controllers/UserController.js');

routerApi.get('/r', usersController.show_reg);
routerApi.post('/r', usersController.register);
routerApi.get('/u', usersController.get);

module.exports = routerApi;
