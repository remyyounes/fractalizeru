var React = require("react");
var Drawer = require("./Drawer");

var FractalGenerator = React.createClass({
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
    var lines = this.iterateGenerations(this.props.shape);

    return (
      <div className="viewer">
        <Drawer
          shape={lines}
          editable={false}
          width={this.props.width}
          height={this.props.height}/>
      </div>
    );
  }
});

module.exports = FractalGenerator;
