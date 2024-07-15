const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Enter the num(1-7) for representing the days of the week starting from the Monday: ",
  (day) => {
    readline.close();

    switch (parseInt(day)) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      case 7:
        console.log("Sunday");
        break;
      default:
        console.log(
          "Invalid day number. Please write a valid day number between 1 to 7."
        );
        break;
    }
  }
);
