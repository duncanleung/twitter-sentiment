var React = require('react');

//TweetCard Is a Reusable Component to Construct Each Tweet Message
var TweetCard = React.createClass({
  render: function() {
    return (
      <div className="tweet-card">
        <img className="profile-image" src={this.props.tweet.user.profile_image_url_https} />
        <div className="content">
          <div className="user">
            <span className="name">{this.props.tweet.user.name}</span>
            <span className="username">@{this.props.tweet.user.screen_name}</span>
          </div>
          <div className="text">{this.props.tweet.text}</div>
        </div>
      </div>
    )
  }
});

module.exports = TweetCard;