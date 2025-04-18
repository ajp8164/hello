import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
  ...compat.extends(
    "@react-native",
    "plugin:@typescript-eslint/eslint-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ),
  prettier,
  {
    // Import that `ignores` is in its own config object by itself.
    // See https://eslint.org/docs/latest/use/configure/migration-guide#ignoring-files
    ignores: [
      'eslint.config.mjs',
      'prettier.config.js',
      'ios/*',
      'android/*',
      'assets/*',
      'metro.config.js'
    ],
  },
  {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        prettier,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",
    },

    settings: {
        "import/resolver": {
            "babel-module": {},
        },
    },

    rules: {
        "no-unused-vars": "off",

        "@typescript-eslint/no-unused-vars": ["error", {
            args: "after-used",
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
        }],

        "prettier/prettier": "warn",
        "prefer-const": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["off"],
        "@typescript-eslint/ban-ts-comment": "off",

        "react-hooks/exhaustive-deps": ["warn", {
            additionalHooks: "useNoInitialEffect",
        }],
    },
  }, {
    files: ["**/*.ts", "**/*.tsx"],

    rules: {
        "@typescript-eslint/no-shadow": ["off"],
        "no-shadow": "off",
        "no-undef": "off",
    },
}];