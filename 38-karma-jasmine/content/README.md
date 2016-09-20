# Install Dependencies

```
npm install
```

This installs Karma, Jasmine and the relevant plugins that we need.

then run

```
karma start
```

The example test will pass!

# Karma Config

```js
module.exports = function (config) {
    config.set({
        basePath: '.', // this is the path from where we run our tests
        frameworks: ['jasmine'], // Karma is just a test runner. We need Jasmine to be able to code our tests
        files: [
            'tests/*.spec.js' // where to look for our source code + test files
        ],
        exclude: [], // any files that we don't want Karma to look at
        plugins: [
            require("karma-chrome-launcher"), // plugin so Karma can run our tests in Chrome
            require("karma-jasmine"), // plugin so Karma can load Jasmine
            require("karma-spec-reporter") // plugin so Karma can display results nicely in the console
        ],
        preprocessors: {}, // preprocess our files, for ES6 etc. not needed for us
        reporters: ['spec'], // what reporter to use - spec as we required in above
        port: 9876, // just the port to run Karma on
        colors: true, // whether or not to use colors in the command line
        logLevel: config.LOG_INFO, // log level
        autoWatch: false, // if set to true, karma will constantly watch our files and rerun our tests on changes
        browsers: ['Chrome'], // what browsers to test in
        singleRun: true, // single run, so we can test our code and that is it
        concurrency: Infinity
    })
}
```