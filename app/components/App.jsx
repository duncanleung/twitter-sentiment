var React = require('react'),
    io = require('socket.io-client'),
    update = require('react-addons-update'),
    d3 = require('d3');

var Hero = require('./Hero.jsx'),
    Results = require('./Results.jsx');


//App is the Main Container
var App = React.createClass({

  getInitialState: function() {
      return {
          status: 'disconnected',
          keyword: '',
          initTimestamp: '',
          collectedTweets: [],
          binnedTweets: [{numTweets: 0, posTweets: 0,
              negTweets: 0, neutTweets: 0, timeBin: 5}],
          totalTweets: {total: 0, posTotal: 0,
              negTotal: 0, neutTotal: 0}
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
    this.binTweets(tweet.timestamp_ms, tweet.sentiment);
    this.countTweets(tweet.sentiment);

    /*console.log(tweet);*/
  },

  //Inspect Sentiment Value. Increase count of Sentiment
  //Update the state of totalTweets
  countTweets: function(sentiment) {
    var totalTweets = this.state.totalTweets;
    var newTotal = totalTweets;

    if(sentiment == "positive") {
        totalTweets.posTotal++;
        totalTweets.total++;
        this.setState({ totalTweets: newTotal });

      } else if(sentiment == "negative") {
        totalTweets.negTotal++;
        totalTweets.total++;
        this.setState({ totalTweets: newTotal });
      } else {
        totalTweets.neutTotal++;
        totalTweets.total++;
        this.setState({ totalTweets: newTotal });
      }
  },

  //Push Tweet Counts into Bins: 5sec, 10sec, etc.
  //Update the state of binnedTweets
  binTweets: function(tweetTimestamp, sentiment) {
    var initTimestamp = this.state.initTimestamp;
    var timeDiff = (tweetTimestamp - initTimestamp)/1000;

    var binnedTweets = this.state.binnedTweets;
    var newBinnedTweets = binnedTweets;

    var binIndex = binnedTweets.length - 1;
    var currentBin = binnedTweets[binIndex].timeBin;

    if(timeDiff < currentBin) {
      newBinnedTweets[binIndex].numTweets++;
      //this.setState({ binnedTweets: newBinnedTweets });

      if(sentiment == "positive") {
        newBinnedTweets[binIndex].posTweets++;
        this.setState({ binnedTweets: newBinnedTweets });

      } else if(sentiment == "negative") {
        newBinnedTweets[binIndex].negTweets++;
        this.setState({ binnedTweets: newBinnedTweets });
      } else {
        newBinnedTweets[binIndex].neutTweets++;
        this.setState({ binnedTweets: newBinnedTweets });
      }

    } else {
      //newBinnedTweets.push({ numTweets: 1, timeBin: currentBin+=5 });
      //this.setState({ binnedTweets: newBinnedTweets });

      if(sentiment == "positive") {
        newBinnedTweets.push({ numTweets: 1, posTweets: 1, negTweets: 0, neutTweets: 0, timeBin: currentBin+=5 });
        this.setState({ binnedTweets: newBinnedTweets });

      } else if(sentiment == "negative") {
        newBinnedTweets.push({ numTweets: 1, posTweets: 0, negTweets: 1, neutTweets: 0, timeBin: currentBin+=5 });
        this.setState({ binnedTweets: newBinnedTweets });
      } else {
        newBinnedTweets.push({ numTweets: 1, posTweets: 0, negTweets: 0, neutTweets: 1, timeBin: currentBin+=5 });
        this.setState({ binnedTweets: newBinnedTweets });
      }
    }
  },

  //Outgoing Data to Server Handler
  emit: function(eventName, payload) {
    this.socket.emit(eventName, payload)
    this.setState({
      collectedTweets: [],
      binnedTweets: [{numTweets: 0, posTweets: 0,
          negTweets: 0, neutTweets: 0, timeBin: 5}],
      totalTweets: {total: 0, posTotal: 0,
          negTotal: 0, neutTotal: 0}
    });
  },

  //Render the App!
  render: function() {
    return (
      <div>
        <Hero emit={ this.emit } initTimestamp={ this.initTimestamp } />
        <Results collectedTweets={ this.state.collectedTweets } binnedTweets={ this.state.binnedTweets } totalTweets={ this.state.totalTweets } />
      </div>
    );
  }
});

module.exports = App;