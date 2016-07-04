module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'reselect-debug.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};