const commitlintConfig = require('./lib/commitlint.config');
const eslintConfigApp = require('./lib/eslint-config-apps');
const eslintConfigTools = require('./lib/eslint-config-tools');
const huskyConfig = require('./lib/husky.config');
const lintStagedConfig = require('./lib/lint-staged.config');
const prettierConfig = require('./lib/prettier.config');
const semanticReleaseConfig = require('./lib/semantic-release.config');

module.exports = {
  commitlint: commitlintConfig,
  'eslint-config-apps': eslintConfigApp,
  'eslint-config-tools': eslintConfigTools,
  husky: huskyConfig,
  'lint-staged': lintStagedConfig,
  prettier: prettierConfig,
  'semantic-release': semanticReleaseConfig,
};
