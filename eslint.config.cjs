module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs"
    },
    rules: {
      "no-var": "error",
      "eqeqeq": "error",
      "no-unused-vars": "error",
      "curly": ["error", "all"]
    }
  }
];