// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // your main JS file
  output: {
    filename: "bundle.js", // output bundle name
    path: path.resolve(__dirname, "dist"), // output folder (make sure it exists)
  },
  mode: "development", // or 'production'
};
