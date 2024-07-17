const addTwoNum = (num1, num2) => console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter num1: ", (num1) => {
  num1 = parseInt(num1);
  readline.question("Enter num2: ", (num2) => {
    num2 = parseInt(num2);
    readline.close();

    addTwoNum(num1, num2);
  });
});
