//Здесь будет модель пользователя
let db = require('./BD.js');
let Music = {
  getById : function(id){
    return db.query(`SELECT * FROM musics WHERE id = ?`, id);
  },
  getUsersPlayLists(user_id){
    return db.query(`SELECT playlists FROM users WHERE id = ?`, user_id);
  },
  getMusicsPlaylist(playlist_id){
    return db.query(`SELECT songs FROM playlists WHERE id = ?`, playlist_id);
  }
}
module.exports = Music;
