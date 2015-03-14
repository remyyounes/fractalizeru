var React = require("react");
var Line = require("./Line");
var Dot = require("./Dot");
var Drawer = require("../mixins/Drawer");
var Victor = require("victor");
var ShapeEditor = React.createClass({
  mixins: [Drawer],

  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    segment: React.PropTypes.array.isRequired
  },

  componentDidMount() {
    this.getDOMNode().addEventListener("mousemove", this.mouseMove);
    document.addEventListener("mouseup", this.deselect);
  },

  mouseMove(e) {
    if(this.state.selected !== null) {
      var segment = this.state.segment.slice();
      segment[this.state.selected] = new Victor(e.offsetX, e.offsetY);
      this.setState({ segment: segment });
      this.props.shapeChanged(segment);
    }
  },

  getInitialState() {
    return {
      segment: this.props.segment,
      selected: null
    };
  },

  deselect() {
    this.setState({selected: null});
  },

  selectNode(index) {
    this.setState({
      selected: index
    });
  },

  render() {
    var lines = this.renderSegments(Line, this.state.segment.slice());
    var dots = this.renderDots(Dot, this.state.segment.slice());
    return (
      <svg width={this.props.width} height={this.props.height}>
        {lines}
        {dots}
      </svg>
    );
  }
});

module.exports = ShapeEditor;
