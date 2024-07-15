const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter a number: ", (num) => {
    readline.close();

    num = parseInt(num)

    if (num > 0) {
        console.log(`${num} is a positive number.`);
    } else if (num < 0) {
        console.log(`${num} is a negative number.`);
    } else {
        console.log(`Given number is equal to zero.`);
    }
})