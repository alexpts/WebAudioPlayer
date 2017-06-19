//Здесь будет модель пользователя
let db = require('./BD.js');
let Music = {
  getById : function(id){
    try{
      return db.query(`SELECT * FROM musics WHERE id = ?`, id);
    }catch(e){
      console.log('ERROR2')
    }
  },
  getAll : function(id){
    try{
      return db.query(`SELECT * FROM musics ORDER BY group_name asc`);
    }catch(e){
      console.log('ERROR2')
    }
  },
  getUsersPlayLists(user_id){
    try{
      return db.query(`SELECT playlists FROM users WHERE id = ?`, user_id);
    }catch(e){
      console.log('ERROR 1')
    }
  },
  getPlayListById(id){
    try{
      return db.query(`SELECT * FROM playlists WHERE id = ?`, id);
    }catch(e){
      console.log('ERROR 12')
    }
  },
  getAllPlaylists(){
    try{
      return db.query(`SELECT * FROM playlists`);
    }catch(e){
      console.log('ERROR2')
    }
  },
  getMusicsPlaylist(playlist_id){
    try{
      if (playlist_id > 0){
        let result = db.query(`SELECT songs FROM playlists WHERE id = ?`, playlist_id);
        return result;
      }
    }catch(e){
      console.log('ERROR 3')
    }
  },
  getUsersMusic: async (req, res) => {
    try{
      let musicsArray = [];
      let userId =req.params.id;
      let userPlaylist = await Music.getUsersPlayLists(userId);
      let playListArray = userPlaylist.playlists.split(',');
      for (playlist of playListArray){
        if (playlist){
          let userMusicList = await Music.getMusicsPlaylist(playlist);
          if(userMusicList){
            for(id of userMusicList.songs){
              try {
                let music = await Music.getById(id);
                musicsArray.push(await Music.getById(id));
              }catch(e){
                console.log('ERROR 4')
              }
            }
          }
        }
      }

      return musicsArray;
    }catch(e){

    }
  }
}
module.exports = Music;
