let sleep = require('./sleep');
let randomNum = require('./randomNum');
let count = 0;

function async (i, num) {
  let time = randomNum(1000, 2000);
  sleep(time).then(() => {
    count ++;
    console.log('第' + Math.ceil(count / num) + '次--第' + i + '个--时间：' + time + 'ms');
    async(i, num);
  });
}

function queue (num) {
  for (let i = 0; i < num; i++) {
    async(i, num);    
  }
}

queue(randomNum(3, 8));