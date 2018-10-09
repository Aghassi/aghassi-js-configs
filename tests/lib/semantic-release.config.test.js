const semanticReleaseConfig = require('../../lib/semantic-release.config');
const validateConfig = require('./__helpers__/configSnapshot');

// Use the helper suite to generate a test suite to run
validateConfig('semantic-release', semanticReleaseConfig);
