var React = require('react');

var Axis = require('./Axis.jsx');

//XYAxes Holds the Separate X and Y Axis Components
var XYAxes = React.createClass({
  
  //Create x and y props to Pass into <Axis />
  render: function() { 
    var xSettings =  {
      translate: 'translate(0,' + (this.props.height - this.props.padding) + ')',
      scale: this.props.xScale,
      orient: 'bottom',
      ticks: 4
    };

    var ySettings = {
      translate: 'translate(' + this.props.padding + ', 0)',
      scale: this.props.yScale,
      orient: 'left',
      ticks: 6
    };

    //Use React to Append g Element (Usually D3 Handles This)
    //Append <Axis /> for X and Y Axis
    return (
      <g className="xy-axes">
        <Axis { ...xSettings } />
        <Axis { ...ySettings } />
      </g>
    );
  }
});

module.exports = XYAxes;