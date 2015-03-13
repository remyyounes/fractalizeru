var Victor = require("victor");

var KochGenerator = {
  generate(start, end) {
    return [
      start,
      new Victor(Math.random()*200, Math.random()*200),
      end
    ];
  }
};

module.exports = KochGenerator;
