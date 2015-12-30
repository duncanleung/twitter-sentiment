//Require Dependencies
var express = require('express'),
    Twitter = require('./Twitter'),
    datum = require('datumbox').factory('3f370865e56303cf6f145aa40485f1f0');

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
      getSentiment(tweet, socket);
    });
  });

}); //END io.sockets.on

//Send Tweet Text to Sentiment API
function getSentiment(tweet, socket) {
  datum.twitterSentimentAnalysis(tweet.text, function(err, data) {
    if (err) {
      console.log(err);
    }
    console.log('Datum Sentiment is: ' + data);
    appendSentiment(tweet, data, socket);
  });
}

//Construct New Tweet Object
//Send sentimentTweet to Client
function appendSentiment(tweet, sentiment, socket) {
  var sentimentTweet = {
    sentiment: sentiment,
    created_at: tweet.created_at,
    timestamp_ms: tweet.timestamp_ms,
    id_str: tweet.id_str,
    user: {
      screen_name: tweet.user.screen_name,
      profile_image_url_https: tweet.user.profile_image_url_https,
      location: tweet.user.location,
      time_zone: tweet.user.time_zone
    },
    text: tweet.text,
    lang: tweet.lang
  };

  socket.emit('sendTweet', {tweet: sentimentTweet}); //sendTweet to Client
}
