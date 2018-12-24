# aghassi-js-configs

![](https://img.shields.io/npm/v/aghassi-js-configs.svg)
![](https://img.shields.io/github/release/Aghassi/aghassi-js-configs.svg)
[![CircleCI](https://img.shields.io/circleci/project/github/Aghassi/aghassi-js-configs.svg)](https://circleci.com/gh/Aghassi/aghassi-js-configs)

This repo is a collection of common NPM modules and configurations I like to use when I'm developing. By adding this as a dependency, I can verify I have all the tools I need as well as the configs. Each tool is added as a peer dependency to ensure that the consumer uses them (hopefully). The configs are just a simple `require` call.

## Installation

```bash
yarn add aghassi-js-configs --dev
yarn add eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react --dev
```

## Usage

All configs are listed in the `index.js` of this project. If you intend to use one, you can create the necessary RC file and then `require` the config followed by a `module.exports`. For example, for ESLint you would:

1. Create `eslintrc.js`
2. Add the following:

```javascript
const configs = require('aghassi-js-configs');
module.exports = configs['eslint-config-tools'];
```
