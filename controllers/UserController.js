let User = require('../models/User.js');
module.exports  = {
  show_reg: (req ,res) => {
    res.render('register')
  }
  register: (req ,res) => {
    let UserData = {
      login: req.body.login,
      password: req.body.password
    }
    
  }
}
