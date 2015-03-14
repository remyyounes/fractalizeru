var Victor = require("victor");

var CustomGenerator = function(fractalPoints) {
  return {
    generate(start, end) {
      var points = [];
      var origMagnitude = fractalPoints[0].clone().subtract(fractalPoints[fractalPoints.length-1].clone()).magnitude();
      var vStartEnd = end.clone().subtract(start.clone());
      var vStartEndAngle = vStartEnd.angle();
      var scaledMagnitude = vStartEnd.magnitude();
      var scale = origMagnitude / scaledMagnitude;
      var vScale = new Victor(scale, scale);
      for (var i = 0; i < fractalPoints.length; i++) {

        if(i===0 ) {
          points.push(start.clone());
        }else if (i===fractalPoints.length) {
          points.push(end.clone());
        }else{
          var prevPoint = points[points.length-1];
          var a = fractalPoints[i-1].clone();
          var b = fractalPoints[i].clone();
          var v = b.subtract(a);
          var c = new Victor(v.magnitude(),0);
          points.push(
            c.divide(vScale)
            .rotate(v.angle())
            .rotate(vStartEndAngle)
            .add(prevPoint)
          );
        }
      }
      return points;
    }
  };
};

module.exports = CustomGenerator;
