var React = require("react");
var Line = require("./Line");
var Victor = require("victor");

var FractalGenerator = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },
  render() {
    var start = new Victor(
      0,
      this.props.height/2
    );

    var end = new Victor(
      this.props.width,
      this.props.height/2
    );

    return (
      <svg width={this.props.width} height={this.props.height}>
        <Line start={start} end={end}/>
      </svg>
    );
  }
});

module.exports = FractalGenerator;
