// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// promisified fs module
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('.', '\cypress\\config', `cypress.${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  const options = {
    printLogs: 'always',
    outputRoot: config.projectRoot + '/logs/',
    outputTarget: {
      'log.txt': 'txt',
    }
  };
  require('cypress-terminal-report/src/installLogsPrinter')(on, options);

  // accept a configFile value or use development by default
  const file = config.env.configFile || 'qa'
  return getConfigurationByFile(file)
}
