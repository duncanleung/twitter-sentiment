var React = require('react');

var DataPoints = require('./DataPoints.jsx');
var LinePath = require('./LinePath.jsx');
var XYAxes = require('./XYAxes.jsx');
var GridLine = require('./GridLine.jsx');


//LineChart Holds All Data Points and the XYAxes
var LineChart = React.createClass({
  
  //Use D3 to Scale 'x' Data Points to Fit Chart Area
  //Use for Data Points and for Axis
  getXScale: function(props) {
    var xMax = d3.max(props.binnedTweets, function(d) { return d.timeBin });

    return d3.scale.linear()
              .domain([0, xMax])
              .range([0, props.width]);
  },

  //Use D3 to Scale 'y' Data Points to Fit Chart Area
  //Use for Data Points and for Axis
  getYScale: function(props) {
    var yMax = d3.max(props.binnedTweets, function(d) { return d.numTweets });

    return d3.scale.linear()
              .domain([0, yMax])
              .range([props.height, 0]);
  },

  //Use React to Append svg Element (Usually D3 Handles This)
  render: function() {
    var xScale = this.getXScale(this.props);
    var yScale = this.getYScale(this.props);

    var chartDisplay = {
      className: 'chart-area',
      transform: 'translate(' + this.props.margin.left + ', ' + this.props.margin.top + ')',
    };
    //{...props} combines all props (aka. xScale, yScale) into 'props'
    return (
      <svg className="line-chart" width={ this.props.chartWidth } height={ this.props.chartHeight }>
        <g { ...chartDisplay }>
          <GridLine
            xScale={ xScale }
            yScale={ yScale }
            { ...this.props }
          />
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
        </g>
      </svg>
      
    );
  }
});

module.exports = LineChart;