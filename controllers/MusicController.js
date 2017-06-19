let Music = require('../models/Music.js');
module.exports = {
  getUsersPlayLists: async (req, res) => {
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
    let musics =await Music.getAll();
    res.json(musics);
  },
  getAllPlaylist: async (req, res) => {
    let playlists = await Music.getAllPlaylists();
    let response;
    !playlists.length ? response = [playlists] : response = playlists;
    res.json(response);
  },
  getPlayListMusic: async (req, res) => {
    let id = req.params.id;
    let musicsArray = [];
    let musicsidArray = await Music.getMusicsPlaylist(id);
    musicsidArray = musicsidArray.songs.split(',');
    if(musicsidArray){
      for (musicid of musicsidArray){
          musicsArray.push(await Music.getById(musicid));
      }
    }
    res.json(musicsArray);
  }
}
