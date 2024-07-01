module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
    "\\.[jt]sx?$": "babel-jest",
  },
  testMatch: [
    "**/tests/unit/**/*.spec.js",
  ]
};