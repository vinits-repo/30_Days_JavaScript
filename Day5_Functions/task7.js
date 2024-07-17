const productOfTwoNums = (num1, num2 = 5) => console.log(num1 * num2);

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter the num1 to see the product of 5 and num1: ", (num1) => {
    num1 = parseInt(num1);
    readline.close();

    productOfTwoNums(num1)
})