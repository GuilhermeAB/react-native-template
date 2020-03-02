module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@entity/(.*)$': '<rootDir>/src/components/core/inputs/entity/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue,ts}', '!**/node_modules/**', '!dist/**'],
//   transformIgnorePatterns: [
//     'node_modules/(?!(react-native|react-navigation|@react-navigation))',
//   ],
};
