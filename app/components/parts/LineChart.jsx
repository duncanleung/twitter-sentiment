var React = require('react');

var DataPoints = require('./DataPoints.jsx');


//LineChart Holds All Data Points and Axes
var LineChart = React.createClass({
  
  getXScale: function(props) {
    var xMax = d3.max(props.binnedTweets, function(d) { return d.timeBin });

    return d3.scale.linear()
      .domain([0, xMax])
      .range([props.padding, props.width - props.padding *2]);
  },

  getYScale: function(props) {
    var yMax = d3.max(props.binnedTweets, function(d) { return d.numTweets });

    return d3.scale.linear()
      .domain([0, yMax])
      .range([props.height - props.padding, props.padding]);
  },

  render: function() {
    var props = this.props;
    var xScale = this.getXScale(props);
    var yScale = this.getYScale(props);

    return (
      <svg width={ props.width } height={ props.height }>
        <DataPoints
          xScale = { xScale }
          yScale= { yScale }
          { ...props }
        />
      </svg>
      
    );
  }
});

module.exports = LineChart;
