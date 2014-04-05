var ratingsFile = 'ratings.csv';
var apiKey 	= 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var username 	= 'XXXXXXX';
var password	= 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

var Ratings 	= require('./ratings.js');
var Requests 	= require('./requests.js');

var ratings 	= new Ratings(ratingsFile);
ratings.getRatings(function(ratings) {

	var requests = new Requests(apiKey, username, password, ratings);
	requests.rateMovie();
	requests.movieSeen();
});