const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your score to see grade: ", (score) => {
  readline.close();

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
      case score < 40:
        console.log("You got F grade.");
        break;
      default:
        console.log("Unexpected case.");
        break;
    }
  } else {
    console.log(`Please Enter valid score.`);
  }
});
