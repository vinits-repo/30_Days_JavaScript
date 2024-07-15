const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the num1: ", (num1) => {
  readline.question("Enter the num2: ", (num2) => {
    readline.question("Enter the num3: ", (num3) => {
      readline.close();

      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      num3 = parseFloat(num3);

      if (num1 > num2 && num1 > num3) {
        console.log(`${num1} is largest number among the given three.`);
      } else if (num2 > num1 && num2 > num3) {
        console.log(`${num2} is largest number among the given three.`);
      } else {
        console.log(`${num3} is largest number among the given three.`);
      }
    });
  });
});
