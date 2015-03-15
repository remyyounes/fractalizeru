var React = require("react");
var Firebase = require("firebase");
var Victor = require("victor");
var Composer = require("./Composer");
var FractalCollection = require("./FractalCollection");


var Content = React.createClass({

  getInitialState() {
    return {
      fractals: []
    };
  },

  componentDidMount() {
    this.firebaseRef = new Firebase("https://mini3-firebase.firebaseio.com/").child("fractals");
    this.firebaseRef.on('value', this.handleFirebaseChange);
    this.firebaseRef.on("child_added", this.onFractalAdd);
  },

  handleFirebaseChange (snapshot) {
    var list = this.toArray(snapshot.val());
    this.parseFractals(list);

    this.setState({ fractals: fractals });
  },

  parseFractals(list) {
    var fractals = list.map((fractal) => {
      fractalObj = fractal.val;
      fractalObj.segment = fractalObj.segment.map((seg) => {
        return new Victor(seg);
      });
      fractalObj.shape = fractalObj.shape.map((point) => {
        return new Victor(point);
      });

      return fractalObj;
    });
    return fractals;
  },

  toArray(object) {
    var arr = [];
    for (var i in object) {
      var obj = {};
      obj.val = object[i];
      obj.key = i;
      arr.push(obj);
    }
    return arr;
  },

  onFractalAdd(snapshot) {
    var object = { key: snapshot.key(), val: snapshot.val() };
    var newFractals = this.state.fractals.concat(this.parseFractals([object]));
    this.setState({ fractals: newFractals });
  },

  handleAddFractal: function(newFractal) {
    this.firebaseRef.push(newFractal);
  },

  getDefaultProps() {
    return {
      width:  200,
      height: 200
    };
  },

  render() {
    return (
      <div>
        <FractalCollection
        fractals={this.state.fractals}
          width={this.props.width} height={this.props.height}/>

        <Composer fractal={""} onAdd={this.handleAddFractal}/>
      </div>
    );
  }
});

module.exports = Content;
