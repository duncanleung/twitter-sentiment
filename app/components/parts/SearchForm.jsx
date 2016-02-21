var React = require('react');
var ReactDOM = require('react-dom');

var SearchForm = React.createClass({
  
  search() {
    var keyword = ReactDOM.findDOMNode(this.refs.keyword).value;
    var initTimestamp = new Date().getTime();
    
    this.props.emit('search', { keyword: keyword });
    this.props.initTimestamp({ initTimestamp: initTimestamp });
  },

  render: function() {
    return (
      <div id="search-bar">
          <form className="input-group" action="javascript:void(0)" onSubmit={ this.search }>
            <input id="search" ref="keyword" type="search" placeholder="Enter Brand or Keyword"
                    autoFocus="autofocus" className="form-control" />
            <span className="input-group-btn">
              <button id="submit" className="btn btn-default" type="button" onClick= { this.search }>Search</button>
            </span>
          </form>
      </div>
    );
  }
});

module.exports = SearchForm;