const path = require("path");

module.exports = {
    entry: "./entry.jsx",
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    plugins: [],
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