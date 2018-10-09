const lintStagedConfig = require('../../lib/lint-staged.config');
const validateConfig = require('./__helpers__/configSnapshot');

// Use the helper suite to generate a test suite to run
validateConfig('lint-staged', lintStagedConfig);
