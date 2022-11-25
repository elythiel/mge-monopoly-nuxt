module.exports = {
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  }
};
