var React = require('react');
var ReactDOM = require('react-dom');

//GridLine
var GridLine = React.createClass({
  
  componentDidUpdate: function() {
    this.renderGridline();
  },

  componentDidMount: function() {
    this.renderGridline();
  },

  //Use D3 to Create Axis on 'this DOM Node'
  renderGridline: function() {
    var node = ReactDOM.findDOMNode();

    var gridline = d3.svg.axis()
                      .scale(this.props.yScale)
                      .tickSize(-this.props.width, 0, 0)
                      .ticks(6)
                      .tickFormat("")
                      .orient("left")

    //This is where the magic happens!
    d3.select(node).call(gridline);
  },

  render: function() {
    var yGridline = {
      className: 'gridline',
      transform: 'translate(0, 0)',
    };

    return(
      <g { ...yGridline }></g>
    );
  }
});

module.exports = GridLine;