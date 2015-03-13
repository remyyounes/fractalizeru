var React = require("react");

var Drawer = {

  connectTheDots(dots) {
    var lines = [];
    dots.reduce((start, end) => {
      lines.push({start: start, end: end });
      return end;
    });
    return lines;
  },

  renderSegments(Segment, points) {
    return this.connectTheDots(points).map((line) => {
      return ( <Segment start={line.start} end={line.end}/> );
    });
  }

};

module.exports = Drawer;
