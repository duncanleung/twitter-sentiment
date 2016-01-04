var React = require('react'),
    io = require('socket.io-client'),
    update = require('react-addons-update'),
    d3 = require('d3'),
    Hero = require('./Hero.jsx'),
    Results = require('./Results.jsx');

var App = React.createClass({

  getInitialState: function() {
      return {
          status: 'disconnected',
          keyword: '',
          initTimestamp: '',
          collectedTweets: [],
          binnedTweets: [{numTweets: 0, timeBin: 5}]
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
      //console.log(receivedTweet.tweet);
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

  initTimestamp: function(timestamp) {
    this.setState({ initTimestamp: timestamp.initTimestamp });
  },

  //Add receivedTweet onto beginning of array
  //Update the state of collectedTweets
  addTweet: function(tweet) {
    var tweets = this.state.collectedTweets;
    var newTweets = update(tweets, {$unshift: [tweet]});
    
    this.setState({ collectedTweets: newTweets });
    this.binTweets(tweet.timestamp_ms);
  },

  binTweets: function(tweetTimestamp) {
    var initTimestamp = this.state.initTimestamp;
    var timeDiff = (tweetTimestamp - initTimestamp)/1000;

    var binnedTweets = this.state.binnedTweets;
    var newBinnedTweets = binnedTweets;

    var binIndex = binnedTweets.length - 1;
    var currentBin = binnedTweets[binIndex].timeBin;

    if(timeDiff < currentBin) {
      newBinnedTweets[binIndex].numTweets++;

      this.setState({ binnedTweets: newBinnedTweets });
    }

    console.log(this.state.binnedTweets);
    
    /*   


    for(var i = 0; i < timeDiff.length; i++) {
      if(timeDiff[i] < currentBin) {
        binnedTweets[binIndex].count += 1;
      } else {
        currentBin += 5;
        binIndex ++;

        binnedTweets[binIndex].count += 1;
      }
    }*/


    //return array of each Tweet's timediff from initTimestamp
    /*timeDiff = this.state.collectedTweets.map(function(i) {
      return (i.timestamp_ms - initTimestamp)/1000;
    });*/

  /*  var binnedTweets = d3.layout.histogram()
        .bins(10)
        (timeDiff);*/



    
  },

  //Outgoing Data to Server Handler
  emit: function(eventName, payload) {
    this.socket.emit(eventName, payload)
  },

  render: function() {
    return (
      <div>
        <Hero emit={ this.emit } initTimestamp={ this.initTimestamp } />
        <Results collectedTweets={ this.state.collectedTweets } binnedTweets={ this.state.binnedTweets }/>
      </div>
    );
  }
});

module.exports = App;