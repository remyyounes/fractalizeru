var React = require("react");
// var FractalGenerator = require("./FractalGenerator");

var FractalGenerator = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },
  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <line
          stroke="black"
          x1="0"
          y1={this.props.height/2}
          x2={this.props.width}
          y2={this.props.height/2}
          />
      </svg>
    );
  }
});

module.exports = FractalGenerator;
