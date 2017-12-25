'use strict';
const resolve = require('path').resolve

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        index: ['./index.js']
    },
	resolve: {
		extensions: ['.vue', '.js']
	},
    output: {
        path: resolve(__dirname + '/build'),
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash].js',
        publicPath: '/build'
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }, {
                test: /\.js$/,
                loader: ['babel-loader', 'tunk-loader'],
                exclude: /(node_modules)/
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              },{
				test: /\.json$/,
				exclude: /(node_modules)|(tunkjs)/,
				loader: 'json',
			}
        ],
    },
    
    //devtool: '#eval-source-map',

	plugins:  [
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template : 'index.html',
            inject: 'body'
        })]
};
