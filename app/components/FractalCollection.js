var React = require("react");
var Victor = require("victor");
var FractalGenerator = require("./FractalGenerator");
var CustomGenerator = require("./CustomGenerator");

var FractalCollection = React.createClass({
  getInitialState() {
    return {
      fractals: this.props.fractals
    };
  },
  componentWillReceiveProps(nextProps) {
    this.setState({fractals: nextProps.fractals});
  },

  getInitialProps() {
    return {
      fractals: [
        {
          key: "Koch",
          val: {
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
          }
        }
      ]
    };
  },

  renderFractals(fractals){
    return !fractals.length ? null : fractals.reverse().map((fractalObj) =>{
      var fractal = fractalObj.val;
      return (<div onClick={this.props.onSelect.bind(null,fractal)}>
        <FractalGenerator
          shape={fractal.shape}
          generator={CustomGenerator(fractal.segment)}
          iterations={fractal.iterations}
          width={this.props.width}
          height={this.props.height}
          />
        </div>
      );
    });
  },

  render() {
    var fractals = this.state.fractals;
    fractals = this.renderFractals(fractals);
    return (
      <div className="collection">
        {fractals}
      </div>
    );
  }

});

module.exports = FractalCollection;
