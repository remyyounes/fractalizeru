var React = require("react");
var Firebase = require("firebase");
var Victor = require("victor");
var Composer = require("./Composer");
var FractalCollection = require("./FractalCollection");


var Content = React.createClass({

  getInitialState() {
    return {
      selected: null,
      fractals: []
    };
  },

  componentDidMount() {
    this.firebaseRef = new Firebase("https://mini3-firebase.firebaseio.com/").child("fractals");
    this.firebaseRef.on('value', this.handleFirebaseChange);
    // this.firebaseRef.on("child_added", this.onFractalAdd);
  },

  handleFirebaseChange (snapshot) {
    var list = this.toArray(snapshot.val());
    fractals = this.parseFractals(list);

    this.setState({ fractals: fractals });
  },

  parseFractals(list) {
    var fractals = list.map((fractal) => {
      fractal.val.segment = fractal.val.segment.map((seg) => {
        return Victor.fromObject(seg);
      });
      fractal.val.shape = fractal.val.shape.map((point) => {
        return Victor.fromObject(point);
      });
      return fractal;
    });
    return fractals;
  },

  toArray(object) {
    var arr = [];
    for (var i in object) {
      var obj = {};
      obj.val = object[i];
      obj.val = obj.val;
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

  onFractalSelected(fractal) {
    this.setState({selected: fractal});
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
          onSelect={this.onFractalSelected}
          fractals={this.state.fractals}
          width={this.props.width} height={this.props.height}/>

        <Composer fractal={this.state.selected} onAdd={this.handleAddFractal}/>
      </div>
    );
  }
});

module.exports = Content;
