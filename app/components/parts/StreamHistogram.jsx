var React = require('react')
    d3 = require('d3');

function createChart(dom, data) {
  var w = 800;
  var h = 400;
  var margin = {
    top: 58,
    bottom: 100,
    left: 80,
    right: 40
  };

  var width = w - margin.left - margin.right;
  var height = h - margin.top - margin.bottom;

  var svg = d3.select(dom).append("svg")
              .attr("id", "chart")
              .attr("width", width)
              .attr("height", height);
  
  var chart = svg.append("g")
              .classed("display", true)
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  /*var timeParser = d3.time.format("%S").parse;*/

  var x = d3.scale.linear()
          .domain([0, d3.max(data, function(d) {
            return d3.max(d);
          })])
          .range(0, width);
  var y = d3.scale.linear()
          .domain([0, d3.max(data, function(d) {
            return d.y;
          })])
          .range(height, 0);

  //enter() phase
  chart.selectAll(".point")
        .data(data)
        .enter()
          .append("circle")
          .classed("point", true)
          .attr("r", 2);

  //update() phase
  chart.selectAll(".point")
        .attr("cx", function(d) {
          //console.log("d.x" + d.x);
          //console.log(typeof d.x);
          return x(d.x);
        })
        .attr("cy", function(d) {
          // console.log("d.y" + d.y);
          // console.log(typeof d.y);
          return y(d.y);
        });

  //exit() phase
  chart.selectAll(".point")
        .data(data)
        .exit()
        .remove();


  // console.log('createChart: ' + data);
  // console.log(data);
} //END createChart


//React Component
var StreamHistogram = React.createClass({
/*
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    title: React.PropTypes.string,
  },*/

  /*getDefaultProps: function() {
    return {
      width: 800,
      height: 400,
      title: 'Tweets Over Time',
      Legend: true
    };
  },*/

  componentDidMount: function() {
    var dom = this.getDOMNode();
    createChart(dom, this.props.histogramTweets);
  },

  shouldComponentUpdate: function() {
    var dom = this.getDOMNode();
    createChart(dom, this.props.histogramTweets);
    return false;
  },

  render: function() {
    return(
      <div className="stream-histogram">
        <h4>Twitter Activity</h4>
      </div>
    );
  }
});

module.exports = StreamHistogram;