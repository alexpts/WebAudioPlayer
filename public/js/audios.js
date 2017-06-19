function show_audio(url, limit){
  ajax({
    type: 'post',
    url: url,
    data: {
      limit: limit
    },
    success: function(data){
      let audio_block = document.querySelector('.songs_block');
      let id = 1;
      data = JSON.parse(data);
      for (song of data){
        console.log(data);
        buffer.push(song); //Добавляем в буфер
        audio_block.innerHTML+=`
          <div class="music_block">
            <div class="music_img">
              <div class="play_button"><i class="fa fa-play" onclick="playerControl.load('${song.url}', '${song.photo}', '${song.group_name}', '${song.title}', ${buffer.length-1})" aria-hidden="true"></i></div>
              <img src="${song.photo}">
            </div>
            <div class="music_group_name">${song.group_name}</div>
            <div class="music_name">${song.title}</div>
          </div>
        `;
      }
    }
  })
}

//Это уберу
if(window.location == '/audios'){
  show_audio('/getAllMusic', 40);
}
