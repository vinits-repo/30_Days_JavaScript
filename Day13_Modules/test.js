const addNum = (num1, num2) => {
  return num1 + num2;
};

const cube = (num) => {
  return Math.pow(num, 3)
}

const person = {
  name: "Vinit",
  age: 21,
  learning: "JavaScript",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

export { addNum, cube, person };
