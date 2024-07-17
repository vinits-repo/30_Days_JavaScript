const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a num to check even or add: ", (num) => {
  num = parseInt(num);
  readline.close();

  evenOrOdd(num);

  function evenOrOdd(num) {
    if (num % 2 === 0) {
      console.log(`${num} is a even number.`);
    } else {
      console.log(`${num} is a odd number.`);
    }
  }
});
