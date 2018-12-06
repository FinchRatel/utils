const randomNum = require('./randomNum');
const randomNumStr = require('./randomNumStr');
/**
 * 生成随机电话号码
 */
function randomPhoneNumber() {
  let list = '3578';
  let index = randomNum(0, 3);
  return '1' + list[index] + randomNumStr(9);
}

/**
 * test
 */
function test() {
  setInterval(() => {
    console.log(randomPhoneNumber());
  }, 500);
}

// test();

module.exports = randomPhoneNumber;
