/**
 * 生成任意范围内随机数
 * 支持正数，负数，整数，小数
 * 默认范围[0, 100]
 * min: 最小值
 * max: 最大值
 * len: 小数点后位数
 */
function randomNumber(min = 0, max = 100, len = 0) {
  return Number((min + (max - min) * Math.random()).toFixed(len));
}

/**
 * test
 */
function randomNumberTest() {
  setInterval(() => {
    console.log(randomNumber(0, 100, 2));
  }, 500);
}

randomNumberTest();

module.exports = randomNumber;
