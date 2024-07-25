let square = (time, num) => {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      setTimeout(() => {
        resolve(console.log(num * num));
      }, time);
    } else {
      setTimeout(() => {
        reject(console.log("Num should be poisitive."));
      }, time);
    }
  });
};

square(2000, -1)
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log("Try again.");
  });
