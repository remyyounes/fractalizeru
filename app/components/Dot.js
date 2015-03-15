var React = require("react");


var Dot = React.createClass({
  propTypes: {
    position: React.PropTypes.object.isRequired,
    onMove: React.PropTypes.func
  },

  handleMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();
    if ( e.shiftKey ) {
      this.props.onRemove();
    } else {
      this.props.onSelect();
    }
  },

  render() {
    return (
        <circle
          onMouseDown={this.handleMouseDown}
          cx={this.props.position.x}
          cy={this.props.position.y}
          r={5} stroke="black" strokeWidth="5" fill="transparent" />
    );
  }
});

module.exports = Dot;
