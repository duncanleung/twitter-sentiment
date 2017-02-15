var React = require('react');
var io = require('socket.io-client');
var update = require('react-addons-update');
var d3 = require('d3');

var Hero = require('./Hero.jsx');
var TechStack = require('./TechStack.jsx');
var Results = require('./Results.jsx');


//App is the Main Container
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'disconnected',
      search: false,
      keyword: '',
      initTimestamp: '',
      collectedTweets: [],
      binnedTweets: [{numTweets: 0, posTweets: 0,
          negTweets: 0, neutTweets: 0, timeBin: 5}],
      totalTweets: {total: 0, posTotal: 0,
          negTotal: 0, neutTotal: 0},
      sentiment: 'Neutral'  
    };

    this.emit = this.emit.bind(this);
    this.initTimestamp = this.initTimestamp.bind(this);
  }

  //Incoming Data from Server Handlers
  componentWillMount() {
    var self = this;

    this.socket = io.connect();
    this.socket.on('connect', this.connect.bind(this));
    this.socket.on('disconnect', this.disconnect.bind(this));
    this.socket.on('sendTweet', function(receivedTweet) {
      self.addTweet(receivedTweet.tweet);
    });
  }

  //Outgoing Data to Server Handler
  emit(eventName, payload) {
    this.socket.emit(eventName, payload);

    // Reset Dashboard on New Search
    this.setState({
      collectedTweets: [],
      binnedTweets: [{numTweets: 0, posTweets: 0,
          negTweets: 0, neutTweets: 0, timeBin: 5}],
      totalTweets: {total: 0, posTotal: 0,
          negTotal: 0, neutTotal: 0}
    });
  }

  //Connect Handler
  connect() {
    this.setState({ status: 'connected' });
    console.log('Connected on socket: %s', this.socket.id);
  }

  //Disconnect Handler
  disconnect() {
    this.setState({ status: 'disconnected' });
    console.log('Disconnected: %s', this.socket.id);
  }

  initTimestamp(timestamp) {
    this.setState({ initTimestamp: timestamp.initTimestamp });
    this.setState({ search: true });
  }

  //Add receivedTweet onto beginning of array
  //Update the state of collectedTweets
  addTweet(tweet) {
    var tweets = this.state.collectedTweets;
    var newTweets = update(tweets, {$unshift: [tweet]});
    
    this.setState({ collectedTweets: newTweets });
    this.binTweets(tweet.timestamp_ms, tweet.sentiment);
    this.countTweets(tweet.sentiment);
    this.overallSentiment();
  }

  //Inspect Sentiment Value. Increase count of Sentiment
  //Update the state of totalTweets
  countTweets(sentiment) {
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
  }

  overallSentiment() {
    var totalTweets = this.state.totalTweets.posTotal + this.state.totalTweets.negTotal;
    var posTweets = this.state.totalTweets.posTotal
    var sentiment = posTweets/totalTweets;

    if(sentiment < 0.5) {
      this.setState({ sentiment: 'Negative' });
    } else if(sentiment > 0.5) {
      this.setState({ sentiment: 'Positive' });
    } else {
      this.setState({ sentiment: 'Neutral' });
    }
  }

  //Push Tweet Counts into Bins: 5sec, 10sec, etc.
  //Update the state of binnedTweets
  binTweets(tweetTimestamp, sentiment) {
    var initTimestamp = this.state.initTimestamp;
    var timeDiff = (tweetTimestamp - initTimestamp)/1000;

    var binnedTweets = this.state.binnedTweets;
    var newBinnedTweets = binnedTweets;

    var binIndex = binnedTweets.length - 1;
    var currentBin = binnedTweets[binIndex].timeBin;

    if(timeDiff < currentBin) {
      newBinnedTweets[binIndex].numTweets++;

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
  }

  //Render the App!
  render() {
    return (
      <div>
        <Hero emit={ this.emit } initTimestamp={ this.initTimestamp } />
        
        { this.state.search ? 
          <Results 
            collectedTweets={ this.state.collectedTweets }
            binnedTweets={ this.state.binnedTweets }
            totalTweets={ this.state.totalTweets }
            sentiment= { this.state.sentiment }
          /> : null }

        <TechStack />
      </div>
    );
  }
}
// var App = React.createClass({

  
// });

module.exports = App;

