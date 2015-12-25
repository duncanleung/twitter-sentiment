var React = require('react'),
    Tweet = require('./Tweet.jsx');

var TweetList = React.createClass({
  
  render: function() {
    //
    var tweets = this.props.collectedTweets.map(function(tweet) {
      return (<Tweet tweet={tweet} />);
    });

    return (
      <div>
        <ul>
          {tweets}
        </ul>
      </div>
    )
  }
});

module.exports = TweetList;