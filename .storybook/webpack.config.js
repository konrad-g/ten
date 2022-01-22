const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.css|s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  },);

  config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }))

  return config;
};
