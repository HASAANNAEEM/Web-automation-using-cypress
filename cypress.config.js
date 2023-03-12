const { defineConfig } = require("cypress");
const fs = require('fs')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
    require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
    require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {
    node: { fs: 'empty' },
    async setupNodeEvents(on, config) {
      on('task', {
        countFiles(folderName) {
          return new Promise((resolve, reject) => {
            fs.readdir(folderName, (err, files) => {
              if (err) {
                return reject(err)
              }

              resolve(files.length)
            })
          })
        },
      })


      on('task', {
        getFiles(folderName) {
          return new Promise((resolve, reject) => {
            fs.readdir(folderName, (err, files) => {
              if (err) {
                return reject(err)
              }

              resolve(files)
            })
          })
        },
      })

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],

      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;

    },
    defaultCommandTimeout: 18000,
    pageLoadTimeout: 100000,
    watchForFileChanges: true,
    specPattern: ["cypress/e2e/**/*.feature","cypress/e2e/*.js"],
    base_url: 'https://naresh-postgres:4443/ftkclogin.html',
    chromeWebSecurity: false,
    requestTimeout : 30000,
    numTestsKeptInMemory: 0,
    responseTimeout : 50000,
  },
  env: {
    base_url: 'https://naresh-postgres:4443/ftkclogin.html'
  },
});