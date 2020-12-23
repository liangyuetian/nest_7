module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: true,
    // ecmaFeature: { //想使用额外的语言特性
    //   "jsx": true, //启用jsx
    //   "globalReturn": true, //在全局作用域下使用return语句
    //   "impliedStrict": true, //启用全局strict mode
    //   "experimentalObjectRestSpread": false
    //   //启用实验性的object rest/spread properties支持
    //   //(不建议开启)
    // }
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: false,
          Boolean: false,
          Number: false,
          Symbol: false,
          '{}': false,
          Object: false,
          object: false,
          Function: false,
        },
        extendDefaults: true,
      },
    ],
  },
};
