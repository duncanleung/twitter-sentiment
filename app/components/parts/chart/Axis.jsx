var React = require('react'),
    d3 = require('d3');

//Axis is a Reusable Axis Creator for Charts
var Axis = React.createClass({

  componentDidUpdate: function() {
    this.renderAxis();
  },

  componentDidMount: function() {
      this.renderAxis();
      this.renderLabels();
  },

  //Use D3 to Create Axis on 'this DOM Node'
  renderAxis: function() {
    var node = this.getDOMNode();

    var axis = d3.svg.axis()
              .scale(this.props.scale)
              .orient(this.props.orient)
              .ticks(this.props.ticks)

    //This is where the magic happens!
    d3.select(node).call(axis);
  },

  renderLabels: function() {
    var node = this.getDOMNode();

    var xLabel = d3.select(".x.axis")
                .append("text")
                .text("Time in Seconds Since Search Started")
                .classed("x-label", true)
                .attr("x", 350)
                .attr("y", 50)
                .style("text-anchor", "middle");

    var yLabel = d3.select(".y.axis")
                .append("text")
                .text("Number of Tweets")
                .classed("y-label", true)
                .attr("x", -(this.props.height/2))
                .attr("y", -30)
                .style("text-anchor", "middle")
                .attr("transform", "rotate(-90)");

    d3.select(node).call(xLabel);
    d3.select(node).call(yLabel);
  },

  //Use React to Append g Element (Usually D3 Handles This)
  render: function() {
    return(
      <g className={ this.props.className } transform={ this.props.translate }></g>
    );
  }
});

module.exports = Axis;