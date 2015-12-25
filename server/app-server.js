//Require Dependencies
var express = require('express'),
    twitterAPI = require('./twitterAPI');

//Create Express Instance
//Set Port
var app = express(),
    port = process.env.PORT || 3000;

//Routes and Serve Static Files
app.use(express.static(__dirname + './../app/public'));
app.use(express.static(__dirname + './../.tmp')); // Serve Bundled React Files
app.use('/api', twitterAPI);


var server = app.listen(port);
var io = require('socket.io').listen(server); // Create Socket server listening on Port
var connections = [];

io.sockets.on('connection', function(socket) { // When a new socket connection happens
  
  socket.once('disconnect', function() {
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log('Socket disconnected: %s sockets remaining', connections.length);
  });

  connections.push(socket);
  console.log('%s Connected. %s sockets connected', socket.id, connections.length);
});

console.log('Server on port: %s', port);