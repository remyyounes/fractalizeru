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
    shape: React.PropTypes.array.isRequired
  },

  componentDidMount() {
    this.getDOMNode().addEventListener("mousemove", this.mouseMove);
    document.addEventListener("mouseup", this.deselect);
  },

  mouseMove(e) {
    if(this.state.selected !== null) {
      var shape = this.state.shape.slice();
      shape[this.state.selected] = new Victor(e.offsetX, e.offsetY);
      this.setState({ shape: shape });
      this.props.shapeChanged(shape);
    }
  },

  getInitialState() {
    return {
      shape: this.props.shape,
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
    var newShape = this.state.shape.slice();
    newShape.splice(index, 1);
    this.setState({ shape: newShape });
    this.props.shapeChanged(newShape);
  },

  addNode(x, y) {
    x = x || Math.random() * this.props.width;
    y = y || Math.random() * this.props.height;
    var node = new Victor(x, y);
    var newShape = this.state.shape.slice();
    newShape.push(node);
    this.setState({shape: newShape});
  },

  render() {
    var lines = this.renderSegments(Line, this.state.shape.slice());
    var dots = this.renderDots(Dot, this.state.shape.slice());
    return (
      <svg width={this.props.width} height={this.props.height}>
        {lines}
        {dots}
      </svg>
    );
  }
});

module.exports = ShapeEditor;
