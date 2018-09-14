module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "jest/globals": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "plugin:security/recommended"
  ],
  // "parser": "babel-eslint",
  "plugins": [
    "security",
    "jest"
  ],
  "rules": {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
  }
};