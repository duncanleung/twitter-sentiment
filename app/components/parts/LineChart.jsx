var React = require('react');

var DataPoints = require('./DataPoints.jsx'),
    LinePath = require('./LinePath.jsx'),
    XYAxes = require('./XYAxes.jsx');


//LineChart Holds All Data Points and the XYAxes
var LineChart = React.createClass({
  
  //Use D3 to Scale 'x' Data Points to Fit Chart Area
  //Use for Data Points and for Axis
  getXScale: function(props) {
    var xMax = d3.max(props.binnedTweets, function(d) { return d.timeBin });

    return d3.scale.linear()
      .domain([0, xMax])
      .range([props.padding, props.width - props.padding *2]);
  },

  //Use D3 to Scale 'y' Data Points to Fit Chart Area
  //Use for Data Points and for Axis
  getYScale: function(props) {
    var yMax = d3.max(props.binnedTweets, function(d) { return d.numTweets });

    return d3.scale.linear()
      .domain([0, yMax])
      .range([props.height - props.padding, props.padding]);
  },

  //Use React to Append svg Element (Usually D3 Handles This)
  render: function() {
    var xScale = this.getXScale(this.props);
    var yScale = this.getYScale(this.props);

    //{...props} combines all props (aka. xScale, yScale) into 'props'
    return (
      <svg width={ this.props.width } height={ this.props.height }>
        <XYAxes
          xScale={ xScale }
          yScale={ yScale }
          { ...this.props }
        />
        <LinePath 
          xScale = { xScale }
          yScale= { yScale }
          { ...this.props }
        />
        <DataPoints
          xScale = { xScale }
          yScale= { yScale }
          { ...this.props }
        />
      </svg>
      
    );
  }
});

module.exports = LineChart;