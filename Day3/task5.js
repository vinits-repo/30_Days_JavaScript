const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your score: ", (score) => {
  score = parseInt(score);

  if (score >= 1 && score <= 100) {
    switch (true) {
      case score >= 86 && score <= 100:
        console.log("You got A grade. Congrats!");
        break;
      case score >= 70:
        console.log("You got B grade. Congrats!");
        break;
      case score >= 55:
        console.log("You got C grade. Congrats!");
        break;
      case score >= 40:
        console.log("You got D grade. Congrats!");
        break;
      case score < 39 || score >= 1:
        console.log("You got F grade.");
        break;
      default:
        console.log("Unexpected case.");
        break;
    }
  } else {
    console.log("Enter your score between 1 to 100.");
  }

  readline.close();
});
