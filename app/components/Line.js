var React = require("react");


var Line = React.createClass({
  propTypes: {
    start: React.PropTypes.object.isRequired,
    end: React.PropTypes.object.isRequired
  },
  render() {
    return (
        <line
          stroke="black"
          x1={this.props.start.x}
          y1={this.props.start.y}
          x2={this.props.end.x}
          y2={this.props.end.y}

        />
    );
  }
});

module.exports = Line;
