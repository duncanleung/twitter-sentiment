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

var barProps = {
  chartWidth: 400,
  chartHeight: 100
};


/*totalTweets: {total: 0, posTotal: 0,
              negTotal: 0, neutTotal: 0}*/

//TwitterActivityChart Is the LineChart Container
var TwitterActivityChart = React.createClass({


  componentWillUpdate: function(nextProps, nextState) {
    
    /*Counter Highlighter
    ===============*/
    //Positive Highlighter

    if(Number(this.refs.positivecounter.innerHTML) != nextProps.totalTweets.posTotal) {
      this.refs.positivearrow.classList.add('positive');
      this.refs.positivecounter.classList.add('positive');

      this.refs.neutralarrow.classList.remove('neutral');
      this.refs.neutralcounter.classList.remove('neutral');
      this.refs.negativearrow.classList.remove('negative');
      this.refs.negativecounter.classList.remove('negative');
    }

    //Neutral Highlighter
    if(Number(this.refs.neutralcounter.innerHTML) != nextProps.totalTweets.neutTotal) {
      this.refs.neutralarrow.classList.add('neutral');
      this.refs.neutralcounter.classList.add('neutral');

      this.refs.positivearrow.classList.remove('positive');
      this.refs.positivecounter.classList.remove('positive');
      this.refs.negativearrow.classList.remove('negative');
      this.refs.negativecounter.classList.remove('negative');
    }

    //Negative Highlighter
    if(Number(this.refs.negativecounter.innerHTML) !== nextProps.totalTweets.negTotal) {
      this.refs.negativearrow.classList.add('negative');
      this.refs.negativecounter.classList.add('negative');

      this.refs.neutralarrow.classList.remove('neutral');
      this.refs.neutralcounter.classList.remove('neutral');
      this.refs.positivearrow.classList.remove('positive');
      this.refs.positivecounter.classList.remove('positive');
    }

    /*Overall Sentiment Highlighter
    ===============*/
    if(this.props.sentiment == 'Positive') {
      this.refs.sentiment.classList.add('positive');
      this.refs.sentiment.classList.remove('negative');
    } else if(this.props.sentiment == 'Negative') {
      this.refs.sentiment.classList.add('negative');
      this.refs.sentiment.classList.remove('positive');
    } else {
      this.refs.sentiment.classList.remove('negative');
      this.refs.sentiment.classList.remove('positive');
    }

  },

  //{...settings} combines all props (aka. binnedTweets) into 'props'
  render: function() {
    return(
      <div className="twitter-activity">
        <h4>Twitter Activity</h4>
        <LineChart binnedTweets={ this.props.binnedTweets }
          { ...chartProps }
          { ...chartArea }
        />

        <div className="tweet-counters">
          <div className="total">
            <h3>Total Tweets</h3>
            <div className="total-tweets"></div>
            <div ref="total" className="counter">{ this.props.totalTweets.total }</div>
          </div>
          <div className="total">
            <h3>Positive Tweets</h3>
            <div className="total-positive"></div>
            <div ref="positivecounter" className="counter">{ this.props.totalTweets.posTotal }</div>
            <div ref="positivearrow" className="arrow"></div>
          </div>
          <div className="total">
            <h3>Neutral Tweets</h3>
            <div className="total-neutral"></div>
            <div ref="neutralcounter" className="counter">{ this.props.totalTweets.neutTotal }</div>
            <div ref="neutralarrow" className="arrow"></div>
          </div>
          <div className="total">
            <h3>Negative Tweets</h3>
            <div className="total-negative"></div>
            <div ref="negativecounter" className="counter">{ this.props.totalTweets.negTotal }</div>
            <div ref="negativearrow" className="arrow"></div>
          </div>
        </div>
        <div className="overall-sentiment">
          <h3>Overall Sentiment</h3>
          <p ref="sentiment">{this.props.sentiment}</p>
        </div>
      </div>
    );
  }
});

module.exports = TwitterActivityChart;
