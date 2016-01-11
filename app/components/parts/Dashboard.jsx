var React = require('react');

var TwitterActivityChart = require('./TwitterActivityChart.jsx');


//Dashboard Holds the TwitterActivity Chart Component
//Uses TwitterActivityChart.jsx
var Dashboard = React.createClass({

  render: function() {
    return (
      <div className="dashboard col-sm-8">
        <TwitterActivityChart
          binnedTweets={ this.props.binnedTweets }
          totalTweets={ this.props.totalTweets }
          sentiment= { this.props.sentiment }
        />
      </div>
    );
  }
});

module.exports = Dashboard;