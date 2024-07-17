function highOrderFunctionScript() {
  const fn = () => console.log("Hare Krishna");

  const repeatFunction = (fn, times) => {
    for (let i = 0; i < times; i++) {
      fn();
    }
  };

  repeatFunction(fn, 5)
}

highOrderFunctionScript();
