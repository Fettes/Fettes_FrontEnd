// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "eslint-config-prettier",
  ],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
      {
        usePrettierrc: true,
      },
    ],
  },
};
