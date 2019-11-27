module.exports = function(config) {
  config.set({
      basePath: './',
      frameworks: ['jasmine'],
      files: [
          {pattern: './**/*-spec.js'},
      ],
      exclude: [],
      preprocessors: {
        'src/**/*.js': ['webpack'],
      },
      webpack: {
          mode: 'development',
      },
      webpackMiddleware: {
          noInfo: true,
          stats: {
              chunks: false,
          },
      },
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromeHeadless'],
      singleRun: false,
      customLaunchers: {
          ChromeHeadless: {
              base: 'Chrome',
              flags: [
                  '--no-sandbox',
                  '--headless',
                  '--disable-gpu',
                  '--remote-debugging-port=9222',
              ],
          },
      },
  });
};