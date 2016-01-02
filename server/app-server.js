//Require Dependencies
var express = require('express'),
    Twitter = require('./Twitter'),
    sentiment = require('./Sentiment');

//Create Express Server Instance
var app = express(),
    port = process.env.PORT || 3000,
    twitterStream = Twitter;

//Routes and Serve Static Files
app.use(express.static(__dirname + './../app/public'));

/*
Create Server and Socket.io Instance
==================*/
var server = app.listen(port);
console.log('Server on port: %s', port);
var io = require('socket.io').listen(server);
var connections = [];


//Create socket.io Connection with Client
//All Socket Listeners Here
io.sockets.on('connection', function(socket) {
  
  socket.once('disconnect', function() {
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log('Socket disconnected: %s sockets remaining', connections.length);
  });

  connections.push(socket);
  console.log('%s Connected. %s sockets connected', socket.id, connections.length);
  
  socket.on('search', function(payload) {
    console.log('Keyword: %s', payload.keyword);

    var twitterStream = Twitter.stream('statuses/filter', {language: 'en', track: payload.keyword});

    //Turn on Twitter Stream
    twitterStream.on('tweet', function(tweet) {
      sentiment.getSentiment(tweet, socket);
    });
  });

}); //END io.sockets.on