var path = require('path');
var webpack = require('webpack');

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index.jsx'
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      react: path.join(__dirname, '/node_modules/react'),
      'prop-types':path.join(__dirname, '/node_modules/prop-types'),
      modules: path.join(__dirname, '/src/modules'),
      tunk: path.join(__dirname, '../tunkjs/tunk/tunk.js'),
      'tunk-react': path.join(__dirname, '../tunkjs/tunk-react/tunk-react.js'),
      'tunk-isolate': path.join(__dirname, '../tunkjs/tunk-isolate/tunk-isolate.js'),
      'tunk-request': path.join(__dirname, '../tunkjs/tunk-request/tunk-request.js'),
      'tunk-delay': path.join(__dirname, '../tunkjs/tunk-delay/tunk-delay.js'),
      'tunk-debug': path.join(__dirname, '../tunkjs/tunk-debug/tunk-debug.js')
    }
  }, 
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
	  chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },
  plugins: [
  ],
  module: {
    loaders: [
      {
			test: /\.(js|jsx)$/,
			exclude: /(node_modules)/,
			loader: ['babel-loader','tunk-loader'],
		}
    ]
  }
}


// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.

