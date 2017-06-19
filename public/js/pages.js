function load(page, userdata){
  ajax({
    url: `/${page}`,
    type: 'get',
    success: function(data){
      window.history.pushState(null, null, this.url);
      var el = document.createElement( 'html' );
      el.innerHTML = data;
      document.querySelector('.main').innerHTML = (el.querySelector('.main').innerHTML);
      //Как это сделать правильно?
      if (userdata){
        console.log(13);
        show_audio(`/getPlayListMusic/${userdata.playlistId}`, 4);
      }
      if(page == 'audios'){
        show_audio('/getAllMusic', 4);
      }
      if(page == 'playlists'){
        show_playlists('/getAllPlaylist', 4);
      }
    }
  })
}
