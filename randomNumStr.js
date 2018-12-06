/**
 * 生成任意长度随机数字字符串
 * len: 字符串长度
 */
function randomNumStr(len = 8) {
  let str = Math.random().toString().split('.')[1];
  while (str.length < len) {
    str += Math.random().toString().split('.')[1];
  }
  return str.substring(0, len - 1);
}

/**
 * test
 */
function test() {
  setInterval(() => {
    console.log(randomNumStr());
  }, 500);
}

// test();

module.exports = randomNumStr;
