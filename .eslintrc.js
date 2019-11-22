module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2019,
    sourceType: "module"
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react", "react-hooks"],
  rules: {
    "comma-dangle": "off",
    "curly": "warn",
    "brace-style": "warn",
    "eqeqeq": "warn",
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    "no-unused-vars": [2, { vars: "all", args: "after-used" }],
    "react/react-in-jsx-scope": [0],
    "no-unexpected-multiline": "warn",
    "no-console": "off",
    "no-redeclare": "warn",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: "Unexpected property on console object was called"
      }
    ]
  }
};