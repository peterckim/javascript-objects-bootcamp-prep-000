var playlist = {
  Drake: "God's Plan"
}


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'Thinking Out Loud';
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  console.log(playlist);
  delete playlist.artistName;
  console.log(playlist);
  return playlist;
}