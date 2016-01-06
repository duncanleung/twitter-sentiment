var React = require('react');



var Line = React.createClass({
  render: function() {
    return (
      <path d={this.props.path} stroke="gray" strokeWidth="2" fill="none" />
    );
  }
});

module.exports = Line;