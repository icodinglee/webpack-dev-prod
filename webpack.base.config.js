const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const STATIC_PATH ='static';

// css 代码拆分
const extractStyle = new ExtractTextPlugin({ filename: STATIC_PATH + "/css/[contenthash].style.css"});
const extractVendor = new ExtractTextPlugin({ filename: STATIC_PATH + "/css/[contenthash].vendor.css"});

module.exports = {
    entry: {
        main: ['babel-polyfill', './src/index.jsx'],   // 编写js
        // test: ['babel-polyfill', './src/main.jsx'],   // 编写js
        vendor: ['react', 'react-dom'] // 抽离main中公用node包
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: STATIC_PATH + '/js/[hash].[name].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: ['babel-loader']
            // 解析node包中 css
            }, { 
                test: /\.(css|scss)$/,
                include: path.join(__dirname, 'node_modules'),
                use: ['css-loader']
            // 解析编写的scss 
            }, { 
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                exclude: path.join(__dirname, 'src/static'),
                use: extractStyle.extract({
                    use: [ 
                            { loader: "css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]" },  //BEM
                            { loader: 'sass-loader'},
                            {
                                loader: 'postcss-loader', 
                                options: {
                                    sourceMap: true,
                                    config: {
                                        path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
                                    }
                                }
                            }
                    ],
                    fallback: "style-loader" // 开发环境使用
                })
            // 解析全局引入的scss, 单独打包            
            }, { 
                test: /\.scss$/,
                include: path.join(__dirname, 'src/static'),
                use: extractVendor.extract({
                    use: [ 
                        { loader: "css-loader" },  // 不使用BEM
                        { loader: 'sass-loader'},
                        {
                            loader: 'postcss-loader', 
                            options: {
                                sourceMap: true,
                                config: {
                                    path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
                                }
                            }
                        }
                    ]
                })
            // 解析字体文件            
            }, { 
                test: /\.(woff|woff2|ttf|svg|eot|otf)(\?t=[\s\S]+)?$/, 
                use: [ 'url-loader?limit=1000&name=[md5:hash:base64:10].[ext]&outputPath=static/fonts/']
            // 解析图片
            }, { 
                test: /\.(jpg|png|gif|swf)$/,
                use: [ 'file-loader?limit=1000&name=[md5:hash:base64:10].[ext]&outputPath=static/images/' ]
            }
        ]
    },
    plugins: [
        extractVendor,
        extractStyle,
        new CopyWebpackPlugin([{ // 拷贝外部插件
            context: './src',
            from: 'plugins',
            to: STATIC_PATH + '/plugins'
        }]),
        // new webpack.optimize.CommonsChunkPlugin({ // 合并chunks数组中共用模块
        //     name: "common",
        //     chunks: ['main', 'test']
        // }),
        new webpack.optimize.CommonsChunkPlugin({ // 合并常用js模块,
            name: "vendor",
            minChunks: Infinity
        }),
        // 主页面入口index.html
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}