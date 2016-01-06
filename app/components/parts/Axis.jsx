var React = require('react'),
    d3 = require('d3');

//Axis is a Reusable Axis Creator for Charts
var Axis = React.createClass({

  componentDidUpdate: function() {
    this.renderAxis();
  },

  componentDidMount: function() {
      this.renderAxis();
  },

  //Use D3 to Create Axis on 'this DOM Node'
  renderAxis: function() {
    var node = this.getDOMNode();

    var axis = d3.svg.axis()
              .scale(this.props.scale)
              .orient(this.props.orient)
              .ticks(this.props.ticks);

    //This is where the magic happens!
    d3.select(node).call(axis);
  },

  //Use React to Append g Element (Usually D3 Handles This)
  render: function() {
    return(
      <g className="axis" transform={ this.props.translate }></g>
    );
  }
});

module.exports = Axis;