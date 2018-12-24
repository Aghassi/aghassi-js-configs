const eslintTools = require('../../lib/eslint-config-tools');
const validateConfig = require('./__helpers__/configSnapshot');

// Use the helper suite to generate a test suite to run
validateConfig('eslint-config-tools', eslintTools);
