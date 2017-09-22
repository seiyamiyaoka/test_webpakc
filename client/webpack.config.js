module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    path: '/Users/miyaokakiyoshinari/workspace/myapp/app/assets/javascripts/webpack',
    filename: '[name].js',
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015"],
        }
      },
    ]
  },
}
