var React = require("react");
// var FractalGenerator = require("./FractalGenerator");

var FractalGenerator = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },
  render() {
    return (
      <div>Hello World!</div>
    );
  }
});

module.exports = FractalGenerator;
