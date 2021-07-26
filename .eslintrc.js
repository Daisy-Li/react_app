module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      // 解决tsconfig下的path别名导致eslint插件无法解决的bug
      typescript: {
        directory: ".",
      },
    },
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:react-hooks/recommended", // Uses the recommended rules from @eslint-plugin-react-hooks
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn", // ts-no-check
    "@typescript-eslint/explicit-module-boundary-types": "off", // return
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.js", "*.ts"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "warn",
      },
    },
  ],
};
