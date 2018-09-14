module.exports = {
  verbose: false,
  collectCoverageFrom: [
    '!**/.vscode/**',
    '!**/build/**',
    '!**/coverage/**',
    '!**/devops/**',
    '!**/jest.config.js',
    '!**/node_modules/**',
    '!**/test/**',
    '!.eslintrc.js',
    '**/*.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupTestFrameworkScriptFile: './test/setup.js',
  testMatch: ['**/test/**/*.test.js?(x)'],
};
