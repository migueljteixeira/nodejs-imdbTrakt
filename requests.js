var http = require('http');

function Requests(apiKey, username, password, ratings) {
	this.apiKey = apiKey;

	this.data = JSON.stringify({
		username: 	username,
		password: 	password,
		movies: 	ratings
	});
}

Requests.prototype.rateMovie = function() {

	var options = {
		hostname: 'api.trakt.tv',
		port: 80,
		path: '/rate/movies/' + this.apiKey,
		method: 'POST'
	};

	var req = http.request(options, function(res) {

		res.on('data', function (data) {
			console.log('response: ' + data);
		});
	});

	req.on('error', function(e) {
		console.log('error: ' + e.message);
	});

	req.write(this.data);
	req.end();
}

Requests.prototype.movieSeen = function() {

	var options = {
		hostname: 'api.trakt.tv',
		port: 80,
		path: '/movie/seen/' + this.apiKey,
		method: 'POST'
	};

	var req = http.request(options, function(res) {

		res.on('data', function (data) {
			console.log('response: ' + data);
		});
	});

	req.on('error', function(e) {
		console.log('error: ' + e.message);
	});

	req.write(this.data);
	req.end();
}

module.exports = Requests;