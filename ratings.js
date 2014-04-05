var csv 	= require('csv');
var Rating 	= require('./rating.js');

function Ratings(filePath) {
	this.filePath = filePath;
}

Ratings.prototype.getRatings = function(callback) {
	var ratings = [];

	csv()
		.from.path(__dirname + '/' + this.filePath, { delimiter: ',', escape: '"' })
		.transform(function(row, index) {
			
			if(index > 0) {
				var imdb_id 	= row[1];
				var title 	= row[5];
				var year 	= row[11];
				var your_rating = row[8];

				var rating = new Rating(imdb_id, title, year, your_rating);
				ratings.push(rating);
			}
		})
		.on("end", function () {
			console.log('File read!');
			callback(ratings);
		});
}

module.exports = Ratings;