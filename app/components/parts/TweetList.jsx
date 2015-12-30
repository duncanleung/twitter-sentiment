var React = require('react'),
    TweetCard = require('./TweetCard.jsx');

//TweetList Contains All Twitter Messages as Cards
//Uses TweetCard.jsx
var TweetList = React.createClass({
  render: function() {
    
    var tweets = this.props.collectedTweets.map(function(tweet) {
      return (<TweetCard tweet={tweet} />);
    });

    return (
      <div className="tweet-list">
        {tweets}
      </div>
    )
  }
});

module.exports = TweetList;