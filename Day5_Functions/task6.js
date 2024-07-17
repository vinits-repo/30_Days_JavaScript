const containChar = (str, char) => str.includes(char);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a string: ", (str) => {
  readline.question("Enter a char: ", (char) => {
    readline.close();

    console.log(containChar(str, char));
  });
});
