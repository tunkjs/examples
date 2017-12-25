const config = require("./webpack.config.js");
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const host = '127.0.0.1';
const port = '8089';

config.entry.index.unshift(`webpack-dev-server/client?http://${host}:${port}/`, "webpack/hot/dev-server");
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    contentBase: '/build/',
    publicPath: "/build",
    hot: true,
    inline: true
});
server.listen(port, host, function () {
    console.log(`visit by http://${host}:${port}/build/index.html`)
});


