var React = require('react'),
    uuid = require('node-uuid');


//Datapoints Draws Each Tweet on the Chart
var DataPoints = React.createClass({

  //renderPoints Returns a <circle></circle> for Each Data Point
  renderPoints: function(data) {
    var dataNegativeProps = {
      cx: this.props.xScale(data.timeBin),
      cy: this.props.yScale(data.negTweets),
      r: 4,
      fill: "none",
      stroke: "red",
      strokeWidth: 2,
      key: uuid.v4()
    };

    var dataPositiveProps = {
      cx: this.props.xScale(data.timeBin),
      cy: this.props.yScale(data.posTweets),
      r: 4,
      fill: "none",
      stroke: "green",
      strokeWidth: 2,
      key: uuid.v4()
    };

    var dataNeutralProps = {
      cx: this.props.xScale(data.timeBin),
      cy: this.props.yScale(data.neutTweets),
      r: 4,
      fill: "none",
      stroke: "sandybrown",
      strokeWidth: 2,
      key: uuid.v4()
    };

    var dataTotalProps = {
      cx: this.props.xScale(data.timeBin),
      cy: this.props.yScale(data.numTweets),
      r: 4,
      fill: "none",
      stroke: "blue",
      strokeWidth: 2,
      key: uuid.v4()
    };

    return (
      <g>
        <circle className="negative point" {...dataNegativeProps}>
        </circle>
        <circle className="positive point" {...dataPositiveProps}>
        </circle>
        <circle className="neutral point" {...dataNeutralProps}>
        </circle>
        <circle className="total point" {...dataTotalProps}>
        </circle>
      </g>
    );
  },

  //Use React to Append g Element (Usually D3 Handles This)
  //Run renderBars for all binnedTweet Data Values
  render: function() {
    return <g>{ this.props.binnedTweets.map(this.renderPoints) }</g>
  }
});

module.exports = DataPoints;