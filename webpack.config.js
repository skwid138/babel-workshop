var webpackConfig = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        // the babel loader will transpile es5 into es2015
        loader: "babel-loader",
        // this expression hits all files ending in .js
        test: /.js$/,
        // this wont transpile anything in node_modules
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = webpackConfig;
