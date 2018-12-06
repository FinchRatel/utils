const randomNumber = require('./randomNumber');
const randomNumberString = require('./randomNumberString');
/**
 * 生成随机电话号码
 */
function randomPhoneNumber() {
  let list = '3578';
  let index = randomNumber(0, 3);
  return '1' + list[index] + randomNumberString(9);
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
