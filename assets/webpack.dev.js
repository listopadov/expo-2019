const merge = require('webpack-merge');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',

  watch: true,

  watchOptions: {
    aggregateTimeout: 300,
  },

  plugins: [
    new ProgressBarPlugin({
      format: `  build [:bar] ${chalk.red.bold(':percent')} (:elapsed seconds)`,
      clear: false,
    }),
  ],
});
