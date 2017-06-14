//Здесь будет модель пользователя
let db = require('./BD.js');
let User = {
  getById : function(id){
    return db.query(`SELECT * FROM users WHERE id = ${id}`);
  },
  getByLogin(login){
    return db.query(`SELECT * FROM users WHERE login = ${login}`);
  }
}
module.exports = User;
