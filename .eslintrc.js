module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  // 属性值： 0 = off, 1 = warn, 2 = error
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 不去检测 function 后面是否有空格
    'space-before-function-paren': 0,
    // 不去检测代码后面是否有分号
    semi: 0,
    'no-unused-vars': 0,
    indent: 0,
    'no-irregular-whitespace': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
