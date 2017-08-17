var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  //setup the webpack output as a library
  output: {
    path: path.resolve(__dirname, './build'),    
    filename: 'phaser-ui.js',
    libraryTarget: 'umd',
    library: 'phaserUi'
  },
  //needed in src library when extending/using Phaser objects/code. Relies on Consumers to import/include phaser and thus have the 'Phaser' variable globally available
  externals: {
    Phaser: 'Phaser'
  },
  module: {
    rules: [{
        enforce: "pre", //check source files, not modified by other loaders (like babel-loader)
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          //failOnWarning: false,
          //failOnError: false,
          emitWarning: true
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
