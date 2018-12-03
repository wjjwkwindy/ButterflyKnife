"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUrlParam = addUrlParam;

/**
 * 拼接网址和查询字符串
 *eg: 输入("www.example.com","a","111") 输出("www.example.com?a=111")
 *
 * @param {String} url 初始网址
 * @param {String} name 查询字符串名
 * @param {String} value 查询字符串参数
 * @returns {String}
 */
function addUrlParam(url, name, value) {
  for (var i = 0; i < name.length; i++) {
    url += url.indexOf("?") == -1 ? "?" : "&";
    url += encodeURIComponent(name[i]) + "=" + encodeURIComponent(value[i]);
  }

  return url;
}