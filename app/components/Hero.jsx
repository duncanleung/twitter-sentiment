var React = require('react'),
    SearchForm = require('./parts/SearchForm.jsx');

var Hero = React.createClass({
  render: function() {
    return(
      <div className="hero container-fluid">
        <div className="row">
          <div className="content col-sm-12">
            <h1>Track your Brand Sentiment on Twitter</h1>
            <h2>What are people saying about your brand?</h2>
            <h2 className="text-logo">Twitterment</h2>
            
            <SearchForm />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Hero;