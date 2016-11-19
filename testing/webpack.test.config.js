const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'null-loader' },

      { test: /\.jsx?$/, loader: 'babel', exclude: [/node_modules/] },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i, loader: 'null-loader' }
    ]
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
  },

  externals: {
    jsdom: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window'
  }
};
