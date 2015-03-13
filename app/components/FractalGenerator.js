var React = require("react");
var Line = require("./Line");
var KochGenerator = require("./KochGenerator");
var Victor = require("victor");

var FractalGenerator = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    shape: React.PropTypes.array.isRequired,
    iterations: React.PropTypes.number.isRequired
  },
  // I need a basic shape
  // for each line i'll render a FractalIteration
  generateSegment(start, end) {
    return KochGenerator.generate(start, end);
  },
  generateIteration(shape) {
    var newPoints = [];
    var lastPoint = shape.reduce((start, end) => {
      var segmentPoints = this.generateSegment(start,end);
      segmentPoints.reduce((start, end) => {
        newPoints.push(start);
        return end;
      });
      return end;
    });
    newPoints.push(lastPoint);
    return newPoints;
  },
  render() {

    var iterations = this.props.shape;
    for (var i = 0; i < this.props.iterations; i++) {
      iterations = this.generateIteration(iterations);
    }

    var lines = [];
    iterations.reduce((start, end) => {
      lines.push(
        <Line start={start} end={end}/>
      );
      return end;
    });


    return (
      <svg width={this.props.width} height={this.props.height}>
        {lines}
      </svg>
    );
  }
});

module.exports = FractalGenerator;
