var React = require('react'),
    TweetList = require('./TweetList.jsx');


var TwitterStream = React.createClass({

  //Array of Collected Tweets
  getInitialState: function() {
    return { collectedTweets: [{text: 'hello'}] };
  },

  componentWillMount: function() {
    var socket = io.connect();
    var self = this;

    //When socket receives 'sendTweet', run addTweet
    socket.on('sendTweet', function(receivedTweet) {
      self.addTweet(receivedTweet.tweet);
    });
  },

  //Add receivedTweet onto end of array
  //Update the state of collectedTweets
  addTweet: function(tweet) {
    var tweets = this.state.collectedTweets;
    var newTweets = tweets.concat([tweet]);

    this.setState({collectedTweets: newTweets});
  },

  render: function() {
    return (
      <div className="col-sm-4">
        <h1>Twitter Stream</h1>
        //Pass collectedTweets to TweetList
        <TweetList collectedTweets={this.state.collectedTweets} />
      </div>
    )
  }
});
  

module.exports = TwitterStream;