export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      indent: ["error", 2],      // enforce 2 spaces
      semi: ["error", "always"], // require semicolons
      quotes: ["error", "double"]
    }
  }
];
