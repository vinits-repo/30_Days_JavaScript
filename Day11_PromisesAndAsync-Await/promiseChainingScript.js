const promiseTwo = (time, work) => {
  return new Promise((resolve, reject) => {
    let num = -3; // Changed to -3 to trigger rejection
    if (num > 0) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject("Promise Rejected!");
    }
  });
};

promiseTwo(2000, () => {
  console.log("Promise Starting");
})
  .then(() => {
    return promiseTwo(1000, () => {
      console.log("Promise Chaining one");
    });
  })
  .then(() => {
    return promiseTwo(1000, () => {
      console.log("Promise Chaining two");
    });
  })
  .then(() => {
    return promiseTwo(1000, () => {
      console.log("Promise Chaining three");
    });
  })
  .catch((error) => {
    console.log(error);
  });
