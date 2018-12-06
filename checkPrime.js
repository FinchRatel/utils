/**
 * 检查一个整数是否是质数（素数）
 */
function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  console.log(num);
  return true;
}

function test() {
  for (let j = 1; j < 100; j++) {
    checkPrime(j);
  }
}

test();
