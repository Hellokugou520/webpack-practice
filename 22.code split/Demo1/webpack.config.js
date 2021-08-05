// 生产环境配置
const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 定义nodejs环境
process.env.NODE_ENV = 'production'

module.exports = {
    // 单入口
    // entry: './src/js/index.js',
    // 多入口：有几个入口，就输出几个bundle
    entry: {
        main: './src/js/index.js',
        test: './src/js/test.js'
    },
    output: {
        // [name]：取文件名
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    mode: 'production'
}