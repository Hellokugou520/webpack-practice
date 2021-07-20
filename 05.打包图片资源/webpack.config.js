const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                // 多个loader用use
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // 处理图片资源
            {
                test: /\.(jpg|png|gif)$/,
                // 单个用loader
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    // 名字取哈希值前10位
                    name: '[hash:10].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}