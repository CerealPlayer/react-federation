const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/main.tsx",
  mode: "development",
  devServer: {
    port: 3001,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/main.tsx",
      },
      shared: {
        ...deps,
        react: { requiredVersion: deps.react, singleton: true, eager: true },
        "react-dom": {
          requiredVersion: deps["react-dom"],
          eager: true,
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};