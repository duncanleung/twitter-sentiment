//Require Dependencies
var express = require('express');

var Twitter = require('./Twitter'),
    sentiment = require('./NodeSentiment.js'),
    twitterStream = Twitter;

//Create Express Server Instance
var app = express(),
    port = process.env.PORT || 3000;

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

  connections.push(socket);
  console.log('%s Connected. %s sockets connected', socket.id, connections.length);
  
  var prevSearch = false;
  var twitterStream;

  socket.on('search', function(payload) {
    console.log('Keyword: %s', payload.keyword);

    if(prevSearch) {
      twitterStream.stop();
      console.log(prevSearch);
      console.log('stop stream');

    } else {

      prevSearch = true;
    }

    twitterStream = Twitter.stream('statuses/filter', {language: 'en', track: payload.keyword});

    //Turn on Twitter Stream
    twitterStream.on('tweet', function(tweet) {
      sentiment.getSentiment(tweet, socket);
    });

    socket.once('disconnect', function() {
      connections.splice(connections.indexOf(socket), 1);
      socket.disconnect();
      twitterStream.stop();
      console.log('Socket disconnected: %s sockets remaining', connections.length);
    });
  });

}); //END io.sockets.on