const express = require('express');
const routerApi =  express.Router();

const usersController = require('./controllers/UserController.js');
const pageController = require('./controllers/PageController.js');
const musicController = require('./controllers/MusicController.js');

routerApi.get('/', pageController.index);
routerApi.get('/load_index', pageController.load_index);
routerApi.get('/load_fmusic', pageController.load_fmusic);
routerApi.get('/load_profile/:id', pageController.load_profile);
routerApi.get('/load_playlists/', pageController.load_playlists);
routerApi.get('/load_playlists/:id', pageController.load_playlist);

routerApi.post('/getAllMusic', musicController.getAllMusic);

routerApi.post('/register', usersController.register);
routerApi.post('/auth', usersController.auth);
routerApi.post('/exit', usersController.exit);

routerApi.get('/test/:id', musicController.getUsersPlayLists);
routerApi.get('/test1/:id', musicController.getUsersMusic);

module.exports = routerApi;
