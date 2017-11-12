const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const port = process.env.PORT || 80;
console.log('Using port: '+port)

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'PORT': JSON.stringify(port)
      },
    })
  ]
});