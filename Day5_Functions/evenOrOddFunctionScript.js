function isEvenOrOddScript() {
  const check = (num) => {
    if (num % 2 === 0) {
      console.log(`${num} is a even number.`);
    } else {
      console.log(`${num} is a odd number.`);
    }
  };


  check(81)
}


isEvenOrOddScript()