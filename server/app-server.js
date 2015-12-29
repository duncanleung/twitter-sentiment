//Require Dependencies
var express = require('express'),
    Twitter = require('./Twitter')/*,
    twitterAPI = require('./twitterAPI')*/;

//Create Express Server Instance
var app = express(),
    port = process.env.PORT || 3000,
    twitterStream = Twitter;

//Routes and Serve Static Files
app.use(express.static(__dirname + './../app/public'));
/*app.use('/api', twitterAPI);*/


var server = app.listen(port);
console.log('Server on port: %s', port);


//Create socket.io Listener on Server Port
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
      
      socket.emit('sendTweet', {tweet: tweet}); //sendTweet to Client
      console.log('Collected Tweet: ' + tweet.text);
    });
  });

}); //END io.sockets.on
