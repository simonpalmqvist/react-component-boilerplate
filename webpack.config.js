const path = require('path')
const webpack = require('webpack')

const buildDirectory = './dist/'

module.exports = {
  entry: './test/util/render.jsx',
  output: {
    path: 'dist',
    filename: 'app.js',
    sourceMapFilename: 'app.map'
  },
  devtool: '#source-map',
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'standard',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|\.test.jsx$)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  },
  standard: {
    parser: 'babel-eslint'
  },
  plugins: []
}
