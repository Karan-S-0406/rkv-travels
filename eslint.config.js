import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": "off", // Disable the no-unused-vars rule
      "no-prototype-builtins": "off", // Disable the no-prototype-builtins rule
      "no-useless-escape": "off", // Disable the no-useless-escape rule
      'no-empty': 'off', // Disable the no-empty rule
      'no-unsafe-optional-chaining': 'off', // Disable the no-unsafe-optional-chaining rule
      'no-useless-catch': 'off', // Disable the no-useless-catch rule
      'no-dupe-else-if': 'off', // Disable the no-dupe-else-if rule
      'no-unsafe-negation': 'off',
      'no-constant-condition': 'off', // Disable the no-constant-condition rule
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
