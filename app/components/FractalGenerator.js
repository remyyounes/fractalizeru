var React = require("react");
var Line = require("./Line");
var FractalIteration = require("./FractalIteration");
var Victor = require("victor");

var FractalGenerator = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    // shape: React.PropTypes.array.isRequired,
    iterations: React.PropTypes.number.isRequired
  },
  // I need a basic shape
  // for each line i'll render a FractalIteration
  render() {
    var shape = [
      new Victor(
        0,
        this.props.height/2
      ),
      new Victor(
        this.props.width/2,
        this.props.height/3
      ),
      new Victor(
        this.props.width,
        this.props.height/2
      )
    ];

    var iterations = [];
    shape.reduce(function(pointA, pointB) {
      iterations.push(<FractalIteration start={pointA} end={pointB}/>);
      return pointB;
    });
    
    return (
      <svg width={this.props.width} height={this.props.height}>
        {iterations}
      </svg>
    );
  }
});

module.exports = FractalGenerator;
