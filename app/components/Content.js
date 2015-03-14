var React = require("react");
var Composer = require("./Composer");
var ShapeEditor = require("./ShapeEditor");
var FractalGenerator = require("./FractalGenerator");
var Victor = require("victor");

var Page = React.createClass({
  getDefaultProps() {
    return {
      width:  200,
      height: 200
    }
  },
  getInitialState(){
    return {
      shape: [
        new Victor( 0, this.props.height/2 ),
        new Victor( this.props.width/2, 0 ),
        new Victor( this.props.width, this.props.height/2 ),
        new Victor( this.props.width/2, this.props.height),
        new Victor( 0, this.props.height/2 ),
      ]
    };
  },

  onShapeChanged(shape) {
    this.setState({shape:shape});
  },

  render() {

    return (
      <div>
        <Composer/>
        <FractalGenerator
          shape={this.state.shape}
          width={this.props.width} height={this.props.height}
          iterations={1}/>
        <ShapeEditor
          shapeChanged={this.onShapeChanged}
          shape={this.state.shape}
          width={this.props.width} height={this.props.height}
        />
      </div>
    );
  }
});

module.exports = Page;

/*
shape: [
  new Victor( this.props.width/5, this.props.height/2 ),
  new Victor( this.props.width*4/5, this.props.height/5 ),
  new Victor( this.props.width/5, this.props.height/2 ),
  new Victor( this.props.width*4/5, this.props.height*4/5 ),
  new Victor( this.props.width/5, this.props.height/2 )
]
};*/
