var datum = require('datumbox').factory('3f370865e56303cf6f145aa40485f1f0');

var sentiment = {};

//Send Tweet Text to Sentiment API
sentiment.getSentiment = function(tweet, socket) {
  datum.twitterSentimentAnalysis(tweet.text, function(err, data) {
    if (err) {
      console.log(err);
    }
    console.log('Datum Sentiment is: ' + data);
    sentiment.appendSentiment(tweet, data, socket);
  });
};

//Construct New Tweet Object
//Send sentimentTweet to Client
sentiment.appendSentiment = function(tweet, sentiment, socket) {
  var sentimentTweet = {
    sentiment: sentiment,
    created_at: tweet.created_at,
    timestamp_ms: tweet.timestamp_ms,
    id_str: tweet.id_str,
    user: {
      name: tweet.user.name,
      screen_name: tweet.user.screen_name,
      profile_image_url_https: tweet.user.profile_image_url_https,
      location: tweet.user.location,
      time_zone: tweet.user.time_zone
    },
    text: tweet.text,
    lang: tweet.lang
  };

  socket.emit('sendTweet', {tweet: sentimentTweet}); //sendTweet to Client
};

module.exports = sentiment;