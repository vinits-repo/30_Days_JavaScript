const name = "Vinit";
const age = 21;

const person = {
  name,
  age,
  greet() {
    return `Hello Everyone, My name is ${this.name} and my age is ${this.age}`;
  },
  ["is Eligible to vote"]: age >= 18,
};

console.log(person);
console.log(person.greet());
console.log(person["is Eligible to vote"]);
