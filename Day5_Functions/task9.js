const greet = () => console.log("Hare Krishna");

const callingFunction = (greet, num) => {
  while (num > 0) {
    greet();
    num--;
  }
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the num to call function that many times: ", (num) => {
  readline.close();

  num = parseInt(num);

  if (!isNaN(num) && num > 0) {
    callingFunction(greet, num);
  } else {
    console.log("Please Enter a valid number.");
  }
});
