const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index',

  mode: 'development',

  devtool: 'source-map',

  optimization: {
    minimize: false
  },

  output: {
    publicPath: 'http://localhost:3001/'
  },

  resolve: {
    extensions: ['.js']
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      library: { type: 'var', name: 'shell' },
      filename: 'remoteEntry.js',
      remotes: {
        fileLibrary: 'fileLibrary',
        navigation: 'navigation',
        dashboard: 'dashboard',
        content: 'content',
      },
      shared: []
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
};