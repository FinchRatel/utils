/**
 * 休眠任意毫秒数
 */
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

/**
 * test
 */
function test() {
  sleep(5000).then(() => {
    console.log('hello');
  });
}

// test();

module.exports = sleep;
