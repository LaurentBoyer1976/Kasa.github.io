// filepath: c:\Users\l-boy\OneDrive\Bureau\Formation Dev Web OC\Projet 11\Kasa.github.io\jest.config.js
export default {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/__tests__/**/*.test.jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/__mocks__/mocksFiles.js',
  },
};