var React = require('react'),
    update = require('react-addons-update'),
    TweetList = require('./TweetList.jsx'),
    io = require('socket.io-client');


var TwitterStream = React.createClass({

  //Array of Collected Tweets
  getInitialState: function() {
    return { collectedTweets: [] };
  },

  componentWillMount: function() {
    var socket = io.connect();
    var self = this;

    //When socket receives 'sendTweet', run addTweet
    socket.on('sendTweet', function(receivedTweet) {
      self.addTweet(receivedTweet.tweet);
      console.log(receivedTweet.tweet);
    });
  },

  //Add receivedTweet onto beginning of array
  //Update the state of collectedTweets
  addTweet: function(tweet) {
    var tweets = this.state.collectedTweets;
    var newTweets = update(tweets, {$unshift: [tweet]});

    this.setState({collectedTweets: newTweets});
  },

  render: function() {
    //Pass collectedTweets to TweetList
    return (
      <div className="stream col-sm-4">
        <h1>Twitter Stream</h1>
        <TweetList collectedTweets={this.state.collectedTweets} />
      </div>
    );
  }
});
  

module.exports = TwitterStream;