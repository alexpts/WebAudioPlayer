//Здесь будет модель пользователя
let db = require('./BD.js');
let User = {
  getById : function(id){
    try{
      return db.query(`SELECT * FROM users WHERE id = ?`, id);
    }catch(e){
      console.lolg('ERROR 5')
    }
  },
  getByLogin(login){
    try{
      return db.query(`SELECT * FROM users WHERE login = ?`, login);
    }catch(e){
      console.lolg('ERROR 6')
    }
  },
  add(UserData){
    try{
      db.query(`INSERT INTO users (login, password) VALUES (?, ?)`, [UserData.login, UserData.password])
      return true;
    }catch(e){
      console.lolg('ERROR 6')
    }
  }
}
module.exports = User;
