const commitlintConfig = require('../../lib/commitlint-config');

describe('commitlint-config', () => {
  test('config matches default config snapshot', () => {
    expect(commitlintConfig).toMatchSnapshot();
  });
});
