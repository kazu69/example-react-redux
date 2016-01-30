'use strict';

const path = require('path'),
      saveLicense = require('uglify-save-license'),
      webpack = require('webpack'),
      htmlWebpackPlugin = require('html-webpack-plugin'),
      htmlminifier = JSON.parse(require('fs').readFileSync(__dirname + '/.htmlminifier'));

module.exports = {
  entry: {
    js: ['./src/index.jsx']
  },
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("A test value"),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: saveLicense
      }
    }),
    new htmlWebpackPlugin({
      title: 'Todo App',
      filename: '../index.html',
      template: './src/index.html',
      minify: htmlminifier
    })
  ]
};
