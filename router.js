const express = require('express');
const routerApi =  express.Router();

const usersController = require('./controllers/UserController.js');

routerApi.get('/r', usersController.show_reg);

module.exports = routerApi;
