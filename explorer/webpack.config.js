const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: ["./src/main.file", "./src/main.media"],

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
        name: 'explorer',
        library: { type: 'var', name: 'explorer' },
        filename: 'remoteEntry.js',
        remotes: {
          shell: 'shell',
        },
        exposes: {
            './File': './src/main.file',
            './Media': './src/main.media'
        },
        shared: ["single-spa-vue", "vue"]
      }),
  ],
};
