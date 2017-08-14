var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: ['babel-polyfill', './app/index.js'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        publicPath: "/"
    },
    module: {
        loaders: [
          { test: /\.jsx?$/, loader: 'babel', }
      ],
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(eot|woff|woff2|ttf|svg|png|jpg|jpe?g|gif)(\?\S*)?$/, loader: 'url-loader?limit=200000'}
        ]
    },
    devtool: 'sourcemap',
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: 'app/index.html'
        })
    ]
}

module.exports = config;
