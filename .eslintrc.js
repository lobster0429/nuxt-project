module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@nuxtjs/eslint-config', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-undef': 'off',
    'prettier/prettier': 'error'
  }
}
