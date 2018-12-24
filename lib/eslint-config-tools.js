const eslintComments = require.resolve('eslint-plugin-eslint-comments/lib/configs/recommended');

module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb-base'),
    require.resolve('eslint-config-prettier'),
    eslintComments,
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
