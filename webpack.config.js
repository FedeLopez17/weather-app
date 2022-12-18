const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/javascript-modules/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]'
            }
        ]
    }
};
