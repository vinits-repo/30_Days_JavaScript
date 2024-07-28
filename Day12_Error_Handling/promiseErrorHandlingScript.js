const calculateSquareRoot = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve(Math.sqrt(num));
    } else {
      reject(
        new Error("The numbers must be poisitive to calculate its sqare root")
      );
    }
  });
};

const handleSquareRootCalculation = (num) => {
  calculateSquareRoot(num)
    .then((result) => {
      console.log(`The root of ${num} is ${result}`);
    })
    .catch((error) => {
      console.log(`Error: ${error.message}`);
    });
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the number to find its square root: ", (num) => {
  readline.close();
  num = parseInt(num);
  if (isNaN(num)) {
    console.log(`Error: The number must be a valid number.`);
  } else {
    handleSquareRootCalculation(num);
  }
});
