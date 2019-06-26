const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'js/build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
        },
    ]
  }
};