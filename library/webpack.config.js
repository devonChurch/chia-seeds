const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/main",

  mode: "development",

  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".vue", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),

    new ModuleFederationPlugin({
        name: 'fileLibrary',
        library: { type: 'var', name: 'fileLibrary' },
        filename: 'remoteEntry.js',
        remotes: {
          shell: 'shell',
        },
        exposes: {
            './Explorer': './src/main'
        },
        shared: []
      }),
  ],
};
