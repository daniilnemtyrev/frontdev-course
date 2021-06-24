const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const miniCss = require('mini-css-extract-plugin')

module.exports = {
    entry: ['@babel/polyfill','./src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + './dist'
    },
    module: {
        rules: [
        {
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
                ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            loader: 'file-loader',
            options: {
                name: 'img/[name].[ext]',
            },
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(webm|mp4)$/,
            use: [
                {
                options: {
                    name: 'video/[name].[ext]'
                },
                loader: 'file-loader'
                }
            ]
        }
    ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
            
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js']
    }
}