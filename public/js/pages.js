function load(page, userdata){
  //Это нужно как то исправить
  userdata && userdata.playlistId ? url = `/${page}/${userdata.playlistId}` : url =`/${page}`;

  ajax({
    url: url,
    type: 'get',
    success: function(data){
      window.history.pushState(false, document.title, this.url);
      var el = document.createElement( 'html' );
      el.innerHTML = data;
      document.querySelector('.main').innerHTML = (el.querySelector('.main').innerHTML);
      //Как это сделать правильно?
      if(page == 'index'){
        document.title = 'Home';
      }
      if(page == 'playlists'){
        document.title = 'Playlists';
        show_playlists('/getAllPlaylist', 40);
      }
      if(page == `playlist`){
        document.title = 'Плейлист';
        show_audio(`/getPlayListMusic/${userdata.playlistId}`, 40);
      }
      if(page == 'audios'){
        document.title = 'Audios';
        show_audio('/getAllMusic', 40);
      }
    }
  })
}

window.onpopstate = function(event) {
  event.preventDefault();
  //var returnLocation = history.location || document.location;
  console.log(`Saved ${history.length} pages`)
  let retLocation = document.location ;
  let location = retLocation.href.split('/');
  let link = location[3];
  load(link);
};

window.onload = function(event) {
  let location = document.location.href.split('/');
  let link = location[3];
  let data = location[4];
  console.log(data);
  load(link, {playlistId: data});
};
