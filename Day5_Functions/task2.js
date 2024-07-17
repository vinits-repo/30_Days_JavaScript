const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the num to square it: ", (num) => {
  num = parseInt(num);
  readline.close();

  square(num);

  function square(num) {
    let ans = num * num;
    console.log(`Square of ${num} is ${ans}`);
  }
});
