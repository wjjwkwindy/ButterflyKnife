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
  for (let i = 0; i < name.length; i++) {
    url += url.indexOf("?") == -1 ? "?" : "&";
    url += encodeURIComponent(name[i]) + "=" + encodeURIComponent(value[i]);
  }
  return url;
}

/**
 * 初始化Ajax请求
 *
 * @param {*} url 请求的网址
 * @returns {Promise}
 */
function initialRequest(url) {
  return new Promise((resolve, reject) => {
    let client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
  });
}

export { addUrlParam, initialRequest };
