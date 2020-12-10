const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./base.js');
const CONF = require('./config/index.js');
const path = require('path');

const pathResolve = src => {
    return path.resolve(__dirname, src)
}
module.exports = merge(base, {
    mode: 'development',
    entry: [
        pathResolve('../src/start.js')
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
        chunkFilename: 'index.js'
    },
    devServer: {
        port: CONF.port,
        hot: true,
        compress: true,
        stats: "errors-only",
        contentBase: pathResolve('dist'),
        historyApiFallback: {
            rewrites: [
                {
                    from: new RegExp(`^/`),
                    to: `/index.html`
                },
            ]
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrors({
            compilationSuccessInfo: {
                messages: [
                    `编译成功 运行于http://localhost:${CONF.port}`
                ]
            }
        }),
        new webpack.DefinePlugin({
            "CONFIG": JSON.stringify(CONF.dev),
        }),
        new HtmlWebpackPlugin({
            title: CONF.description,
            template: pathResolve('./tepHtml/dev.html')
        })
    ]
})
