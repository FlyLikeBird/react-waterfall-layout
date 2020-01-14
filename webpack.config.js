const path = require('path')
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
	
    entry: {
        app:[
            'webpack-hot-middleware/client',
            'react-hot-loader/patch',
            //'babel-polyfill',
            path.resolve(__dirname,'./index.js')
        ], 
        //app2:['webpack-hot-middleware/client',path.resolve(__dirname,'./app2.js')],
        vendor:['react','react-dom','react-router-dom']
    },
    mode:'development',
    devtool:'source-map',
	output: {
        publicPath:'/',
		filename: '[name].[hash].js',
		path: path.join(__dirname, '/dist')
	},
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlPlugin({
            template:path.resolve(__dirname,'./index.html')
        })
    ],
    /*
    optimization:{
        runtimeChunk:{
            name:'manifest'
        }
    },
    */
    module:{
        rules:[

            {
                test:/\.js?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                    /*                    
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react'],
                        plugins:[
                            ['import',{
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css"
                            }]
                        ]
                    }
                    */
                    
                }
                    
            },  
            /*  
            {  //对目录里面非node_modules，src/common目录下面的css文件开启模块化，页面里引用时候以模块方式引用
                test: /\.css$/,                
                exclude:[
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/css')
                ],                
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{
                            module:true,
                            localIdentName:'[name]-[local]-[hash:base64:6]'
                        }
                    }
                ]
                
            },
            */
            
            {   //对node_modules,src/common目录下面的css文件以全局方式引用，应用到页面
                test:/\.css$/,
                include:[
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src')
                ],
                use:[
                    //MiniCssExtractPlugin.loader,
                    'style-loader','css-loader'
                ]
            },
            
            {

                test:/\.(png|svg|jpg|gif|ico|woff|eot|ttf)$/,               
                use: [{
                    loader: 'file-loader',
                    options: {

                        limit:8000000,   //小于50K的 都打包
                        outputPath:'images/',
                        name:'[hash:8].[name].[ext]',
                           
                    }
                }]
                          
            }

        ]
        
    },
	
}

