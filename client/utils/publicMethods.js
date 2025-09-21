// 字符串中间省略号
export function ellipsisMiddle(
  str,
  frontLen = 6,
  backLen = 5,
  ellipsis = "..."
) {
  if (!str || str.length <= frontLen + backLen) return str;
  return str.slice(0, frontLen) + ellipsis + str.slice(-backLen);
}

// 整数自动加两个小数点0，小数数字保留小数,不四舍五入,同时千分位加逗号
export function toFixedTrunc(num, decimalPlaces = 2, separator = ",") {
  if (typeof num !== "number") num = Number(num);
  if (isNaN(num)) return "";

  // 转为字符串以处理不四舍五入截断
  const [intPart, decPart = ""] = String(num).split(".");

  // 处理小数：截断不四舍五入
  const truncatedDec = (decPart + "00").slice(0, decimalPlaces);

  // 千分位格式化整数部分
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return `${formattedInt}.${truncatedDec}`;
}

// 补零
export function padZero(num, length = 2) {
  return String(num).padStart(length, "0");
}

/**
 * // 格式化时间戳
 * @param {*} timestamp // 时间戳，可以是秒数或毫秒数
 * @param {*} format // 格式化字符串，默认 "YYYY-MM-DD HH:mm:ss"
 * @returns // 格式化后的时间字符串
 */
export function formatTimestamp(timestamp, format = "YYYY-MM-DD HH:mm:ss") {
  const date = new Date(
    timestamp.toString().length === 10 ? timestamp * 1000 : timestamp
  );

  const map = {
    YYYY: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    DD: String(date.getDate()).padStart(2, "0"),
    HH: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => map[match]);
}
