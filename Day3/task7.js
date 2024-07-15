const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Enter the year to check whether it is leap year or not: ",
  (year) => {
    readline.close();

    year = parseInt(year);

    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  }
);
