module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint',"hexagonal-architecture"],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ["src/*/*.ts"],
      rules: {
        "hexagonal-architecture/enforce": ["error"],
      },
    }
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: [
    '**.js'
  ],
  rules: {
    "@typescript-eslint/quotes": ["error", "double"],
    "no-console": "warn"
  }
}