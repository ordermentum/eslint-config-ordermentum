module.exports = {
  plugins: ['@emotion', 'react', 'jsx-a11y', 'promise', 'unicorn'],
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:promise/recommended',
  ],
  rules: {
    'jsx-a11y/label-has-for': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/tabindex-no-positive': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'import/prefer-default-export': 'off',
    '@emotion/jsx-import': 'error',
    '@emotion/no-vanilla': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
    'react/default-props-match-prop-types': 'warn',
    'react/forbid-prop-type': 'off',
    'react/forbid-prop-types': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-duplicate-props': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'warn',
    'react/no-string-refs': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/require-default-props': [
      'warn',
      { ignoreFunctionalComponents: true },
    ],
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 0,
    'react/style-prop-object': 'warn',
    'react/display-name': 'warn',
    'react/prop-types': 'warn',
    'import/no-extraneous-dependencies': 'error',

    "unicorn/no-array-reduce": "error",
    "unicorn/no-array-for-each": "error",
    // from ts-conversion
    'import/no-duplicates': 'warn',
    'jsx-a11y/label-has-for': 'off',
    camelcase: [
      'error',
      {
        allow: ['^UNSAFE_'],
        properties: 'never',
      },
    ],
  },
  // allows us to resolve the path to these files
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    // allows us to not use file extensions for these
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    react: { version: 'detect' },
  },
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
      },
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'import/no-unresolved': 'off',
        'import/no-undef': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'import/prefer-default-export': 'off',
        'import/order': 'warn',
      },
      settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    {
      // doesn"t bug us about chai assersions such as
      // expect(Foo).to.be.true;
      files: ['*_test.*', 'test/**/*.*', '*.test.*', '*.spec.*'],
      rules: {
        'no-unused-expressions': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.story.*'],
      rules: {
        'no-unused-vars': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
