const  randomNum = require('./randomNum');

/**
 * 生成任意长度随机字符串
 * 包含数字、大写字母、小写字母
 * len: 字符串长度
 */
function randomStr(len = 8) {
  let str = '';
  let list = '0123456789abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < len; i++) {
    let index = randomNum(0, 35);
    let word = list[index];
    if (isNaN(word) && randomNum() < 50) {
      word = word.toUpperCase();
    }
    str += word;
  }
  return str;
}

/**
 * test
 */
function randomStrTest() {
  setInterval(() => {
    console.log(randomStr(16));
  }, 500);
}

randomStrTest();

module.exports = randomStr;
