//Require Dependencies
var express = require('express');

//Create Express Instance
//Set Port
var app = express(),
    port = process.env.PORT || 3000;

//Set Jade as Templating Engine
app.set('views', './views');
app.set('view engine', 'jade');


//Routes and Serve Static Files
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});


app.listen(port);
console.log('Server on port: ' + port);