var webpackMerge = require('webpack-merge');
var baseConfig = require('./webpack.base.config.js');
var webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const config =  webpackMerge(baseConfig, {
    plugins: [
        // 处理分包
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 压缩代码
        new UglifyJsPlugin({
            output: {
              comments: false 
            },
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
            }
          }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
            __DEV__: false
        })
    ]
});


module.exports = config;