let numbers = [1, 2, 3, 4, 5, 6];

let sumNumbers = numbers.reduce(sum);

console.log(sumNumbers);

function sum(previous, nextElement) {
  return previous + nextElement;
}
