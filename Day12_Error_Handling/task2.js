const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function divide(dividend, divisior) {
  if (divisior == 0) {
    throw new Error("You can't divide by zero!");
  }
  if (isNaN(dividend) || isNaN(divisior)) {
    throw new Error("Values must be a number.");
  }
  return dividend / divisior;
}

readline.question("Enter the dividend: ", (dividend) => {
  readline.question("Enter the divisior: ", (divisior) => {
    try {
      readline.close();
      dividend = parseInt(dividend);
      divisior = parseInt(divisior);

      const result = divide(dividend, divisior);
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  });
});
