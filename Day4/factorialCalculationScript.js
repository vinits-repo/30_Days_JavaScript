const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter number to find factorial of it: ", (num) => {
  let ans = parseInt(num);
  readline.close();

  let i = ans - 1;

  do {
    ans = ans * i;
    i--;
  } while (i > 0);

  console.log(`Factorial of ${num} is ${ans}`);
});
