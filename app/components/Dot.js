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
          r={5} stroke="black" strokeWidth="5" fill="transparent" />
    );
  }
});

module.exports = Dot;
