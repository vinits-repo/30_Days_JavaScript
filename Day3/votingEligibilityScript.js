const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your age: ", (age) => {
  readline.close();

  age = parseInt(age);

  if (!isNaN(age) && age > 0) {
    switch (true) {
      case age >= 18:
        console.log(`You are eligible to vote.`);
        break;
      case age < 18:
        console.log(`You are not eligible to vote.`);
        break;
      default:
        console.log(`Please enter a valid age.`);
        break;
    }
  } else {
    console.log(`Please enter a valid age.`);
  }
});
