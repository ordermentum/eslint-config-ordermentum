module.exports = {
    env: {
        "mocha": true,
    },
    plugins: ["mocha"],
    rules: {
        "mocha/no-exclusive-tests": "error",
        "import/no-extraneous-dependencies": 0,
        "import/extensions": 0,
        "import/first": 0,
        "import/prefer-default-export": 0,
        "no-unused-expressions": 0
    },
    globals: {
        "uniqueId": true
    }
};