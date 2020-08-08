const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: ["./src/main.editor", "./src/main.preview"],

  mode: "development",

  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3005/",
  },

  resolve: {
    extensions: [".vue", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),

    new ModuleFederationPlugin({
        name: 'content',
        library: { type: 'var', name: 'content' },
        filename: 'remoteEntry.js',
        remotes: {
          shell: 'shell',
          explorer: 'explorer',
        },
        exposes: {
            './Editor': './src/main.editor',
            './Preview': './src/main.preview'
        },
        shared: ["single-spa", "single-spa-vue", "vue", "vue-router", "normalize.css"]
      }),
  ],
};
