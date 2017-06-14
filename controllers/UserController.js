let User = require('../models/User.js');
module.exports  = {
  show_reg: (req ,res) => {
    res.render('register')
  },
  register: async (req ,res) => {
    let UserData = {
      login: req.body.login,
      password: req.body.password
    }
    let currentUser = await User.getByLogin(UserData.login);
    if(currentUser){
      //уже зарегистрирован
    }else{
      //регистрируем
    }
  },
  get: async (req, res) => {
    let user = await User.getById(1);
    res.send(user);
  }
}
