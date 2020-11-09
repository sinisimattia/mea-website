module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/require-default-prop': 'off',
  },
}
