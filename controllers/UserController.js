let User = require('../models/User.js');
let sha1 = require('sha1');
module.exports  = {
  show_reg: (req ,res) => {
    res.render('register')
  },
  register: async (req ,res) => {
    let response;
    let UserData = {
      login: req.body.login,
      password: sha1(req.body.password)
    }
    console.log(UserData);
    let currentUser = await User.getByLogin(UserData.login);
    if(!!currentUser.length){
      //уже зарегистрирован
      response = {status: false, message: 'Имя пользователя занято'}
    }else{
      User.add(UserData) ?
        response = {status: true, message: 'Вы зарегистрированы'} :
        response = {status: false, message: 'Ошибка, попробуйте еще раз'}
    }
    res.send(JSON.stringify(response));
  },
  get: async (req, res) => {
    let user = await User.getById(1);
    res.send(user);
  }
}
