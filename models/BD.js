let mysql = require('mysql');
let pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'WAP'
})

module.exports = {
  query(query){
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        connection.query(query, function(err, results, fields){
          connection.release();
          //Это нужно как то по другому реализовать
          if (err){
            reject(error);
          }else{
            resolve(results);
          }
        })
      })
    })
  }
}
