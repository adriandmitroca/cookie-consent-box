const webpack = require('webpack');
const env = require('yargs').argv.env;
const path = require('path');
const pkg = require('./package.json');

const libraryName = pkg.name;

const plugins = [];
let outputFile;

if (env === 'build') {
  outputFile = `${libraryName}.min.js`;
} else {
  outputFile = `${libraryName}.js`;
}

const config = {
  mode: env === 'build' ? 'production' : 'development',
  entry: path.resolve('src/index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve('dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins,
  optimization: {
    minimize: env === 'build',
  },
};

module.exports = config;
