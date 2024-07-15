// If - else Statements

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the num: ", (num) => {
  readline.close();

  if (num > 0) {
    console.log(`Given number is a positive nubmer.`);
  } else if (num < 0) {
    console.log(`Given number is a negative nubmer.`);
  } else {
    console.log(`Given number is equal to zero.`);
  }
});
