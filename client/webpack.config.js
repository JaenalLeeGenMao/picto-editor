var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: ['babel-polyfill', './app/index.js'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        // publicPath: "http://localhost:7700/dist"
        publicPath: "/"
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(eot|woff|woff2|ttf|svg|png|jpg|jpe?g|gif)(\?\S*)?$/, loader: 'url-loader?limit=200000'}
        ]
    },
    devtool: 'sourcemap',
    devServer: {
        // hot: true,
        // inline: true,
        // port: 7700,
        historyApiFallback: true
    },
    // externals: {
    //     'cheerio': 'window',
    //     'react/lib/ExecutionEnvironment': true,
    //     'react/lib/ReactContext': true
    // },
    plugins: [
        new HtmlWebpackPlugin ({
            template: 'app/index.html'
        })
    ]
}

module.exports = config;
