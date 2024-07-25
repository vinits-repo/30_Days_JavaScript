let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };
  
  let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve,ms)
        } else {
            reject(console.log("Shop is closed"))
        }
    })
}

async function kitchen (){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[1]} is selected for making IceCream.`);

        await time(1000)
        console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} is added.`);

        await time(1000)
        console.log("Machine is started to make IceCream.");

        await time(2000)
        console.log(`IceCream is put in the ${stocks.holder[1]}.`);

        await time(3000)
        console.log(`${stocks.toppings[0]} is added.`);

        await time(2000)
        console.log("IceCream is ready to serve.");
    }
    catch(error){
        console.log("customer left", error);
    }
    finally{
        console.log("Day ended, shop is closed");
    }
}
kitchen()