//Require Dependencies
var express = require('express'),
    twitterAPI = require('./twitterAPI');

//Create Express Instance
//Set Port
var app = express(),
    port = process.env.PORT || 8000;

//Set Jade as Templating Engine
app.set('views', './views');
app.set('view engine', 'jade');


//Routes and Serve Static Files
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/api', twitterAPI);


app.listen(port);
console.log('Server on port: ' + port);