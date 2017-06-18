let User = require('../models/User.js');
let Music = require('../models/Music.js');
let sha1 = require('sha1');
module.exports  = {
  show_reg: (req ,res) => {
    res.render('register')
  },
  register: async (req ,res) => {
    let response;
    console.log("Регистрируем");
    console.log(req.body);

    let UserData = {
      login: req.body.login ||  'Guest',
      password: sha1(req.body.password) || 'aaa111'
    }
    let currentUser = await User.getByLogin(UserData.login);
    if(currentUser){
      //уже зарегистрирован
      response = {status: false, message: 'This login already exists'}
    }else{
      User.add(UserData) ?
        response = {status: true, message: 'You ready to listen music!'} :
        response = {status: false, message: 'Error :( Try again...'}
    }
    console.log(response);
    res.json(response);
  },
  auth: async (req, res) => {
    let response;
    let UserData = {
      login: req.body.login,
      password: sha1(req.body.password)
    }
    //При получении результата получаю массив, даже если запрос заведомо может дать только 1 результат.
    let currentUser = await User.getByLogin(UserData.login);
    if(currentUser){
      if(currentUser.password == UserData.password){
        req.session.user = {
            id: currentUser.id,
            login: currentUser.login
        }
        response = {status: true, message: 'You are beautiful!'}
      }else{
        response = {status: false, message: 'Incorrect password'}
      }
    }else{
      response = {status: false, message: 'No such user :('}
    }
    res.send(JSON.stringify(response));
  },
  exit: async (req, res) => {
    let response;
    req.session.user = {} ?
      response = {status: true, message: 'We will miss you :('} :
      response = {status: false, message: 'Error, how could this happen?'}
    res.send(JSON.stringify(response));
  },
  get: async (req, res) => {
    let user = await User.getById(1);
    res.send(user);
  }
}
