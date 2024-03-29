'use strict';
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: './src/client/app/AppClient.ts',
  mode: 'production',
  plugins: [new MiniCssExtractPlugin({
    filename: "[name].css"
  })],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: "tsconfig.json"
        }
      },
      {
        test: /\.css|s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin()
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
  },
  output: {
    filename: '[name].js',
    publicPath: '/dist/',
    libraryTarget: 'umd'
  }
};