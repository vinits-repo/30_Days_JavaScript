async function handlingURL() {
  fetch("https://Invalid-example.com")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status:${response.status}`);
      }

      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(`Error Detected: ${error.message}`);
    });
}

handlingURL();
