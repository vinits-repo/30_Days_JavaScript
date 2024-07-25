let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, makignIcecream) => {
  return new Promise((resovle, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resovle(makignIcecream());
      }, time);
    } else {
      reject(console.log("Our Shop is closed"));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.Fruits[1]} is selected for making IceCream.`);
})
  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} is added.`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("Machine is started to make IceCream.");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`IceCream is put in the ${stocks.holder[1]}.`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[0]} is added.`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("IceCream is ready to serve.");
    });
  })

  .catch(() => {
    console.log("Customer left the shop.");
  })

  .finally(() => {
    console.log("Thank You.");
  });
