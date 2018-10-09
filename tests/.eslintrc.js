const config = require('../lib/eslint-config-tools.js');

// Add the jest plugin when running tests
config.plugins.push('jest');

// Create the env to ignore jest globals
config.env = {};
config.env["jest/globals"] = true;

// Export the config
module.exports = config;