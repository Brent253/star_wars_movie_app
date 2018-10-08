var express = require('express'); //functionality of express node module

var app = express(); //specify app is new express application

var routes = require('./routes');
//specify view engine or will get error for not rendering ejs file
app.set('view engine', 'ejs');

var path = require('path');
// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.get('/', routes.home);

app.get('/star_wars_episode/:episode_number?', routes.movie_single);

app.get('*', routes.notFound);


// Listen on port 3000 , prevents heroku error listen on production environment
app.listen(process.env.PORT || 3000);