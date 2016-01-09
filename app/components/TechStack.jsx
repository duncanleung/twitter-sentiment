var React = require('react');

var TechStack = React.createClass({
  render: function() {
    return (
      <div className="technology-stack container-fluid">
        <div className="row">
          <div className="technologies-container col-sm-12">
            <p className="heading">Twitterment was built with these technologies:</p>
            <div className="nodejs"><a href="https://nodejs.org/en/">
              <div className="nodejs-logo"></div></a></div>
            <div className="socketio"><a href="http://socket.io/">
              <div className="socketio-logo"></div></a></div>
            <div className="react"><a href="https://facebook.github.io/react/index.html">
              <div className="react-logo"></div></a></div>
            <div className="d3"><a href="http://d3js.org" target="_blank">
              <div className="d3-logo"></div></a></div>
            <div className="twitter"><a href="https://dev.twitter.com/streaming/overview">
              <div className="twitter-logo"></div></a></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TechStack;