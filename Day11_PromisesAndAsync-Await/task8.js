
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'one'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'two'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'three'));

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // ["one", "two", "three"]
}).catch((error) => {
  console.error(error);
});
