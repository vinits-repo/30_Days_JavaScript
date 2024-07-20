let name = "Ram";
let age = 21;

let person = {
  name,
  age,
  greet() {
    return `Hello! ${this.name}`;
  },
};

console.log(person);
console.log(person.greet());



let prop = age

let anotherPerson = {
    [prop]: "This is my age."
}

console.log(anotherPerson);