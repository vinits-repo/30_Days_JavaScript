let square = (time, num) => {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      setTimeout(() => {
        resolve(num * num);
      }, time);
    } else {
      reject(console.log("Num should be poisitive."));
    }
  });
};

square(2000, 5).then(result => console.log(result))
