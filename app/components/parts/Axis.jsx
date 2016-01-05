var React = require('react'),
    d3 = require('d3');

var Axis = React.createClass({
  
  componentDidUpdate: function() {
    this.renderAxis();
  },

  componentDidMount: function() {
      this.renderAxis();
  },

  renderAxis: function() {
    var props = this.props;
    var node = this.getDOMNode();
    var axis = d3.svg.axis().orient(props.orient).ticks(5).scale(props.scale);

    d3.select(node).call(axis);
  },

  render: function() {
    return(
      <g className="axis" transform={ this.props.translate }></g>
    );
  }
});

module.exports = Axis;