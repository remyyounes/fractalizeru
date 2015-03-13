var Victor = require("victor");

var kochB = (startPoint, endPoint) => {
  var start = startPoint.clone();
  var end = endPoint.clone();
  var segment = end.subtract(start);
  segment.divide(new Victor(3, 3));
  return segment.add(startPoint);
};

var kochC = (startPoint, endPoint) => {
  var start = startPoint.clone();
  var end = endPoint.clone();
  var segment = end.subtract(start);
  segment.divide(new Victor(3, 3));
  start.add(segment);
  segment.rotateDeg(-60);
  return start.add(segment);
};

var kochD = (startPoint, endPoint) => {
  var start = startPoint.clone();
  var end = endPoint.clone();
  var segment = end.subtract(start);
  segment.multiply(new Victor(2/3, 2/3));
  return segment.add(startPoint);
};


var KochGenerator = {
  generate(start, end) {
    return [
      start,
      kochB(start, end),
      kochC(start, end),
      kochD(start, end),
      end
    ];
  },
};

module.exports = KochGenerator;
