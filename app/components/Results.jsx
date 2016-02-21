var React = require('react');

var Dashboard = require('./parts/Dashboard.jsx');
var TwitterStream = require('./parts/TwitterStream.jsx');


//Results Holds the Dashboard and TwitterStream Components
//Uses Dashboard.jsx and TwitterStream.jsx
var Results = React.createClass({
  
  render: function() {
    return(
      <div className="results container-fluid">
        <div className="row">
          <Dashboard
            binnedTweets={ this.props.binnedTweets }
            totalTweets={ this.props.totalTweets }
            sentiment= { this.props.sentiment }
          />
          <TwitterStream collectedTweets={this.props.collectedTweets} />
        </div>
      </div>
    );
  }
});

module.exports = Results;