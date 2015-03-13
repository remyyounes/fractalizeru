var React = require("react");
var Line = require("./Line");
var Drawer = require("../mixins/Drawer");

var ShapeEditor = React.createClass({
  mixins: [Drawer],

  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    shape: React.PropTypes.array.isRequired
  },

  getInitialState() {
    return {
      shape: this.props.shape
    };
  },

  render() {
    var lines = this.renderSegments(Line, this.state.shape);
    return (
      <svg width={this.props.width} height={this.props.height}>
        {lines}
      </svg>
    );
  }
});

module.exports = ShapeEditor;
