// module.exports = {
//     preset: "ts-jest", // Use ts-jest to handle TypeScript
//     testEnvironment: "jsdom", // Required for testing React components
//     moduleNameMapper: {
//       "\\.(css|scss|sass)$": "identity-obj-proxy", // Mock styles
//     },
//     transform: {
//       "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", // Ensure Jest compiles TS/JSX files
//     },
//   };
  
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
};
