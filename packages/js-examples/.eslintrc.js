module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": "eslint:recommended",
  "globals": {
    "ImageDecoder": "readonly",
  },
  "ignorePatterns": ["**/*.d.ts", "dist/*"],
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
