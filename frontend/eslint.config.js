import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config[]} */
export default [
  reactHooks.configs['recommended-latest'],
  {
    files: ['**/*.{js,jsx'],
    plugins: {'react-hooks': reactHooks},
  },
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      "no-empty": ["error", {"allowEmptyCatch": true}]
    }
  }
];
