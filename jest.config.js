module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: '<rootDir>/testing/setup.js',
  reporters: ['jest-spec-reporter'],
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
};
