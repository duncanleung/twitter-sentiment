var React = require('react');

var Search = React.createClass({
  
  search() {
    var keyword = React.findDOMNode(this.refs.keyword).value;
    this.props.emit('search', { keyword: keyword });
  },

  render: function() {
    return (
      <div id="search-bar">
        <div className="input-group">
          <form action="javascript:void(0)" onSubmit={this.search}>
            <input id="search" ref="search" type="search" placeholder="Enter Brand or Keyword"
                    autofocus="autofocus" className="form-control">
            <span class="input-group-btn">
              <button id="submit" type="button" className="btn btn-default">Search</button>
            </span>
          </form>
        </div>
      </div>
    );
  }
});