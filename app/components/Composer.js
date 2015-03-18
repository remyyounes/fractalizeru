var React = require("react");
var ShapeEditor = require("./ShapeEditor");
var SegmentEditor = require("./SegmentEditor");
var CustomGenerator = require("./CustomGenerator");
var FractalGenerator = require("./FractalGenerator");
var Victor = require("victor");

var Composer = React.createClass({

  getDefaultProps() {
    return {
      width:  200,
      height: 200
    };
  },

  getInitialState(){
    return {
      fractal: {
        iterations: 2,
        shape: [
          new Victor( 0, this.props.height/2 ),
          new Victor( this.props.width/2, 0 ),
          new Victor( this.props.width, this.props.height/2 ),
          new Victor( this.props.width/2, this.props.height),
          new Victor( 0, this.props.height/2 ),
        ],
        segment: [
          new Victor( 0, this.props.height/2 ),
          new Victor( this.props.width/3, this.props.height/2),
          new Victor( this.props.width/2, this.props.height/4),
          new Victor( this.props.width*2/3, this.props.height/2),
          new Victor( this.props.width, this.props.height/2 ),
        ]
      }
    };
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.fractal !== this.props.fractal)
      this.setState({fractal: nextProps.fractal});
  },

  onShapeChanged(shape) {
    var fractal = this.state.fractal;
    fractal.shape = shape;
    this.setState({fractal: fractal});
  },

  onSegmentChanged(segment) {
    var fractal = this.state.fractal;
    fractal.segment = segment;
    this.setState({fractal: fractal});
  },

  changeIterations(e) {
    var fractal = this.state.fractal;
    fractal.iterations = e.target.value;
    this.setState({fractal: fractal});
  },

  handleAdd() {
    this.props.onAdd(this.state.fractal);
  },


  render() {
    var generator = CustomGenerator(this.state.fractal.segment);
    return (
      <div className="viewer-container">
        <div>
          <ShapeEditor
            onChange={this.onShapeChanged}
            shape={this.state.fractal.shape}
            width={this.props.width} height={this.props.height}
          />
          <SegmentEditor
            onChange={this.onSegmentChanged}
            segment={this.state.fractal.segment}
            width={this.props.width} height={this.props.height}
          />
          <input type="range" min={0} max={5} onChange={this.changeIterations}/>
          <button onClick={this.handleAdd}>Save Fractal</button>
          <ul className="instructions">
            <li> Drag nodes around to change the fractal.</li>
            <li> Shift+Click on a node removes it. </li>
            <li> Shift+Click on the top canvases adds a node. </li>
            <li> Click on the side panel to load a saved fractal. </li>
            <li> Shift+Click on the the side panel to remove a fractal (you can delete anybodys stuff).</li>

          </ul>
        </div>

        <FractalGenerator
          shape={this.state.fractal.shape}
          width={this.props.width} height={this.props.height}
          generator={generator}
          iterations={this.state.fractal.iterations}/>
      </div>
    );
  }
});

module.exports = Composer;
