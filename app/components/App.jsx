var React = require('react'),
    io = require('socket.io-client'),
    TwitterStream = require('./parts/TwitterStream.jsx');

var App = React.createClass({

  /*getInitialState: function() {
      return {
          status: 'disconnected',
          keyword: ''
      };
  },*/

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
  },

  //Connect Handler
  connect() {
    /*this.setState({ status: 'connected' });*/
    console.log('Connected on socket: %s', this.socket.id);
  },

  /*disconnect() {
    this.setState({ status: 'disconnected' });
    console.log('Disconnected: %s', this.socket.id);
  },*/

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