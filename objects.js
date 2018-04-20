var playlist = {
  Drake: "God's Plan",
}


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'Thinking Out Loud';
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}