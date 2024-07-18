let numbers = [1, 2, 3, 4, 5];

const multiple = (element) => {
  return element * 2;
};

let doubledNumbers = numbers.map(multiple);

console.log(doubledNumbers);

// function multiple(element) {
//   return element * 2;
// }
