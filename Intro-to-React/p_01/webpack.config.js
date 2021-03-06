const webpack = require('webpack')
const path = require('path')

let BUILD_DIR = path.resolve(__dirname, 'src/client/public')
let APP_DIR = path.resolve(__dirname, 'src/client/app')

let config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',
            }
        ]
    }
}

module.exports = config