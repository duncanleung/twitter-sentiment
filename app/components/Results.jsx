var React = require('react');

var Dashboard = require('./parts/Dashboard.jsx');
var TwitterStream = require('./parts/TwitterStream.jsx');


//Results Holds the Dashboard and TwitterStream Components
//Uses Dashboard.jsx and TwitterStream.jsx
function Results(props){
  return(
      <div className="results container-fluid">
        <div className="row">
          <Dashboard
            binnedTweets={ props.binnedTweets }
            totalTweets={ props.totalTweets }
            sentiment= { props.sentiment }
          />
          <TwitterStream collectedTweets={ props.collectedTweets } />
        </div>
      </div>
    );
}

module.exports = Results;