let User = require('../models/User.js');
module.exports = (app) => {
  app.route('/')
    .get(function(req, res){
      res.sendStatus(200);
    })
  app.route('/r')
    .get(function(req, res){
      //Рендер страницы регистрации
      console.log('/r')
      res.render('register');
    })
    .post(function(req, res){
      let login = req.body.login;
      let password = req.body.password;
      
    })
}
