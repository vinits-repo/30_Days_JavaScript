let number = [1, 2, 3, 4, 5, 6];

// using map
const cube = (element) => {
  return Math.pow(element, 3);
};
let cubeNum = number.map(cube);
console.log(cubeNum);

// using filter
const removeThree = (element) => {
  return element !== 3;
};
let filterNum = number.filter(removeThree);
console.log(filterNum);

let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9,10],
];
// using reduce
let flatNum = (accumulator, currentValue) => {
  return accumulator.concat(currentValue);
};

let flatNumbers = numbers.reduce(flatNum);
console.log(flatNumbers);
