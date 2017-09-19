var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html', // 编译到 dist/index.html
          template: 'src/index.html'
        }),
        new CopyWebpackPlugin([{
            from: 'src/images',
            to: 'images'
        }])
    ]
}