const greetMessage = (name, age = 21) => {
    return `Hello, my name is ${name} and my age is ${age}.`
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})


readline.question("Enter your name: ", (naam) => {
    readline.close()

    console.log(greetMessage(naam));
})