module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    // aria-expanded={open ? "true" : "false"} is valid but linter can't statically analyze expressions
    'jsx-a11y/aria-proptypes': 'off'
  }
};
