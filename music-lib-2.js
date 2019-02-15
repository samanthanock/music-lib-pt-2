// by the end of this assignment you should have defined multiple protoype functions:
// ---> Library, Playlist, Track

//
// Each playlist has an overallRating function which will calculate the rating by averaging the rating of its tracks.
// Each playlist also has a totalDuration function which will summ the duration of all its tracks.

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
