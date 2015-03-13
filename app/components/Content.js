var React = require("react");
var Composer = require("./Composer");
var FractalGenerator = require("./FractalGenerator");

var Page = React.createClass({
  render() {
    return (
      <div>
        <Composer/>
        <FractalGenerator width={200} height={200}/>
      </div>
    );
  }
});

module.exports = Page;
