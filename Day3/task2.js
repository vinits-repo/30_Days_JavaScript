const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your age: ", (age) => {
  readline.close();

  if (age >= 18) {
    console.log("You are eligible to drive.");
  } else {
    console.log("You are not eligible to drive.");
  }
});
