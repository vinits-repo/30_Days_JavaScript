function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitforResponse() {
  const arr = [delay(2000), delay(2000), delay(2000)];

  await Promise.race(arr);
  console.log("First promise resolved");

  await Promise.all(arr);
  console.log("All promises resolved");
}

waitforResponse();
