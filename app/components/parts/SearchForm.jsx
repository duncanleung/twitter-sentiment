var React = require('react');

var SearchForm = React.createClass({
  
  search() {
    var keyword = React.findDOMNode(this.refs.keyword).value;
    this.props.emit('search', { keyword: keyword });
  },

  render: function() {
    return (
      <div id="search-bar">
          <form className="input-group" action="javascript:void(0)" onSubmit={this.search}>
            <input id="search" ref="search" type="search" placeholder="Enter Brand or Keyword"
                    autofocus="autofocus" className="form-control" />
            <span className="input-group-btn">
              <button id="submit" type="button" className="btn btn-default">Search</button>
            </span>
          </form>
      </div>
    );
  }
});

module.exports = SearchForm;