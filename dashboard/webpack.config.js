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
    publicPath: "http://localhost:3004/",
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
        name: 'dashboard',
        library: { type: 'var', name: 'dashboard' },
        filename: 'remoteEntry.js',
        remotes: {
          shell: 'shell',
        },
        exposes: {
            './LandingPage': './src/main'
        },
        shared: ["single-spa-vue", "vue", "normalize.css"]
      }),
  ],
  experiments: {
    // mjs: true,
    // outputModule: true,
    // syncWebAssembly: true,
    topLevelAwait: true,
    // asset: true,
    // asyncWebAssembly: true,
  },
};
