const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the number: ", (num) => {
  readline.close();

  num % 2 === 0
    ? console.log("Given number is even")
    : console.log("Given number is odd.");
});
