let sleep = require('./sleep');
let randomNumber = require('./randomNumber');
let count = 0;

function async (i, num) {
  let time = randomNumber(1000, 2000);
  sleep(time).then(() => {
    count ++;
    console.log('第' + Math.ceil(count / num) + '轮--第' + i + '个--时间：' + time + 'ms');
    async(i, num);
  });
}

function queue (num) {
  for (let i = 0; i < num; i++) {
    async(i, num);    
  }
}

// queue(randomNumber(3, 8));

module.exports = queue;