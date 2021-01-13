module.exports = {
  parser: "babel-eslint",
  env: {
    node: true
  },
  extends: [
    "eslint-config-airbnb-base",
    "eslint-config-airbnb-base/rules/strict",
    "prettier"
  ],
  plugins: [
    "prettier",
    "@typescript-eslint",
    "unicorn",
    "react",
    "mocha"
  ],
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
    "prefer-destructuring": "warn",
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
          "test/**/*.{js,jsx}",
          "**/**/*.test.{js,jsx}",
          "**/**/*_test.{js,jsx}",
          "**/**/*.spec.{js,jsx}",
          "**/**/*.story.{js,jsx}"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ],
    "unicorn/no-abusive-eslint-disable": "error",
    "mocha/no-exclusive-tests": "error",
    "jsx-a11y/label-has-for": "warn",
    "jsx-a11y/no-autofocus": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/tabindex-no-positive": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "react/default-props-match-prop-types": "warn",
    "react/forbid-prop-type": "off",
    "react/forbid-prop-types": "warn",
    "react/jsx-filename-extension": "off",
    "react/jsx-no-duplicate-props": "warn",
    "react/no-array-index-key": "warn",
    "react/no-children-prop": "warn",
    "react/no-string-refs": "warn",
    "react/no-unescaped-entities": "warn",
    "react/no-unused-prop-types": "warn",
    "react/no-unused-state": "warn",
    "react/require-default-props": "warn",
    "react/self-closing-comp": "warn",
    "react/sort-comp": 0,
    "react/style-prop-object": "warn",
    "settings": {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        "typescript": {}
      }
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
  },
};
