const OFF = 0 // eslint-disable-line no-unused-vars
const WARN = 1 // eslint-disable-line no-unused-vars
const ERROR = 2 // eslint-disable-line no-unused-vars

module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  globals: {
    'jQuery': true,
  },
  rules: {
    'no-param-reassign': [ERROR, { props: false }],
    'quote-props': [ERROR, 'consistent-as-needed'],
    'semi': [ERROR, 'never'],
  },
}
