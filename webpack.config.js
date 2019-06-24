const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const debug = process.env.NODE_ENV !== 'production'

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

const plugins = [HtmlWebpackPluginConfig]

module.exports = {
    entry: ['./src/index.ts'],
    target: 'web',
    watch: debug,
    devtool: debug ? 'source-map' : false,
    mode: debug ? 'development' : 'production',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.ts', '.js', '.json']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{ loader: 'ts-loader' }]
            }
        ]
    },
    devServer: {
        port: 8008,
        inline: true,
        host: '0.0.0.0'
    },
    plugins
}
