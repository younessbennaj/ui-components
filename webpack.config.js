const path = require("path");

module.exports = {
    mode: "development",
    devServer: {
        contentBase: './dist',
    },
    devtool: 'inline-source-map',
    entry: "./src/index.js",
    output: {
        //need an absolute path
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }

        ]
    }
}