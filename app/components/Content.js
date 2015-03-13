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
        new Victor( this.props.width/5, this.props.height/2 ),
        new Victor( this.props.width*4/5, this.props.height/5 ),
        new Victor( this.props.width/5, this.props.height/2 ),
        new Victor( this.props.width*4/5, this.props.height*4/5 ),
        new Victor( this.props.width/5, this.props.height/2 )
      ]
    };
  },
  render() {


    return (
      <div>
        <Composer/>
        <ShapeEditor
          shape={this.state.shape}
          width={this.props.width} height={this.props.height}
        />
        <FractalGenerator
          shape={this.state.shape}
          width={this.props.width} height={this.props.height}
          iterations={5}/>
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
