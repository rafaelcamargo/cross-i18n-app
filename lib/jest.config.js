module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['html', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/']
};
