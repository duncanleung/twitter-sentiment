var React = require('react');

var TwitterActivityChart = require('./TwitterActivityChart.jsx');


//Dashboard Holds the TwitterActivity Chart Component
//Uses TwitterActivityChart.jsx
var Dashboard = React.createClass({

  render: function() {
    return (
      <div className="dashboard col-sm-8">
        <h1>Twitterment Dashboard</h1>
        <TwitterActivityChart binnedTweets={ this.props.binnedTweets } />
      </div>
    );
  }
});

module.exports = Dashboard;

// <StreamHistogram histogramTweets={ this.props.histogramTweets }/>