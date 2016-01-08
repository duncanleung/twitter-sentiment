var React = require('react'),
    d3 = require('d3');

var Line = require('./Line.jsx');


var LinePath = React.createClass({

  render: function() {
    var props = this.props,
        xScale = props.xScale,
        yScale = props.yScale;

    var pathTotal = d3.svg.line()
      .x(function(d) {
        return xScale(d.timeBin);
      })
      .y(function(d) {
        return yScale(d.numTweets);
      })
      .interpolate("cardinal");

    var pathPositive = d3.svg.line()
      .x(function(d) {
        return xScale(d.timeBin);
      })
      .y(function(d) {
        return yScale(d.posTweets);
      })
      .interpolate("cardinal");

    var pathNegative = d3.svg.line()
      .x(function(d) {
        return xScale(d.timeBin);
      })
      .y(function(d) {
        return yScale(d.negTweets);
      })
      .interpolate("cardinal");

    var pathNeutral = d3.svg.line()
      .x(function(d) {
        return xScale(d.timeBin);
      })
      .y(function(d) {
        return yScale(d.neutTweets);
      })
      .interpolate("cardinal");

    return (
      <g>
        <Line path={ pathNegative(this.props.binnedTweets) } stroke={ "red" }/>
        <Line path={ pathNeutral(this.props.binnedTweets) } stroke={ "gray" }/>
        <Line path={ pathPositive(this.props.binnedTweets) } stroke={ "green" }/>
        <Line path={ pathTotal(this.props.binnedTweets) } stroke={ "blue" }/>
      </g>
    );
  }
});

module.exports = LinePath;