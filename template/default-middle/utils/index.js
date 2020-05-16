/** 工具类 */

// 首字母大小
export function titleCase (str) {
  return str.replace(/( |^)[a-z]/g, L => L.toUpperCase())
}

// 下划转驼峰
export function camelCase (str) {
  return str.replace(/-[a-z]/g, str1 => str1.substr(-1).toUpperCase())
}

// 数字判断
export function isNumberStr (str) {
  return /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(str)
}
