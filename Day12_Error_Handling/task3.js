let readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

const squareRoot = (num) => {
    if (num < 0) {
        throw new Error("Number should be poisitive.");
    }
    return Math.sqrt(num)
}

readline.question("Enter a to find its square root: ", (num) => {
    readline.close()
    num = parseInt(num)
    try {
        const ans  = squareRoot(num)
        console.log(`Square Root of ${num} is ${ans}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
    finally{
        console.log("Program ends here.");
    }
})