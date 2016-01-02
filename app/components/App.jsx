var React = require('react'),
    io = require('socket.io-client'),
    update = require('react-addons-update'),
    Hero = require('./Hero.jsx'),
    Results = require('./Results.jsx');

var App = React.createClass({

  getInitialState: function() {
      return {
          status: 'disconnected',
          keyword: '',
          initTimestamp: '',
          collectedTweets: [],
          tweetCount: []
      };
  },

  //Incoming Data from Server Handlers
  componentWillMount: function() {
    var self = this;

    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('sendTweet', function(receivedTweet) {
      self.addTweet(receivedTweet.tweet);
      console.log(receivedTweet.tweet);
    });
  },

  //Connect Handler
  connect: function() {
    this.setState({ status: 'connected' });
    console.log('Connected on socket: %s', this.socket.id);
  },

  //Disconnect Handler
  disconnect: function() {
    this.setState({ status: 'disconnected' });
    console.log('Disconnected: %s', this.socket.id);
  },

  //Add receivedTweet onto beginning of array
  //Update the state of collectedTweets
  addTweet: function(tweet) {
    var tweets = this.state.collectedTweets;
    var newTweets = update(tweets, {$unshift: [tweet]});

    this.setState({collectedTweets: newTweets});
    this.tweetCount();
    console.log('search time: ' + this.state.initTimestamp);
    console.log('tweet timestamp: ' + tweet.timestamp_ms);

    var diffTime = (tweet.timestamp_ms - this.state.initTimestamp)/1000;
    console.log(diffTime);
  },

  tweetCount: function() {
    //go through collectedTweets array
    //check timestamp of each tweet
    //starttime

  },

  initTimestamp: function(timestamp) {
    this.setState({ initTimestamp: timestamp.initTimestamp });
  },

  //Outgoing Data to Server Handler
  emit: function(eventName, payload) {
    this.socket.emit(eventName, payload)
  },

  render: function() {
    return (
      <div>
        <Hero emit={this.emit} initTimestamp={this.initTimestamp} />
        <Results collectedTweets={this.state.collectedTweets} />
      </div>
    );
  }
});

module.exports = App;