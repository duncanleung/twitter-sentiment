var React = require('react');
var ReactDOM = require('react-dom');
var d3 = require('d3');

//Axis is a Reusable Axis Creator for Charts
var Axis = React.createClass({

  componentDidUpdate: function() {
    this.renderAxis();
  },

  componentDidMount: function() {
    this.renderAxis();
    this.renderXLabel();
    this.renderYLabel();
  },

  //Use D3 to Create Axis on 'this DOM Node'
  renderAxis: function() {
    var node = ReactDOM.findDOMNode();

    var axis = d3.svg.axis()
                  .scale(this.props.scale)
                  .orient(this.props.orient)
                  .ticks(this.props.ticks)

    //This is where the magic happens!
    d3.select(node).call(axis);
  },

  renderXLabel: function() {
    var node = ReactDOM.findDOMNode();

    var xLabel = d3.select(".x.axis")
                    .append("text")
                    .text("Seconds Since Search")
                    .classed("x-label", true)
                    .attr("x", 350)
                    .attr("y", 40)
                    .style("text-anchor", "middle");
  },

  renderYLabel: function() {
    var node = ReactDOM.findDOMNode();

    var yLabel = d3.select(".y.axis")
                    .append("text")
                    .text("Number of Tweets")
                    .classed("y-label", true)
                    .attr("x", -(this.props.height/2))
                    .attr("y", -35)
                    .style("text-anchor", "middle")
                    .attr("transform", "rotate(-90)");
  },

  //Use React to Append g Element (Usually D3 Handles This)
  render: function() {
    return(
      <g className={ this.props.className } transform={ this.props.translate }></g>
    );
  }
});

module.exports = Axis;