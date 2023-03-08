const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'jqi4x6',
  viewportWidth:1920,
  viewportHeight:1080,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
    },
    specPattern:'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://www.webdriveruniversity.com/',
    env: {
      environment:'test',
      baseUrl: 'http://www.webdriveruniversity.com/',
      freeletterUrl:'http://www.webdriveruniversity.com/',
      username:'agent',
      password:'ottonova',
      whitelabelUsername:'white-label',
      whitelabelPassword:'white-label-password',
      dentalbrokerPassword:'125556hfhjfjf34545'
    },
    testIsolation:true,
    hideCredentials:true,
    experimentalRunAllSpecs:true,
    excludeSpecPattern:'**/privatedoc/*',
    downloadsFolder:'cypress/downloads',
    responseTimeout:40000,
    pageLoadTimeout:160000,
    chromeWebSecurity:true,
    video:false,
    videoUploadOnPasses:false,
    videoCompression:50,
    defaultCommandTimeout:250000,
    trashAssetsBeforeRuns:true,
  },
})
