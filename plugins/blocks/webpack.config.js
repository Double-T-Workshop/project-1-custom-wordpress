const path = require("path");

module.exports = {
  entry: {
    "index.js": "./src/index.js", // Include all block entry points
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Regular expression to find CSS files
        use: ["style-loader", "css-loader"], // Use these loaders for CSS
      },
    ],
  },
  resolve: {
    alias: {
      "@wordpress/block-editor": path.resolve(
        __dirname,
        "node_modules/@wordpress/block-editor"
      ),
    },
  },
  externals: {
    "@wordpress/blocks": ["wp", "blocks"],
    "@wordpress/block-editor": ["wp", "blockEditor"],
    "@wordpress/components": ["wp", "components"],
    "@wordpress/element": ["wp", "element"],
    "@wordpress/i18n": ["wp", "i18n"],
  },
};
