module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    commonjs: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'import/prefer-default-export': 0,
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 'off',
    'import/order': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'import/no-named-as-default': 0,
    'no-plusplus': 0,
  },
};
