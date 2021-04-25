const path = require("path");
const webpack = require("webpack");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env === "production";
  return {
    entry: "./src/app.js",
    // entry: './src/playground/hoc.js',
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: MiniCssExtractPlugin.loader({
            use: ["css-loader", "sass-loader"],
          }),
        },
      ],
    },
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: "styles.css",
    //   }),
    // ],
    devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};
