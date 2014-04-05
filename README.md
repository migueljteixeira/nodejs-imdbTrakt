Import your [IMDB.com](http://www.imdb.com/) ratings list to [Trakt.tv](http://trakt.tv) - NodeJS
====================

You'll need node.js to run it. Get it at [www.nodejs.org](http://www.nodejs.org).

Run the following command to install the _csv parser_:

    $ npm install csv

Next, run main.js through node program:

    $ node main.js

And that's it!

### Configuration

To download your ratings list from IMDB.com, access the 'Your Ratings' page. Scroll to the bottom and click 'Export this list'. Next, edit the value of the variable _ratingsFile_, to your file name.

You'll need to change the values of the _apiKey_, _username_ and _password_ variables. You can access all this information in your trakt.tv account
