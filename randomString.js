const  randomNumber = require('./randomNumber');

/**
 * 生成任意长度随机字符串
 * 包含数字、大写字母、小写字母
 * len: 字符串长度
 */
function randomString(len = 8) {
  let str = '';
  let list = '0123456789abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < len; i++) {
    let index = randomNumber(0, 35);
    let word = list[index];
    if (isNaN(word) && randomNumber() < 50) {
      word = word.toUpperCase();
    }
    str += word;
  }
  return str;
}

/**
 * test
 */
function randomStringTest() {
  setInterval(() => {
    console.log(randomString(16));
  }, 500);
}

// randomStringTest();

module.exports = randomString;
