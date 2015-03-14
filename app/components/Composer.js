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
      iterations: 4,
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
    };
  },

  onShapeChanged(shape) {
    this.setState({shape:shape});
  },

  onSegmentChanged(segment) {
    this.setState({segment:segment});
  },

  changeIterations(e) {
    this.setState({iterations: e.target.value});
  },

  handleAdd() {
    this.props.onAdd(this.state);
  },


  render() {
    var generator = CustomGenerator(this.state.segment);
    return (
      <div className="viewer-container">
        <div>
          <ShapeEditor
            shapeChanged={this.onShapeChanged}
            shape={this.state.shape}
            width={this.props.width} height={this.props.height}
          />
          <SegmentEditor
            segmentChanged={this.onSegmentChanged}
            segment={this.state.segment}
            width={this.props.width} height={this.props.height}
          />
          <input type="range" min={0} max={5} onChange={this.changeIterations}/>
          <button onClick={this.handleAdd}/>
        </div>

        <FractalGenerator
          shape={this.state.shape}
          width={this.props.width} height={this.props.height}
          generator={generator}
          iterations={this.state.iterations}/>
      </div>
    );
  }
});

module.exports = Composer;
