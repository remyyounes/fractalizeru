var React = require("react");
var Composer = require("./Composer");
var FractalGenerator = require("./FractalGenerator");
var Victor = require("victor");

var Page = React.createClass({
  render() {

    var width  = 200;
    var height = 200;

    var shape = [
      new Victor( 0, height/2 ),
      new Victor( width/2, height/3 ),
      new Victor( width, height/2 ),
      new Victor( width/2, height*2/3 ),
      new Victor( 0, height/2 )
    ];

    return (
      <div>
        <Composer/>
        <FractalGenerator shape={shape} width={width} height={height} iterations={5}/>
      </div>
    );
  }
});

module.exports = Page;
