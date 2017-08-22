const path = require('path');

module.exports = {
  entry: {
    "extension": './src/index.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    library: "extension",
    libraryTarget: "this",
    libraryExport: "default"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react"]
          }
        }
      },

      {
        test: /\.useable.css$/,
        use: [
          'style-loader/useable',
          'css-loader'
        ]
      }
    ]
  },

  externals: {
    "react": "react",
    "react-bootstrap": "react-bootstrap"
  }
};
