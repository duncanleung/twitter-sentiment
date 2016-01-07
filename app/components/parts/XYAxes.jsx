var React = require('react');

var Axis = require('./Axis.jsx');

//XYAxes Holds the Separate X and Y Axis Components
var XYAxes = React.createClass({
  
  //Create x and y props to Pass into <Axis />
  render: function() { 
    var xAxis =  {
      className: 'axis',
      translate: 'translate(0,' + this.props.height + ')',
      scale: this.props.xScale,
      orient: 'bottom',
      ticks: 4
    };

    var yAxis = {
      className: 'axis',
      translate: 'translate(0, 0)',
      scale: this.props.yScale,
      orient: 'left',
      ticks: 6
    };

    //Use React to Append g Element (Usually D3 Handles This)
    //Append <Axis /> for X and Y Axis
    return (
      <g className="xy-axes">
        <Axis { ...xAxis } />
        <Axis { ...yAxis } />
      </g>
    );
  }
});

module.exports = XYAxes;