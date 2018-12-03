"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setArraySessionStorage = setArraySessionStorage;
exports.getArraySessionStorage = getArraySessionStorage;

/**
 * 存储session数组字段
 * eg: 要存储的字段：("student","[Tom, Ansh, Felix]")
 *
 * @param {String} key 要存储的session数组字段的名
 * @param {Array} value 要存储的session数组字段的值
 */
function setArraySessionStorage(key, value) {
  var str = "";
  sessionStorage.removeItem(key);

  for (var i = 0; i < value.length; i++) {
    str += value[i] + "&";
  }

  str = str.slice(0, str.length - 1);
  sessionStorage.setItem(key, str);
}
/**
 * 获取session数组字段
 *
 * @param {String} key 要获取的session字段的名
 * @returns {Array}
 */


function getArraySessionStorage(key) {
  var str = sessionStorage.getItem(key);
  return str.split("&");
}