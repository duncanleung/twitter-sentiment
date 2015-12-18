//Require Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('request'),
    _ = require('underscore'),
    Promise = require('bluebird'),
    Twitter = require('twitter'),
    datum = require('datumbox').factory('3f370865e56303cf6f145aa40485f1f0'),
    config = require('./config');

//Create Express Instance, Router Instance, Twitter Instance
var app = express(),
    router = express.Router(),
    parseJson = bodyParser.json(),
    twitter = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });

var collectedTweets = [],
    sentimentCollection = [];
var keyword = '';


//POST Router /api, then Send Streaming API
router.post('/', parseJson, function(req, res) {

  console.log(req.body.query);
  keyword = req.body.query;

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
      
      getSentiment()
        .done(res.send(sentimentCollection));

      console.log('hopefully nothing after this message...');

    }, 5000);

    function getSentiment(tweet) {
      return new Promise(function(resolve, reject) {
        
        _.each(collectedTweets, function(tweet) {
          sentimentAPI(tweet)
            .then(function(data) {
              appendSentiment(tweet, data);
              console.log('sentiment returned: ' + data);
            });
        });

      });
    }

    function sentimentAPI(tweet) {
      return new Promise(function(resolve, reject) {
        //Send Tweet Text to Sentiment API
        datum.twitterSentimentAnalysis(tweet.text, function(err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    }

    function appendSentiment(tweet, sentiment) {
      sentimentCollection.push( {
          sentiment: sentiment,
          created_at: tweet.created_at,
          timestamp_ms: tweet.timestamp_ms,
          id_str: tweet.id_str,
          user: {
            screen_name: tweet.user.screen_name,
            profile_image_url: tweet.user.profile_image_url,
            location: tweet.user.location,
            time_zone: tweet.user.time_zone
          },
          text: tweet.text,
          lang: tweet.lang
        });
        

        console.log(sentimentCollection.length);
        console.log('pushing sentiment');
    }



  }); //End twitter.stream

}); //End router.post

module.exports = router;


































