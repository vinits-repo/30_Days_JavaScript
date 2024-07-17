function maxNum(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else {
    console.log(`${num2} is greater than ${num1}`);
  }
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter num1: ", (num1) => {
  num1 = parseInt(num1);
  readline.question("Enter num2: ", (num2) => {
    num2 = parseInt(num2);
    readline.close();

    maxNum(num1, num2);
  });
});
