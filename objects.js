var playlist = new Object({infamous: "letitgo"})

function updatePlaylist(object, key, value) {
  object[key] = value
  return object
}
function removeFromplayList(key, value) {
  delete key.value;
  return key
}
