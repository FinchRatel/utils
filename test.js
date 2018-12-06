function toFixedQ(val) {
  val = Number(val)
  if (isNaN(val)) {
    return 0;
  } else {
    if (val % 1 === 0) {
      return val;
    } else {
      return val.toFixed(2);
    }
  }
}

let arr = [
  '12.34',
  '102.456',
  'a23.3d',
  '34.56f'
];

arr.map((item) => {
  console.log(toFixedQ(item));
});
