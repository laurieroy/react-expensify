const path = require("path");
const webpack = require("webpack");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (mode) => {
  const isProduction = mode === "production";
  
  return {
    entry: "./src/app.js",
    // entry: './src/playground/hoc.js',
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            // {
              // loader: MiniCssExtractPlugin.loader,
              // options: {
              //   publicPath: path.join(__dirname, "public"),
              // },
            // },
            {
              loader:  "css-loader", 
              options: {
                sourceMap: true
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              },
            }
          ] 
        }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css"
      }),
     
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/"
    },
  };
};
