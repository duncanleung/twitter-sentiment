var React = require('react');

var Dashboard = React.createClass({
  render: function() {
    return (
      <div className="dashboard col-sm-8">
        <h1>Twitter Dashboard</h1>
        <div className="histogram"></div>
      </div>
    );
  }
});

module.exports = Dashboard;