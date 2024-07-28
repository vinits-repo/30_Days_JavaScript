const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

class validationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation Error";
    this.message = "Text is Empty, Please write something.";
  }
}

const inputValidation = (text) => {
  if (text.trim() !== "") {
    console.log(text);
  } else {
    throw new validationError();
  }
};

readline.question("Enter some text: ", (text) => {
  readline.close();
  try {
    inputValidation(text);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
});
