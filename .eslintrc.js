module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  parserOptions: {
    // ecmaVersion: 6,
    // sourceType: 'module',
    // ecmaFeatures: {
    //   modules: true
    // }
    extends: 'standard',
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ],
  rules: {
    semi: [
      'error',
      'always'
    ],
    'no-undef': ['off'],
    'no-console': ['off'],
    'global-require': 0,
    'prefer-regex-literals': ['off'],
    'vue/require-default-prop': ['off'],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        ['template', 'render'],
        'renderError',
        ['components', 'directives', 'filters'],
        ['props', 'propsData'],
        'data',
        'name',
        'head',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        'emits',
        'setup',
        'asyncData',
        'fetch',
        'LIFECYCLE_HOOKS',
        'methods',
        'computed',
        'watch',
        'watchQuery'
      ]
    }]
  }
};
