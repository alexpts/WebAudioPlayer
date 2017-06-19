let player = document.getElementById('player_source');
let player_src = document.getElementById('player_src');
let player_photo = document.getElementById('player_photo');
let music_player_group = document.querySelector('.music_player_group');
let music_player_name = document.querySelector('.music_player_name');



let buffer = [];
let currentMusicId = 0;
let status = false;
player.volume = 0.3;
let playerControl = {
  play: () => {
    let button = document.getElementById('play_button');
    if(!player.paused && !player.ended){
      player.pause();
      button.classList.add('pause')
      button.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
    }else{
      player.play();
      button.classList.remove('pause');
      button.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
    }
  },
  stop: () => {
    player.currentTime = 0;
    player.pause();
  },
  next: () => {
    currentMusicId++;
    if (currentMusicId > buffer.length-1){
      currentMusicId = 0;
    }
    let newSong = buffer[currentMusicId];

    console.log(newSong)
    playerControl.load(newSong.url, newSong.photo, newSong.group_name, newSong.title, currentMusicId);
  },
  pervious: () => {
    currentMusicId--;
    if (currentMusicId < 0){
      currentMusicId = buffer.length-1;
    }
    let newSong = buffer[currentMusicId];

    console.log(newSong)
    playerControl.load(newSong.url, newSong.photo, newSong.group_name, newSong.title, currentMusicId);
  },
  load: (url, photo, group, title, bufferId) => {
    currentMusicId = bufferId;
    playerControl.stop();
    player_photo.src = `${photo}`;
    music_player_group.innerHTML = group;
    music_player_name.innerHTML= title;
    player.src = `/public/music/${url}`;
    playerControl.play();
  },
  moment: (time) => {
    player.currentTime = time;
  },
  update(){
    if (!player.ended){
      let timeField = document.getElementById('player_time');

      let timeline = document.getElementById('timeline');
      let timeline_expect = document.getElementById('timeline_expect');
      let current_timeline = document.getElementById('current_timeline');
      let player_width = timeline.offsetWidth;

      let volumeline = document.getElementById('volumeline');
      let volume_expect = document.getElementById('volumeline_expect');
      let current_volumeline = document.getElementById('current_volumeline');
      let volume_width = volumeline.offsetWidth;

      let minutes = parseInt(player.currentTime/60);
      let seconds = parseInt(player.currentTime%60);
      if (seconds < 10){
        seconds = '0' + seconds;
      }
      let expectTimelineLength = (player.currentTime * player_width) / player.duration;
      let expectVolumelineLength = (player.volume * volume_width) / 1;
      current_timeline.style.width = `${expectTimelineLength}px`;
      current_volumeline.style.width = `${expectVolumelineLength}px`;
      timeField.innerHTML = `${minutes}:${seconds}`;
    }
  }
}
let timeline = document.getElementById('timeline');
let timeline_expect = document.getElementById('timeline_expect');
let current_timeline = document.getElementById('current_timeline');

let volumeline = document.getElementById('volumeline');
let volume_expect = document.getElementById('volumeline_expect');
let current_volumeline = document.getElementById('current_volumeline');

let getTime = timeline.addEventListener('mousemove', function(e){
  let player_width = timeline.offsetWidth;
  let expectLength = e.clientX - timeline.offsetLeft;
  let percent = expectLength/player_width;
  let time = player.duration*percent;
  let setTime = timeline.addEventListener('mouseup', function(e){
    playerControl.moment(time);
  });
  timeline_expect.style.width = `${expectLength}px`;
});

let getVolume = volumeline.addEventListener('mousemove', function(e){
  let volume_width = volumeline.offsetWidth;
  let expectLength = e.clientX - volumeline.offsetLeft;
  let volume = expectLength/volume_width;
  let setTime = volumeline.addEventListener('mouseup', function(e){
      if (volume >= 0 && volume <=1){
        player.volume = volume;
      }
  });
  volume_expect.style.width = `${expectLength}px`;
});
setInterval(playerControl.update, 1000/60);
