var React = require("react");
var Drawer = require("./Drawer");

var ShapeEditor = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    shape: React.PropTypes.array.isRequired
  },

  render() {
    return (
      <Drawer
        onChange={this.props.onChange}
        shape={this.props.shape}
        width={this.props.width}
        height={this.props.height}/>
    );
  }
});

module.exports = ShapeEditor;
