
//Module Dependencies
var express = require('express');
var jade = require('jade');

//Express settings
var app = express();

//Template settings
app.set('view engine', 'jade');
app.set('views', './views');

// Routes
app.get('/', function(req, res, next){
  res.render('pages/landing');
});

//Start the server
app.listen(3000);
console.log('Express is running on port 3000');
