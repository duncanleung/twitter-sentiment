var React = require('react'),
    d3 = require('d3');

var LineChart = require('./LineChart.jsx');


var settings = {
  width: 900,
  height: 500,
  padding: 30
};

//TwitterActivityChart Is the LineChart Container
var TwitterActivityChart = React.createClass({

  render: function() {
    return(
      <div className="twitter-activity-chart">
        <h4>Twitter Activity</h4>
        <LineChart binnedTweets={ this.props.binnedTweets } { ...settings } />
      </div>
    );
  }
});

module.exports = TwitterActivityChart;
