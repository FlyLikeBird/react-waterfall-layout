const express = require('express');
const path = require('path');
const Webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const app = new express();
const port = 3000;

const compiler = Webpack(config);
app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    //writeToDisk:true,
    stats: {colors: true},
    lazy: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: false
    },
}));
app.use(WebpackHotMiddleware(compiler));

app.use(express.static(path.resolve('./images')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);