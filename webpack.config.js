const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    javascript: './app/app.js',
    html: './app/index.html'
  },
  output: {
    path: './dist',
    filename: './app.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    inline: true,
    port: 3000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    root: './app',
    extensions: ['', '.js', '.jsx']
  }
};
