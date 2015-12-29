var React = require('react'),
    io = require('socket.io-client'),
    Hero = require('./Hero.jsx'),
    Dashboard = require('./Dashboard.jsx');

var App = React.createClass({

  getInitialState: function() {
      return {
          status: 'disconnected',
          keyword: ''
      };
  },

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
  },

  //Connect Handler
  connect() {
    this.setState({ status: 'connected' });
    console.log('Connected on socket: %s', this.socket.id);
  },

  disconnect() {
    this.setState({ status: 'disconnected' });
    console.log('Disconnected: %s', this.socket.id);
  },

  render: function() {
    return (
      <div>
        <Hero />
        <Dashboard />
      </div>
    );
  }
});

module.exports = App;