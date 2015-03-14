var React = require("react");


var Composer = require("./Composer");
var FractalCollection = require("./FractalCollection");


var Page = React.createClass({
  getDefaultProps() {
    return {
      width:  200,
      height: 200
    };
  },

  render() {

    return (
      <div>
        <FractalCollection
          width={this.props.width} height={this.props.height}/>
        <Composer/>
      </div>
    );
  }
});

module.exports = Page;
