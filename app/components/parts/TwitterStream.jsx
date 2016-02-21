var React = require('react');
var TweetList = require('./TweetList.jsx');

//TwitterStream Displays A List of All Twitter Messages as Cards
//Uses TweetList.jsx
var TwitterStream = React.createClass({

  render: function() {
    //Pass collectedTweets to TweetList
    return (
      <div className="stream col-sm-4">
        <h1>Twitter Stream</h1>
        <TweetList collectedTweets={this.props.collectedTweets} />
      </div>
    );
  }
});
  

module.exports = TwitterStream;