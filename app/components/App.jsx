var React = require('react'),
    io = require('socket.io-client'),
    TwitterStream = require('./parts/TwitterStream.jsx');

var App = React.createClass({

componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
  },

  //Connect Handler
  connect() {
    console.log('Connected on socket: ' + this.socket.id);
  },

  render: function() {
    return (
      <div className="row">
        
        <div className="analysis col-sm-8">
          <h1>Twitter Dashboard</h1>
        </div>
        
        <TwitterStream />
      </div>
    );
  }
});

module.exports = App;