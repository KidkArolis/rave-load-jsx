var React = require("./react");

module.exports = React.createClass({
  render: function() {
    return <button>Hello {this.props.name}</button>;
  }
});