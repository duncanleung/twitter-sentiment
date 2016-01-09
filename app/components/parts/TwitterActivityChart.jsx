var React = require('react'),
    ReactDOM = require('react-dom'),
    d3 = require('d3');

var LineChart = require('./chart/LineChart.jsx');


var chartProps = {
  chartWidth: 800,
  chartHeight: 350,
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


  componentWillUpdate: function(nextProps, nextState) {
    //Positive Highlighter
    if(Number(this.refs.positive.innerHTML) !== nextProps.totalTweets.posTotal) {
      this.refs.positivearrow.classList.add('positive');
    } else {
      this.refs.positivearrow.classList.remove('positive');
    }

    //Neutral Highlighter
    if(Number(this.refs.neutral.innerHTML) !== nextProps.totalTweets.neutTotal) {
      this.refs.neutralarrow.classList.add('neutral');
    } else {
      this.refs.neutralarrow.classList.remove('neutral');
    }

    //Negative Highlighter
    if(Number(this.refs.negative.innerHTML) !== nextProps.totalTweets.negTotal) {
      this.refs.negativearrow.classList.add('negative');
    } else {
      this.refs.negativearrow.classList.remove('negative');
    }
  },

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
            <div ref="total" className="counter">{ this.props.totalTweets.total }</div>
          </div>
          <div className="total">
            <h3>Positive Tweets</h3>
            <div className="total-positive"></div>
            <div ref="positive" className="counter">{ this.props.totalTweets.posTotal }</div>
            <div ref="positivearrow" className="arrow"></div>
          </div>
          <div className="total">
            <h3>Neutral Tweets</h3>
            <div className="total-neutral"></div>
            <div ref="neutral" className="counter">{ this.props.totalTweets.neutTotal }</div>
            <div ref="neutralarrow" className="arrow"></div>
          </div>
          <div className="total">
            <h3>Negative Tweets</h3>
            <div className="total-negative"></div>
            <div ref="negative" className="counter">{ this.props.totalTweets.negTotal }</div>
            <div ref="negativearrow" className="arrow"></div>
          </div>
        </div>
        <div className="overall-sentiment">
          <h3>Overall Sentiment</h3>
          <h3></h3>
        </div>
      </div>
    );
  }
});

module.exports = TwitterActivityChart;
