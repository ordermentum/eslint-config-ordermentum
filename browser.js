module.exports = {
    plugins: ["emotion", "react", "jsx-a11y"],
    env: {
        browser: true,
        jest: true,
    },
    extends: ["./index.js"],
    rules: {
        "jsx-a11y/label-has-for": "warn",
        "jsx-a11y/no-autofocus": "warn",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/no-static-element-interactions": "warn",
        "jsx-a11y/tabindex-no-positive": "warn",
        "jsx-a11y/click-events-have-key-events": "warn",
        "jsx-a11y/anchor-is-valid": "warn",
        "import/prefer-default-export": "off",
        "emotion/jsx-import": "error",
        "emotion/no-vanilla": "error",
        "emotion/import-from-emotion": "error",
        "emotion/styled-import": "error",
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
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: [
                    "packages/**/test/**/*_test.{js,jsx,ts,tsx}",
                    "test/**/*.{js,jsx,ts,tsx}",
                    "**/**/*.test.{js,jsx,ts,tsx}",
                    "**/**/*_test.{js,jsx,ts,tsx}",
                    "**/**/*.spec.{js,jsx,ts,tsx}",
                    "**/**/*.story.{js,jsx,ts,tsx}",
                    ".storybook/**",
                ],
            },
        ],

        // from ts-conversion
        "import/no-duplicates": "warn",

        "jsx-a11y/label-has-for": "off",
    },
    // allows us to resolve the path to these files
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
        // allows us to not use file extensions for these
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    },
    overrides: [
        {
            parser: "@typescript-eslint/parser",
            parserOptions: {
                sourceType: "module",
            },
            files: ["**/*.ts", "**/*.tsx"],
            rules: {
                "import/no-unresolved": "off",
                "import/no-undef": "off",
                "no-unused-vars": "off",
                "no-undef": "off",
                "import/prefer-default-export": "off",
                "import/order": "warn",
            },
            settings: {
                "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
            }
        },
        {
            // doesn"t bug us about chai assersions such as
            // expect(Foo).to.be.true;
            files: ["*_test.*"],
            rules: {
                "no-unused-expressions": "off",
            },
        },
        {
            files: ["*.story.*"],
            rules: {
                "no-unused-vars": "off",
            },
        },
    ],
};