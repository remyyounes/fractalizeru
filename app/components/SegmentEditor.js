var React = require("react");
var Line = require("./Line");
var Dot = require("./Dot");
var Drawer = require("../mixins/Drawer");
var Victor = require("victor");
var SegmentEditor = React.createClass({
  mixins: [Drawer],

  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    segment: React.PropTypes.array.isRequired
  },

  componentDidMount() {
    var node = this.getDOMNode();
    node.addEventListener("mousemove", this.mouseMove);
    node.addEventListener("click", this.mouseClick);
    document.addEventListener("mouseup", this.deselect);
  },

  mouseMove(e) {
    if(this.state.selected !== null) {
      var segment = this.state.segment.slice();
      segment[this.state.selected] = new Victor(e.offsetX, e.offsetY);
      this.setState({ segment: segment });
      this.props.segmentChanged(segment);
    }
  },

  mouseClick(e) {
    if (e.shiftKey) {
      this.addNode(e.offsetX, e.offsetY);
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
    this.setState({ selected: index });
  },

  removeNode(index) {
    var newSegment = this.state.segment.slice();
    newSegment.splice(index, 1);
    this.setState({ segment: newSegment });
    this.props.segmentChanged(newSegment);
  },

  addNode(x, y) {
    x = x || Math.random() * this.props.width;
    y = y || Math.random() * this.props.height;
    var node = new Victor(x, y);
    var newSegment = this.state.segment.slice();
    newSegment.push(node);

    this.setState({segment: newSegment});
    this.props.segmentChanged(newSegment);
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

module.exports = SegmentEditor;
