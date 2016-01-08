var React = require('react'),
    d3 = require('d3');

var LineChart = require('./chart/LineChart.jsx');


var chartProps = {
  chartWidth: 800,
  chartHeight: 400,
  margin: {
    top: 30,
    bottom: 60,
    left: 60,
    right: 40
  },
};

var chartArea = {
  width: chartProps.chartWidth - chartProps.margin.left - chartProps.margin.right,
  height: chartProps.chartHeight - chartProps.margin.top - chartProps.margin.bottom,
}


/*totalTweets: {total: 0, posTotal: 0,
              negTotal: 0, neutTotal: 0}*/

//TwitterActivityChart Is the LineChart Container
var TwitterActivityChart = React.createClass({

  //{...settings} combines all props (aka. binnedTweets) into 'props'
  render: function() {
    return(
      <div className="twitter-activity">
        <h4>Twitter Activity</h4>
        <LineChart binnedTweets={ this.props.binnedTweets } { ...chartProps } { ...chartArea }/>
        <div className="tweet-counters">
          <div className="total">
            <h3>Total Tweets</h3>
            <div className="total-tweets"></div>
            <div>{ this.props.totalTweets.total }</div>
          </div>
          <div className="total">
            <h3>Positive Tweets</h3>
            <div className="total-positive"></div>
            <div>{ this.props.totalTweets.posTotal }</div>
          </div>
          <div className="total">
            <h3>Neutral Tweets</h3>
            <div className="total-neutral"></div>
            <div>{ this.props.totalTweets.neutTotal }</div>
          </div>
          <div className="total">
            <h3>Negative Tweets</h3>
            <div className="total-negative"></div>
            <div>{ this.props.totalTweets.negTotal }</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TwitterActivityChart;
