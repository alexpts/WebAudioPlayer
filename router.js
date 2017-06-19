const express = require('express');
const routerApi =  express.Router();

const usersController = require('./controllers/UserController.js');
const pageController = require('./controllers/PageController.js');
const musicController = require('./controllers/MusicController.js');

routerApi.get('/', pageController.index);
routerApi.get('/index', pageController.load_index);
routerApi.get('/fmusic', pageController.load_fmusic);
routerApi.get('/profile/:id', pageController.load_profile);
routerApi.get('/audios/', pageController.load_audios);

routerApi.get('/playlists', pageController.load_playlists);
routerApi.get('/playlist/:id', pageController.load_playlist);

routerApi.post('/getAllMusic', musicController.getAllMusic);
routerApi.post('/getAllPlaylist', musicController.getAllPlaylist);
routerApi.post('/getPlayListMusic/:id', musicController.getPlayListMusic);

routerApi.post('/register', usersController.register);
routerApi.post('/auth', usersController.auth);
routerApi.post('/exit', usersController.exit);

routerApi.get('/test/:id', musicController.getUsersPlayLists);
routerApi.get('/test1/:id', musicController.getUsersMusic);

module.exports = routerApi;
