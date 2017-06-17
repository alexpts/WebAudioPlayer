//Здесь будет модель пользователя
let db = require('./BD.js');
let User = {
  getById : function(id){
    return db.query(`SELECT * FROM users WHERE id = ?`, id);
  },
  getByLogin(login){
    return db.query(`SELECT * FROM users WHERE login = ?`, login);
  },
  add(UserData){
    db.query(`INSERT INTO users (login, password) VALUES (?, ?)`, [UserData.login, UserData.password])
    return true;
  }
}
module.exports = User;
