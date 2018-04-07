var webpackMerge = require('webpack-merge');
var baseConfig = require('./webpack.base.config.js');
var path = require('path');
var webpack = require('webpack');

module.exports =  webpackMerge(baseConfig, {
    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: path.join(__dirname, 'build')
    },
    plugins: [
        // 热模块替换
        new webpack.HotModuleReplacementPlugin(),
         // 出错不终止插件
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            __DEV__: true
        }),
    ]
});

