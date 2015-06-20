// Karma configuration
// Generated on Sat Jan 24 2015 03:29:52 GMT+0530 (IST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        plugins: [
            'karma-coverage',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-ng-json2js-preprocessor'
        ],

        // list of files / patterns to load in the browser
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/toastr/toastr.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/app.js',
            'src/karmaTestFactory.js',
            'tests/karmaTestFactory.js'
            //'src/*.js',
            //'tests/*.js',
            //'src/karmatest/karma-test-module.js',
            //'src/karmatest/karma-test-service.js',
            //'tests/karmatest/karma-test-service.js'
            //'tests/mockdata/*.json'
        ],

        // list of files to exclude
        exclude: [],

        ngJson2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'tests/mockdata/',
            // prepend this to the
            prependPrefix: 'served/'

            /* or define a custom transform function
             cacheIdFromPath: function(filepath) {
             return cacheId;
             }
             */
        },

        // karma has its own autoWatch feature but Grunt watch can also do this
        //autoWatch : false,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['Chrome', 'PhantomJS', 'Safari', 'Firefox'],
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // karma-coverage reports
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/karmaTestFactory.js': ['coverage'],
            //'src/karmatest/*.js': ['coverage'],
            //'src/*.js': ['coverage'],
            'tests/mockdata/*.json': ['ng-json2js']
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'target/report/karma/'
        }
    });
};
