const randomNum = require('./randomNum');
/**
 * 生成随机IP地址
 */
function randomIP() {
  return randomNum(1, 255) + '.' + randomNum(0, 255) + '.' + randomNum(0, 255) + '.' + randomNum(1, 255);
}

/**
 * test
 */

function test() {
  setInterval(() => {
    console.log(randomIP());
  }, 10);
}

// test();

module.exports = randomIP;
