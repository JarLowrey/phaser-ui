var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    //setup the webpack output as a library
    output: {
        path: 'build/',
        filename: 'phaser-ui.js',
        libraryTarget: 'umd',
        library: 'phaserUi'
    },
    //needed in src library when extending/using Phaser objects/code. Relies on Consumers to import/include phaser and thus have the 'Phaser' variable globally available
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
