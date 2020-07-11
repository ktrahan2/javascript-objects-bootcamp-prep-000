var playlist = new Object({infamous: "letitgo"})

function updatePlaylist(object, key, value) {
  object[key] = value
  return object
}
function removeFromPlaylist(object, artistName) {
  delete object.artistName;
  return object
}
