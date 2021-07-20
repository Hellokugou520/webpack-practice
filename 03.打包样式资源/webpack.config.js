const { resolve } = require('path')

module.exports = {
    // 入口起点
    entry: './src/index.js',
    // 输出位置
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'bulid')
    },
    // loader的配置
    module: {
        rules: [
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理
                use: [ //use数组中的执行顺序是从后往前
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins: [],
    // 模式
    mode: 'development'
}