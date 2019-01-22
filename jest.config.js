module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|json)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFiles: [
    '<rootDir>/__mocks__/setupJest.js',
  ],
  automock: false,
};
