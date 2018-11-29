var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    poi: './src/map/poi.js',
    layout: './src/layout.js'
  },
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
