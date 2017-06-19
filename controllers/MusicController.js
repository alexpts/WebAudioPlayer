let Music = require('../models/Music.js');
module.exports = {
  getUsersPlayLists: async (req, res) => {
    console.log('Получаем музыку');
    let userId =req.params.id;
    let userPlaylist = await Music.getUsersPlayLists(userId);
    let playListArray = userPlaylist.playlists.split(',');
    res.json(playListArray);
  },
  getUsersMusic: async (req, res) => {
    let musicsArray = [];
    let userId =req.params.id;
    let userPlaylist = await Music.getUsersPlayLists(userId);
    let playListArray = userPlaylist.playlists.split(',');
    for (playlist of playListArray){
      if (playlist){
        let userMusicList = await Music.getMusicsPlaylist(playlist);
        if(userMusicList){
          for(id of userMusicList.songs){
            musicsArray.push(await Music.getById(id));
          }
        }
      }
    }
    res.json(musicsArray);
  },
  getAllMusic: async (req, res) => {
    let musics =await  Music.getAll();
    console.log(musics);
    res.json(musics);
  }
}
