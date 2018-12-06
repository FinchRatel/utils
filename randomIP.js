const randomNumber = require('./randomNumber');
/**
 * 生成随机IP地址
 */
function randomIP() {
  return randomNumber(1, 255) + '.' + randomNumber(0, 255) + '.' + randomNumber(0, 255) + '.' + randomNumber(1, 255);
}

/**
 * test
 */

function test() {
  setInterval(() => {
    console.log(randomIP());
  }, 1000);
}

// test();

module.exports = randomIP;
