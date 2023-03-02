const path = require('path');

module.exports = {
  entry: ['./src/index.js',
          './src/index2.js',
          './src/index3.js',
          './src/eventListeners.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
     {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }
    ],
  }
};