const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const port = process.env.PORT || 3000;
console.log('Using port: '+port)

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('dev'),
        'PORT': JSON.stringify(port)
      },
    })
  ]
});