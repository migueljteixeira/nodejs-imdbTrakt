function Rating(imdbID, title, year, rating) {
	this.imdbID = imdbID;
	this.title 	= title;
	this.year 	= year;
	this.rating = rating;
}

Rating.prototype.getImdbID = function() {
	return this.imdbID;
}

Rating.prototype.getTitle = function() {
	return this.title;
}

Rating.prototype.getYear = function() {
	return this.year;
}

Rating.prototype.getRating = function() {
	return this.rating;
}

module.exports = Rating;