const path = require("path");
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
    entry: "./entry.jsx",
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    plugins: [
        new StaticSiteGeneratorPlugin({
            paths: [
            '/hello/',
            '/world/'
            ],
            locals: {
            // Properties here are merged into `locals`
            // passed to the exported render function
            greet: 'Hello'
            }
        })
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,

                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/env', '@babel/react']
                  }
                }
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}