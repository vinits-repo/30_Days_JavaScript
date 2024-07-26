const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the dividend: ", (dividend) => {
  readline.question("Enter the divisor: ", (divisor) => {
    try {
      readline.close();

      dividend = parseInt(dividend);
      divisor = parseInt(divisor);

      if (divisor == 0) {
        throw new Error("You can't divide by zero!");
      }
      if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be a number.");
      }

      const result = dividend / divisor;
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  });
});
