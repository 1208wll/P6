var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin('./dist'),
        // new UglifyJsPlugin(),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
          filename: 'index.html', // 编译到 dist/index.html
          template: 'src/index.html'
        }),
        new CopyWebpackPlugin([{
            from: 'src/images',
            to: 'images'
        }]),
    ]
}