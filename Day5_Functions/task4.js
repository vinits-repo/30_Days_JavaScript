// const twoString = function concatenate(str1, str2) {
//   console.log(str1 + str2);
// };

const twoString = (str1, str2) => console.log(str1 + str2);


const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a string: ", (str1) => {
  readline.question("Enter another string: ", (str2) => {
    readline.close();

    twoString(str1, str2);
  });
});
