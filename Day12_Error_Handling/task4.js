class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

const newError = (msg) => {
  throw new MyCustomError("Hello, This is a Custom Error");
};

document.getElementById("btn").addEventListener("click", () => {
  try {
    newError()
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
});
