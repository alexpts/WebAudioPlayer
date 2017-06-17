let mysql = require('mysql');
let DbHelper = require('../helpers/DbHelper.js');
let pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'WAP'
})

module.exports = {
  query(query, inserts){
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        try{
          query = mysql.format(query, inserts);
          connection.query(query, function(err, results, fields){
            connection.release();
            //Это нужно как то по другому реализовать
            if (err){
              reject(error);
            }else{
              resolve(DbHelper.queryHelp(results));
            }
          })
        }
        catch (err) {
          console.log('Ошибка при подключении к бд');
        }
      })
    })
  }
}
