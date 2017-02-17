var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: 'build/',
        filename: 'phaser-ui.js',
        libraryTarget: 'umd',
        library: 'phaserUi'
    },
    externals: {
        Phaser: 'Phaser'
    }
    /*
    ,
    module: {
        loaders: [{
        {
            test: /(\.jsx|\.js)$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        },
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
    */
};
