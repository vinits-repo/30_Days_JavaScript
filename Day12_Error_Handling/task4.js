// CustomError class that extends the built-in Error class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

// Function that throws an instance of the custom error
function throwError() {
    throw new CustomError("This is a custom error message.");
}

// Handling the custom error using try-catch block
try {
    throwError();
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`Caught a custom error: ${error.message}`);
    } else {
        console.error(`Caught an unexpected error: ${error.message}`);
    }
}
