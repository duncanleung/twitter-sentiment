var React = require('react'),
    d3 = require('d3');

var LineChart = require('./chart/LineChart.jsx');


var chartProps = {
  chartWidth: 800,
  chartHeight: 400,
  margin: {
    top: 60,
    bottom: 60,
    left: 60,
    right: 40
  },
};

var chartArea = {
  width: chartProps.chartWidth - chartProps.margin.left - chartProps.margin.right,
  height: chartProps.chartHeight - chartProps.margin.top - chartProps.margin.bottom,
}

//TwitterActivityChart Is the LineChart Container
var TwitterActivityChart = React.createClass({

  //{...settings} combines all props (aka. binnedTweets) into 'props'
  render: function() {
    return(
      <div className="twitter-activity-chart">
        <h4>Twitter Activity</h4>
        <LineChart binnedTweets={ this.props.binnedTweets } { ...chartProps } { ...chartArea }/>
      </div>
    );
  }
});

module.exports = TwitterActivityChart;
