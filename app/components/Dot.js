var React = require("react");


var Dot = React.createClass({
  propTypes: {
    position: React.PropTypes.object.isRequired,
    onMove: React.PropTypes.func
  },

  render() {
    return (
        <circle
          onMouseDown={this.props.onSelect}
          cx={this.props.position.x}
          cy={this.props.position.y}
          r={10} stroke="black" stroke-width="3" fill="red" />
    );
  }
});

module.exports = Dot;
