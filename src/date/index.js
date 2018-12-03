/**
 * 获取某个月份总天数
 * eg: 输出 "31"
 *
 * @param {Date} date 日期，默认当前日期
 * @returns {String}
 */
function getMonthDays(date = new Date()) {
  var d = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return d.getDate();
}

/**
 * 获取前一天日期
 * eg: 输出 "2018-12-02"
 *
 * @param {String} separator 分隔符
 * @param {Date} date 日期，默认为日期
 * @returns {String}
 */
function getSeparatorDate(separator, date = new Date()) {
  let separateDate = "";
  separateDate += date.getFullYear() + separator;
  separateDate += date.getMonth() + 1 + separator;
  if (date.getDate() < 10) {
    separateDate += "0" + date.getDate();
  } else {
    separateDate += date.getDate();
  }
  return separateDate;
}

export { getMonthDays, getSeparatorDate };
