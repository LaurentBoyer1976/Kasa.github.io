export default {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/__tests__/**/*.test.jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transforme les fichiers JS et JSX
    '^.+\\.json$': 'jest-transform-stub', // Transforme les fichiers JSON
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy', // Mock pour les fichiers CSS/SCSS
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock pour les fichiers d'images
    '\\.json$': '<rootDir>/__mocks__/jsonMock.js', // Mock pour les fichiers JSON
  },
  globals: {
    'react-router': {
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      },
    },
  },
};