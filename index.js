module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    node: true
  },
  extends: [
    "airbnb-base",
    "airbnb-base/rules/strict",
    "prettier"
  ],
  plugins: [
    "prettier",
    "@typescript-eslint",
    "unicorn"
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "import/no-cycle": "off",
    "import/no-useless-path-segments": "warn",
    "import/order": "warn",
    "lines-between-class-members": "warn",
    "no-else-return": "warn",
    "class-methods-use-this": "off",
    "func-names": "off",
    "no-bitwise": "warn",
    "no-fallthrough": "warn",
    "no-multi-assign": "warn",
    "no-plusplus": "warn",
    "no-restricted-syntax": "off",
    "no-return-await": "warn",
    "no-template-curly-in-string": "warn",
    "no-undef": "error",
    "no-useless-escape": "warn",
    "no-useless-return": "warn",
    "space-before-function-paren": "off",
    "no-await-in-loop": "off",
    "prefer-destructuring": "error",
    "prefer-promise-reject-errors": "warn",
    "no-buffer-constructor": "warn",
    "no-restricted-globals": "warn",
    "no-useless-constructor": "off",
    "import/extensions": ["error", {
      "json": "always",
      "ts": "never"
    }],
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "test/**/*.{js,jsx,ts,tsx}",
          "**/**/*.test.{js,jsx,ts,tsx}",
          "**/**/*_test.{js,jsx,ts,tsx}",
          "**/**/*.spec.{js,jsx,ts,tsx}",
          "**/**/*.story.{js,jsx,ts,tsx}"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5",
        "arrowParens": "avoid",
      }
    ],
    "unicorn/no-abusive-eslint-disable": "error",
    "prefer-object-spread": "warn",
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    "no-redeclare": "off",
    '@typescript-eslint/no-redeclare': ['error'],
    "max-classes-per-file": ["error", 5],
    "no-useless-catch": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "unicorn/no-abusive-eslint-disable": "off",
    "no-continue": "off"
  },
  "overrides": [
    {
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "sourceType": "module"
      },
      "files": [
        "**/*.ts",
        "**/*.tsx"
      ],
      "rules": {
        "no-undef": "warn",
        "no-unused-vars": "off",
        "import/no-unresolved": "error",
        "import/named": "off"
      }
    }
  ]
};
