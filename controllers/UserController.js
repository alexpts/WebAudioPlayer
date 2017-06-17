let User = require('../models/User.js');
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
      response = {status: false, message: 'Имя пользователя занято'}
    }else{
      User.add(UserData) ?
        response = {status: true, message: 'Вы зарегистрированы'} :
        response = {status: false, message: 'Ошибка, попробуйте еще раз'}
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
            id: currentUser.id
        }
        response = {status: true, message: 'Вы были авторизированы'}
      }else{
        response = {status: false, message: 'Неверный пароль'}
      }
    }else{
      response = {status: false, message: 'Пользователь с таким именем не найден'}
    }
    res.send(JSON.stringify(response));
  },
  get: async (req, res) => {
    let user = await User.getById(1);
    res.send(user);
  }
}
