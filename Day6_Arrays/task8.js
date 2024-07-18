let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

function isEven(element) {
  return element % 2 === 0;
}
