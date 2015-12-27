var React = require('react');

var TweetCard = React.createClass({
  render: function() {
    return (
      <div>
        <img className="profile-image" src={this.props.tweet.user.profile_image_url} />
        <div className="user">
          <span className="name">{this.props.tweet.user.name}</span>
          <span className="username">@{this.props.tweet.user.screen_name}</span>
        </div>
        <div className="text">{this.props.tweet.text}</div>
      </div>
    )
  }
});

module.exports = TweetCard;