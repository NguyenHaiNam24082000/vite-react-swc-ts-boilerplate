module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:github/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:markdown/recommended',
    'plugin:css-modules/recommended',
    'plugin:react-redux/recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:@html-eslint/recommended',
    'plugin:jsonc/base',
    'optimize-regex/recommended',
    'plugin:no-unsanitized/DOM',
    'plugin:pii/recommended',
    'plugin:security/recommended',
    'plugin:xss/recommended',
    'perf-standard',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    '@html-eslint',
    'github',
    'sonarjs',
    'pii',
    'optimize-regex',
    'react-redux',
    'markdown',
    'unicorn',
    'css-modules',
    'deprecate',
    'deprecation',
    'disable',
    'html',
    'no-secrets',
    'no-unsanitized',
    'xss',
  ],
  rules: {
    'deprecate/rule-name': 2,
    'deprecation/deprecation': 'warn',
    'perf-standard/no-instanceof-guard': 2,
    'perf-standard/no-self-in-constructor': 2,
    'perf-standard/check-function-inline': 1,
    'max-len': [0],
    'no-secrets/no-secrets': 'error',
  },
  processor: 'disable/disable',
  overrides: [
    {
      files: ['tests/**/*.test.js'],
      settings: {
        'disable/plugins': ['react'],
      },
    },
  ],
  settings: {
    'html/html-extensions': ['.html', '.we'], // consider .html and .we files as HTML
    'html/xml-extensions': ['.html'], // consider .html files as XML
    'html/report-bad-indent': 'error',
    'html/javascript-tag-names': ['script', 'customscript'],
    'html/indent': '+2', // indentation is the <script> indentation plus two spaces.
    'html/javascript-mime-types': ['text/javascript', 'text/jsx', 'module'], // also use script tags with a "text/jsx" type attribute
  },
};
