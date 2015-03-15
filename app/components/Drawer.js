var React = require("react");
var Line = require("./Line");
var Dot = require("./Dot");
var Victor = require("victor");

var Drawer = React.createClass({
  getDefaultProps() {
    return {
      editable: true
    };
  },

  componentDidMount() {
    var node = this.getDOMNode();
    node.addEventListener("mousemove", this.mouseMove);
    node.addEventListener("click", this.mouseClick);
    document.addEventListener("mouseup", this.deselect);
  },

  getInitialState() {
    return {
      shape: this.props.shape,
      selected: null
    };
  },

  mouseMove(e) {
    if(this.state.selected !== null) {
      var shape = this.props.shape.slice();
      shape[this.state.selected] = new Victor(e.offsetX, e.offsetY);
      this.props.onChange(shape);
    }
  },

  mouseClick(e) {
    if (e.shiftKey) {
      this.addNode(e.offsetX, e.offsetY);
    }
  },

  deselect() {
    this.setState({selected: null});
  },

  selectNode(index) {
    this.setState({ selected: index });
  },

  removeNode(index) {
    var newShape = this.props.shape.slice();
    newShape.splice(index, 1);
    this.props.onChange(newShape);
  },

  addNode(x, y) {
    x = x || Math.random() * this.props.width;
    y = y || Math.random() * this.props.height;
    var node = new Victor(x, y);
    var newShape = this.props.shape.slice();
    newShape.push(node);
    this.props.onChange(newShape);
  },

  connectTheDots(dots) {
    var lines = [];
    dots.reduce((start, end) => {
      lines.push({start: start, end: end });
      return end;
    });
    return lines;
  },

  renderShape(Segment, points) {
    return this.connectTheDots(points).map((line) => {
      return ( <Segment start={line.start} end={line.end}/> );
    });
  },

  renderDots(Component, dots) {
    var circles = dots.map((dot, index) => {
      return ( <Component
        onSelect={this.selectNode.bind(null, index)}
        onRemove={this.removeNode.bind(null, index)}
        onAdd={this.addNode}
        position={dot}
      />);
    });
    return circles;
  },

  render() {
    var lines = this.renderShape(Line, this.props.shape.slice());
    var dots = !this.props.editable ? [] : (
      this.renderDots(Dot, this.props.shape.slice())
    );

    return (
      <svg width={this.props.width} height={this.props.height}>
        {lines}
        {dots}
      </svg>
    );
  }

});

module.exports = Drawer;
