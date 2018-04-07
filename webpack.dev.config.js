var webpackMerge = require('webpack-merge');
var baseConfig = require('./webpack.base.config.js');
var path = require('path');
var webpack = require('webpack');

module.exports =  webpackMerge(baseConfig, {
    devServer: {
        disableHostCheck: true,
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        noInfo: false,
        contentBase: path.join(__dirname, 'build'), 
        proxy: {     // 开发中使用代理解决跨域 
            // "/supervice": { 
            //   target: 'http://192.168.xx.xx:8091',
            //   secure: false,
            //   changeOrigin: true
            // }
        }
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

