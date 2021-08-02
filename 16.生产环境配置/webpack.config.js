// 生产环境配置
const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 定义nodejs环境
process.env.NODE_ENV = 'development'

// 提取公共配置
const commonCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        // css兼容性处理
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => [require('postcss-preset-env')()]
        }
    }
]

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [...commonCssLoader]
            },
            {
                test: /\.less$/,
                use: [...commonCssLoader, 'less-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // 优先执行
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: 'usage',
                                corejs: { version: 3 },
                                targets: {
                                    chrome: '60',
                                    firefox: '50'
                                }
                            }
                        ]
                    ]
                }
            },
            {
                test: /.(jpg|png|gif)/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    outputpath: 'img'
                }
            },
            {
                test: /.html$/,
                loader: 'html-loader'
            },
            {
                exclude: /.(css|less|js|html|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    outputpath: 'media'
                }
            }
        ]
    },
    plugins: [
        // 提取CSS成单独文件
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        // 压缩CSS
        new OptimizeCssAssetsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    mode: 'development'
}