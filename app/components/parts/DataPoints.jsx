var React = require('react'),
    uuid = require('node-uuid');


//Datapoints Draws Each Tweet on the Chart
var DataPoints = React.createClass({

  //renderPoints Returns a <circle></circle> for Each Data Point
  renderPoints: function(data) {
    var dataProps = {
      cx: this.props.xScale(data.timeBin),
      cy: this.props.yScale(data.numTweets),
      r: 4,
      fill: "none",
      stroke: "green",
      strokeWidth: 2,
      key: uuid.v4()
    };

    return(
      <circle className="point" {...dataProps}>
      </circle>
    );
  },

  //Use React to Append g Element (Usually D3 Handles This)
  //Run renderBars for all binnedTweet Data Values
  render: function() {
    return <g>{ this.props.binnedTweets.map(this.renderPoints) }</g>
  }
});

module.exports = DataPoints;