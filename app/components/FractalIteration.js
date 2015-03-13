var React = require("react");
var Line = require("./Line");

var FractalIteration = React.createClass({
  propTypes: {
    start: React.PropTypes.object.isRequired,
    end: React.PropTypes.object.isRequired,
    iteration: React.PropTypes.number.isRequired
  },
  render() {
    return (
      <Line start={this.props.start} end={this.props.end}/>
    );
  }
});

module.exports = FractalIteration;
