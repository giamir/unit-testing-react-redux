const webpackConfig = require('./webpack.test.config');

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    browsers: process.env.TRAVIS
      ? ['ChromeTravis']
      : ['Chrome'],

    files: [
      {
        pattern: './test-bundler.specs.js',
        watched: false,
        served: true,
        included: true
      }
    ],

    preprocessors: {
      './test-bundler.specs.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    reporters: ['mocha'],

    mochaReporter: {
      output: 'autowatch'
    },

    colors: true,
    logLevel: config.LOG_ERROR
  });
};
