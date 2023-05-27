module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": "eslint:recommended",
  "ignorePatterns": ["**/*.d.ts"],
  "rules": {
    // "semi": ["error", "always"],
    // "quotes": ["error", "double"],
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  }
}
