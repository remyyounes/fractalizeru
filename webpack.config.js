module.exports = {
  entry: './app/App.js',
  output: {
    filename: 'public/index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  }
};
