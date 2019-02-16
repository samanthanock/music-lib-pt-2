// by the end of this assignment you should have defined multiple protoype functions:
// ---> Library, Playlist, Track

//

// Library has a NAME and a CREATOR (both strings).
// A library has many PLAYLISTS ===> playlists can be added to an INSTANCE of a library.
function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

// Each playlist has a name which is required upon creation
// A playlist also has many tracks.
function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

// a TRACK has a title, a rating (an integer from 1 - 5) and a length (ineger in seconds).
function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

// a library has many playlists
Object.setPrototypeOf(Library.prototype, Playlist.prototype);
// a playlist has many tracks
Object.setPrototypeOf(Playlist.prototype, Track.prototype);

// in order to have playlists to add to the libraries, the playlists need tracks
// in playlists() tracks is an empty array
// each track needs: title, rating, and length.

//tracks object can be added to an instance of playlist
Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
};

//Playlist objects can be added to an instance of a library
Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
};

// Each playlist has an overallRating function
Playlist.prototype.overallRating = function() {
  //calculate the rating by averaging the rating of its tracks.
  let averageRating = 0; //start w/ a manageable default value
  // loop through tracks
  for (let index in this.tracks) {
    // for the index in this instance of tracks
    averageRating += this.tracks[index].rating;
    //add average rating to the index and the rating value of the tracks object
  }
  return averageRating / this.tracks.length;
  // return averageRating divided by the amount of tracks there are
};

// Each playlist also has a totalDuration function which will sum the duration of all its tracks.
Playlist.prototype.totalDuration = function() {
  let averageDuration = 0;
  for (let index in this.tracks) {
    duration += this.tracks[index].length;
  }
  return `this jam is ${duration} seconds long.`;
};

// lets create the library!
const library = new Library('Library', 'Sam');
const playlist = new Playlist(`Sam's Cool Playlist`);
// tracks have three things they need: name, rating, seconds
const song = new Track('Somewhere Over the Rainbow', 4, 400);
const song2 = new Track('Bodak Yellow', 3, 200);
const song3 = new Track(`Chadadadahoootchie`, 5, 500);
// add songs to playlist

playlist.addTrack(song);
console.log(song);
playlist.addTrack(song2);
console.log(song2);
playlist.addTrack(song3);

// add playlist to library
library.addPlaylist(playlist);
console.log(playlist);
console.log(library.playlists);
