/**
 * For the given config and name of that config, construct a test to do a snapshot on
 * @param {String} configName The name of the file for the config
 * @param {Object} config the config object to be validated
 */
module.exports = (configName, config) => {
  describe(`${configName}`, () => {
    test('config matches default config snapshot', () => {
      expect(config).toMatchSnapshot();
    });
  });
};
