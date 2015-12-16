//Require Dependencies
var express = require('express'),
    Twitter = require('twitter'),
    config = require('./config');

//Create Express Instance, Router Instance, Twitter Instance
var app = express(),
    router = express.Router(),
    twitter = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });

var collectedTweets = [];
var keyword = 'apple';


//GET Router /api, then Send Streaming API
router.get('/', function(req, res) {
  //Open Twitter API (English, Apple)

  twitter.stream('statuses/filter', {language: 'en', track: keyword}, function(stream) {
    stream.on('data', function(data) {
      console.log('collecting data');

      collectedTweets.push(data);
    });

    stream.on('error', function(error) {
      console.log(error);
      throw error;
    });

    setTimeout(function() {
      stream.destroy();

      console.log('collected ' + collectedTweets.length + ' tweets');
      res.send(collectedTweets);
    }, 1000);
  });
});

module.exports = router;