const commitlintConfig = require('../../lib/commitlint.config');
const validateConfig = require('./__helpers__/configSnapshot');

// Use the helper suite to generate a test suite to run
validateConfig('commitlint-config', commitlintConfig);
