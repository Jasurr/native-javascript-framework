const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),

    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devtool: 'eval',

    devServer: {
        port: 3000
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Native Framework',
            template: './index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'node_modules/materialize-css/dist/css/materialize.min.css'),
                    to: 'assets/css/',
                },
            ],
        }),
    ],
};
