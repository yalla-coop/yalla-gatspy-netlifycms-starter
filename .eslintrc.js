module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: [
      "airbnb",
      "prettier",
      "prettier/react",
      "plugin:prettier/recommended",
      "eslint-config-prettier"
    ],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".js", ".jsx"]
        }
      ],
      "prettier/prettier": [
        "error",
        {
          trailingComma: "all",
          singleQuote: true,
          printWidth: 100
        }
      ]
    }
  };