var React = require("react");
var Drawer = require("./Drawer");

var SegmentEditor = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    segment: React.PropTypes.array.isRequired
  },

  render() {
    return (
      <Drawer
        onChange={this.props.onChange}
        shape={this.props.segment}
        width={this.props.width}
        height={this.props.height}/>
    );
  }
});

module.exports = SegmentEditor;
