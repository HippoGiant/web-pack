const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './main.jsx',
    output: {
        filename: 'bundle.[chunkhash:8].js',
        // __dirname 取得程式執行位置的實際路徑
        // C:\Users\iii\Desktop\Node.js\web-pack
        path: path.resolve(__dirname, 'dist')
        // C:\Users\iii\Desktop\Node.js\web-pack\dist
    },
    plugins: [new HtmlWebpackPlugin({
        template: './template.html',
        // filename:'./site.html',
        abc: 'webpack demo',
        inject: 'body'
    }),
    new MiniCssExtractPlugin({
        filename: 'main.[hash].css'
    })
    ],
    devServer: {
        port: 3000,
        open: true
    },
    module: {
        rules: [
            {
                // test: /\.css$/i,
                // // use: ["style-loader",
                // //     "css-loader"]
                // use: [MiniCssExtractPlugin.loader,
                //     "css-loader"]
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader", "sass-loader"]
            },
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/i,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.tsx', '.ts', '.js'],
    }
}