let User = require('../models/User.js');
let Music = require('../models/Music.js');
let musicController = require('../controllers/MusicController.js')
module.exports = {
  index: (req, res) =>{
    res.render('index', {user: req.session.user || {login: 'Guest'}})
  },
  load_index: (req, res) =>{
    res.render('index', {user: req.session.user || {login: 'Guest'}})
  },
  load_fmusic: (req, res) =>{
    res.render('index', {user: req.session.user || {login: 'Guest'}})
  },
  load_profile: async (req, res) => {
    let musicsArray = [];
    let profile_id = req.params.id;
    let user = await User.getById(profile_id);
    if (user){
      let userPlaylists = '';
      try{
        userPlaylists =  user.playlists;
      }catch(e){
        console.log('Ошибка', user)
      }
      //Если у него есть плейлисты
      if(userPlaylists){
        //Делаем массив с плейлистами
        let playListArray = userPlaylists.split(',');
          //Проходимся по массиву и берем каждый плейлист
          for (playlist of playListArray){
            //Получаем список музыки из текщего плейлиста
            let userMusicList = await Music.getMusicsPlaylist(playlist);
              //Если хоть что то получили
              if(userMusicList){
                //Проходим по массиву музыки
                for(id of userMusicList.songs.split(',')){
                  try{
                    //Получаем музыку
                    let music = await Music.getById(id);
                    musicsArray.push(music);
                  }catch(e){
                    console.log('ERROR 6')
                  }
                }
              }
          }
        }
      }
    res.render('profile', {user: user, musics: musicsArray})
  },
  load_audios: async (req, res) => {
    res.render('audios');
  },
  load_playlists: async (req, res) => {
    res.render('playlists');
  },
  load_playlist: async (req, res) => {
    res.render('playlist');
  }
}
