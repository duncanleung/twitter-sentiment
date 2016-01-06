var React = require('react'),
    d3 = require('d3');

var Line = require('./Line.jsx');


var LinePath = React.createClass({

  render: function() {
    var props = this.props,
        xScale = props.xScale,
        yScale = props.yScale;

    var path = d3.svg.line()
      .x(function(d) {
        return xScale(d.timeBin);
      })
      .y(function(d) {
        return yScale(d.numTweets);
      })
      .interpolate("cardinal");

    return (
      <Line path={ path(this.props.binnedTweets) } color="green"/>
    );
  }
});

module.exports = LinePath;