// Karma configuration
// Generated on Wed Jul 29 2015 21:25:12 GMT+0200 (Central European Summer Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: ['karma-jsdom-launcher', 'karma-coverage', 'karma-jasmine', 'karma-junit-reporter', 'karma-spec-reporter', 'karma-htmlfile-reporter', "karma-typescript"],

      // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', "karma-typescript"],


    // list of files / patterns to load in the browser
    files: [
      'src/client/**/*.ts',
      'test/client/**/*.ts'
    ],

    // list of files to exclude
    exclude: [
      'node_modules',
      'src/server'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "**/*.ts": "karma-typescript" // *.tsx for React Jsx
    },

    karmaTypescriptConfig: {
      compilerOptions: {
          module: "umd",
          sourceMap: true,
          target: "ES5",
          moduleResolution: "node",
      },
      exclude: ["node_modules", "src/server"]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'html', "karma-typescript"],

    htmlReporter: {
        outputFile: 'test/results.html'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['jsdom'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
