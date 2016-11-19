const webpackConfig = require('./webpack.test.config');

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    browsers: process.env.TRAVIS
      ? ['ChromeTravis']
      : ['Chrome'],

    files: [
      {
        pattern: './test-bundler.js',
        watched: false,
        served: true,
        included: true
      }
    ],

    preprocessors: {
      './test-bundler.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    reporters: ['mocha'],

    colors: true,
    logLevel: config.LOG_INFO
  });
};
