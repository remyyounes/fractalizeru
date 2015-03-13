var React = require("react");
var Composer = require("./Composer");
var FractalGenerator = require("./FractalGenerator");

var Page = React.createClass({
  render() {
    return (
      <div>
        <Composer/>
        <FractalGenerator/>
      </div>
    );
  }
});

module.exports = Page;
