export default {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', 
  },
  testEnvironment: "jsdom",
};
