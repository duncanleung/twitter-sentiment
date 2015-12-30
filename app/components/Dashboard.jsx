var React = require('react'),
    TwitterStream = require('./parts/TwitterStream.jsx');

var Dashboard = React.createClass({
  render: function() {
    return(
      <div className="dashboard row">
        
        <div className="analysis col-sm-8">
          <h1>Twitter Dashboard</h1>
        </div>
        
        <TwitterStream collectedTweets={this.props.collectedTweets} />
      </div>
    );
  }
});

module.exports = Dashboard;