const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'build/bundle.js',
    sourceMapFileName: 'build/bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
