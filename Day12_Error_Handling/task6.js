let is_shop_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        try {
          resolve(work());
        } catch (error) {
          reject(error);
        }
      }, time);
    } else {
      reject(new Error("The shop is closed."));
    }
  });
};

order(2000, () => {
  console.log("Order something, the shop is open.");
})
  .then(() => {
    console.log("Order was successful.");
  })
  .catch((error) => {
    console.error(error.message);
  });
