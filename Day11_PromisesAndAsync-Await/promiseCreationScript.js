const firstPromise = new Promise((resolve, reject) => {
  const is_shop_open = false;
  if (is_shop_open) {
    resolve(console.log("Promise resolved Successfully!"));
  } else {
    reject(console.log("Promise Rejected!"));
  }
});

firstPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
  