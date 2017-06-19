function show_playlists(url, limit){
  ajax({
    type: 'post',
    url: url,
    data: {
      limit: limit
    },
    success: function(data){
      let playlists_block = document.querySelector('.playlists_block');
      data = JSON.parse(data);
      console.log(data);
      for (playlist of data){
        playlists_block.innerHTML+=`
          <div class="playlist_block" onclick="load('playlist/${playlist.id}', {playlistId: ${playlist.id}})">
            <img src="${playlist.photo}">
            <div class="playlist_block_name">
              ${playlist.title}
            </div>
            <div class="playlist_block_description">
              ${playlist.description}
            </div>
          </div>
        `;
      }
    }
  })
}
if(window.location == 'playlists'){
 show_playlists('/getAllPlaylist', 3);  
}
