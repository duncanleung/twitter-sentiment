var React = require('react'),
    uuid = require('node-uuid');


//Datapoints Draws Each Tweet on the Chart
var DataPoints = React.createClass({

  renderBars: function(data) {
    var props = {
      cx: this.props.xScale(data.timeBin),
      cy: this.props.yScale(data.numTweets),
      r: 2,
      key: uuid.v4()
    };
    
    console.log(data.timeBin);
    console.log(data.numTweets);
    console.log(this.props.binnedTweets);
    console.log(props.cx);
    console.log(props.cy);
    console.log('renderbars running');

    return(
      <circle {...props}>
      </circle>
    );
  },

  render: function() {
    return <g>{ this.props.binnedTweets.map(this.renderBars) }</g>
  }
});

module.exports = DataPoints;