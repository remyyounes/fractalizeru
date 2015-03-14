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

  deselect(index) {
    this.setState({selected: null});
  },

  selectNode(index) {
    this.setState({
      selected: index
    });
  },

  renderDots(dots) {
    var circles =   dots.map((dot, index) => {
      return ( <Dot
        onSelect={this.selectNode.bind(null, index)}
        position={dot}
      />);
    });
    return circles;
  },

  render() {
    var lines = this.renderSegments(Line, this.state.shape.slice());
    var dots = this.renderDots(this.state.shape.slice());
    return (
      <svg width={this.props.width} height={this.props.height}>
        {lines}
        {dots}
      </svg>
    );
  }
});

module.exports = ShapeEditor;
