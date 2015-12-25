var React = require('react');

var Tweet = React.createClass({
  render: function() {
    return (
      <li>{this.props.tweet.text}</li>
    )
  }
});

module.exports = Tweet;