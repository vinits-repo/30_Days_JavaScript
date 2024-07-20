function greet(name, greeting = "Hello!") {
  return `${greeting}, ${name}`;
}

console.log(greet("vinit"));
console.log(greet("vinit", "Hare Krishna"));
