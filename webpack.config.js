'use strict';
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/client/app/AppClient.ts',
  mode: 'development',
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
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
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
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
  },
  output: {
    filename: 'app.js',
    publicPath: '/dist/',
    libraryTarget: 'umd'
  }
};