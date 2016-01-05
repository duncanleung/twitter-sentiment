var React = require('react');

var Axis = require('./Axis.jsx');


var XYAxes = React.createClass({
  
  render: function() {
    var props = this.props;
    
    var xSettings =  {
      translate: 'translate(0,' + (props.height - props.padding) + ')',
      scale: props.xScale,
      orient: 'bottom'
    };

    var ySettings = {
      translate: 'translate(' + props.padding + ', 0)',
      scale: props.yScale,
      orient: 'left'
    };

    return (
      <g className="xy-axes">
        <Axis { ...xSettings } />
        <Axis { ...ySettings } />
      </g>
    );
  }
});

module.exports = XYAxes;