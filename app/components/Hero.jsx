var React = require('react');
var SearchForm = require('./parts/SearchForm.jsx');

function Hero(props){
  return(
      <div className="hero container-fluid">
        <div className="row">
          <div className="content col-sm-12">
            <h1>Track your Brand Sentiment on Twitter</h1>
            <h2>What are people saying about your brand?</h2>
            <h2 className="text-logo"><img id="logo" src="/img/twitterment.png" />Twitterment</h2>
            
            <SearchForm emit={ props.emit } initTimestamp={ props.initTimestamp } />
          </div>
        </div>
      </div>
    );
}

module.exports = Hero;