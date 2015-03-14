var React = require("react");
var Firebase = require("firebase");

var Composer = require("./Composer");
var FractalCollection = require("./FractalCollection");


var Content = React.createClass({

  componentDidMount() {
    this.firebaseRef = new Firebase("https://mini3-firebase.firebaseio.com/").child("fractals");
    this.firebaseRef.on('value', this.handleFirebaseChange);
    this.firebaseRef.on("child_added", this.onFractalAdd);
  },

  handleFirebaseChange (snapshot) {
    this.setState({ fractals: this.toArray(snapshot.val()) });
  },

  toArray(object) {
    var arr = [];
    for (var i in object) {
      var obj = {};
      obj.val = object[i];
      obj.key = i;
    }
  },

  onFractalAdd(snapshot) {
    var object = { key: snapshot.key(), val: snapshot.val() };
    var newFractals = this.state.fractals.concat([object]);
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
          width={this.props.width} height={this.props.height}/>
        <Composer fractal={""} onAdd={this.handleAddFractal}/>
      </div>
    );
  }
});

module.exports = Content;
