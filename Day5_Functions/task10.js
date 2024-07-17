const sumOfNum = (fn1, fn2, num) => {
  console.log(fn2(fn1(num)));
};

const fn1 = (value) => {
  return value + 1;
};

const fn2 = (value) => {
  return value + 2;
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the number: ", (num) => {
  readline.close();
  num = parseInt(num);

  sumOfNum(fn1, fn2, num);
});
