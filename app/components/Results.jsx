var React = require('react');

var Dashboard = require('./parts/Dashboard.jsx'),
    TwitterStream = require('./parts/TwitterStream.jsx');


//Results Holds the Dashboard and TwitterStream Components
//Uses Dashboard.jsx and TwitterStream.jsx
var Results = React.createClass({
  
  render: function() {
    return(
      <div className="results row">
        <Dashboard binnedTweets={ this.props.binnedTweets } totalTweets={ this.props.totalTweets } />
        <TwitterStream collectedTweets={this.props.collectedTweets} />
      </div>
    );
  }
});

module.exports = Results;