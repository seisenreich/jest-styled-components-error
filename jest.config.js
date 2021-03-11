module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleDirectories: ["<rootDir>", "node_modules"],
  moduleNameMapper: {
    // "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    // "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/style-mock.js",
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/file-mock.js"
  }
};
