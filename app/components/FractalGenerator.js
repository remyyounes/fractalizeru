var React = require("react");
var Line = require("./Line");
var Drawer = require("../mixins/Drawer");

var FractalGenerator = React.createClass({
  mixins: [Drawer],
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    shape: React.PropTypes.array.isRequired,
    generator: React.PropTypes.object.isRequired,
    iterations: React.PropTypes.number.isRequired
  },

  generateIteration(shape, generator) {
    var newShape = [];
    newShape.push(
       shape.reduce((start, end) => {
        var segmentPoints = generator.generate(start,end);
        segmentPoints.reduce((start, end) => {
          newShape.push(start);
          return end;
        });
        return end;
      })
    );
    return newShape;
  },

  iterateGenerations(points) {
    for (var i = 0; i < this.props.iterations; i++) {
      points = this.generateIteration(points, this.props.generator);
    }
    return points;
  },

  render() {
    var lines = this.renderSegments(
      Line,
      this.iterateGenerations(this.props.shape)
    );

    return (
      <svg width={this.props.width} height={this.props.height}>
        {lines}
      </svg>
    );
  }
});

module.exports = FractalGenerator;
